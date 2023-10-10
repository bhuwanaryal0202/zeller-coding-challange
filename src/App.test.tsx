/**
 * @format
 */
import App from './App';
import { MockedProvider } from '@apollo/client/testing';
import { CUSTOMERS_QUERY } from './graphql/queries';
import { act } from 'react-dom/test-utils';
import renderer from 'react-test-renderer';

const adminMocks = [
    {
        request: {
            query: CUSTOMERS_QUERY,
            variables: { userType: 'Admin' },
        },
        result: {
            data: {
                customers: [
                    {
                        id: '1',
                        name: 'John Doe',
                        email: 'johndoe@example.com',
                    },
                    {
                        id: '2',
                        name: 'Jane Doe',
                        email: 'janedoe@example.com',
                    },
                ],
            },
        },
    },
];

const managerMocks = [
    {
        request: {
            query: CUSTOMERS_QUERY,
            variables: { userType: 'Manager' },
        },
        result: {
            data: {
                customers: [
                    {
                        id: '1',
                        name: 'John Doe',
                        email: 'johndoe@example.com',
                    },
                    {
                        id: '2',
                        name: 'Jane Doe',
                        email: 'janedoe@example.com',
                    },
                ],
            },
        },
    },
];

it('renders admin correctly', async () => {
    let tree: renderer.ReactTestRenderer | null = null; // Fix for Problem 1
    await act(async () => {
        tree = renderer.create(
            <MockedProvider mocks={adminMocks} addTypename={false}>
                <App />
            </MockedProvider>,
        );
    });
    expect(tree!.toJSON()).toMatchSnapshot(); // Fix for Problem 2
});


it('renders manager correctly', async () => {
    let tree: renderer.ReactTestRenderer | null = null; // Fix for Problem 1
    await act(async () => {
        tree = renderer.create(
            <MockedProvider mocks={managerMocks} addTypename={false}>
                <App />
            </MockedProvider>,
        );
    });
    expect(tree!.toJSON()).toMatchSnapshot(); // Fix for Problem 2
});


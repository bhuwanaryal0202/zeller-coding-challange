import { render, screen } from '@testing-library/react';
import CustomerList from './CustomerList';
import { Customer } from './types';

describe('CustomerList', () => {
    const customers: Customer[] = [
        { id: '1', name: 'John Doe', email: 'john.doe@example.com', role: 'admin' },
        { id: '2', name: 'Jane Doe', email: 'jane.doe@example.com', role: 'manager' },
    ];

    it('renders a list of customers', () => {
        render(<CustomerList customers={customers} />);
        expect(screen.getByText('John Doe')).toBeInTheDocument();
        expect(screen.getByText('Jane Doe')).toBeInTheDocument();
    });

    
});

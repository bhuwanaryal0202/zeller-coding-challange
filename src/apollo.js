import {ApolloClient, InMemoryCache} from '@apollo/client'
import awsExports from './aws-exports';
import { Amplify } from "aws-amplify";



Amplify.configure(awsExports);

/**
 * Creates a new ApolloClient instance with the specified configuration options.
 *
 * @param {Object} options - The configuration options for the ApolloClient instance.
 * @param {string} options.uri - The GraphQL endpoint URI.
 * @param {Object} options.cache - The cache implementation to use.
 * @param {Object} options.headers - The headers to include in the requests.
 * @param {string} options.region - The AWS region to use.
 * @param {Object} options.auth - The authentication configuration options.
 * @param {string} options.auth.type - The authentication type to use.
 * @param {string} options.auth.apiKey - The API key to use for authentication.
 *
 * @returns {ApolloClient} The new ApolloClient instance.
 */
const client = new ApolloClient({
        uri: awsExports.aws_appsync_graphqlEndpoint,
        cache: new InMemoryCache(),
        headers: {
            "X-Api-Key": awsExports.aws_appsync_apiKey,
        },
        region: awsExports.aws_appsync_region,
        auth: {
            type: awsExports.aws_appsync_authenticationType,
            apiKey: awsExports.aws_appsync_apiKey,
        },
    });
    

export default client;
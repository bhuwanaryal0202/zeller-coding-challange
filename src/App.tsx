import React,{useState} from 'react';
import {useQuery} from '@apollo/client';
import {CUSTOMERS_QUERY} from './graphql/queries';
import CustomerList from './components/CustomerList';
import './App.css';
import UserTypeSelector from './components/UserTypeSelector';
import client from './apollo';
import { Customer } from './components/types';




function App() {

  const [userType, setUserType] = useState('Admin');

  const {loading, error, data} = useQuery(CUSTOMERS_QUERY, {
    client,
     variables: {userType},
     fetchPolicy: 'cache-first', // Use cached data while fetching new data
  });
  // console.log("Data:", data); 

  if(loading) return <p>Loading...</p>;
  if(error) return <p>Error: {error.message}</p>

  const customers = data.listZellerCustomers.items;
  // console.log("Customers:", customers);

  
   // Filter customers based on the selected userType
   const filteredCustomers = customers.filter((customer: Customer) => customer.role === userType);
   console.log("filteredCustomers:",filteredCustomers  );

  

  return (
    <>
    <div className='app'>
    <div className="line"></div> 
      <h1>User Types</h1>
      <UserTypeSelector 
        userType={userType}
        onUserTypeChange={(newUserType) => setUserType(newUserType)}
      ></UserTypeSelector>
      <div className="line"></div> 
      <h1>Customer List</h1>
      <CustomerList customers={filteredCustomers} />
      <div className="line"></div> 
    </div>
    </>
  );
}

export default App;

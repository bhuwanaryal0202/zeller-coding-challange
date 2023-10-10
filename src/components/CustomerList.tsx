
//expected props interface for the CustomerList components
/**
 * Props for the CustomerList component.
 * @interface
 * @property {Customer[]} customers - An array of Customer objects.
 */

import React from 'react'
import { Customer } from './types'
import './CustomerList.css'

interface CustomerListProps{
  customers: Customer[];
}

//customerList component: Render a list of customers.
const CustomerList: React.FC<CustomerListProps> = ({customers}) => {
  return (
    <>
    
    <ul>
  {customers && customers.map((customer) => (
    
    <li key={customer.id}>
        <div className='list-style'>
                {customer.name.charAt(0).toUpperCase()}
              </div>
              <div className="list-item">
                <div className="list-item-name">
                  {customer.name}
                </div>
                <div className="list-item-role">
                  {customer.role.charAt(0).toUpperCase() + customer.role.slice(1).toLowerCase()}
                </div>
              </div>
    </li>
  ))}
</ul>

    </>
  )
}

export default CustomerList
/**
 * A component that allows the user to select their user type.
 * @param {UserTypeSelectorProps} props - The props object containing the user type and onUserTypeChange function.
 * @returns {JSX.Element} - A JSX element representing the user type selector.
 */
import React from 'react'
import { UserTypeSelectorProps } from './types'
import './UserTypeSelector.css'


const UserTypeSelector: React.FC<UserTypeSelectorProps> = ({userType, onUserTypeChange}) => {
  return (
    <>
    <label  className={`radio-label ${userType === 'ADMIN' ? 'selected' : ''}`}>
        <input type="radio"
                value= "Admin"
                checked= {userType === 'ADMIN'}
                onChange={() => onUserTypeChange('ADMIN')} />
                Admin
    </label>
    <label className={`radio-label ${userType === 'MANAGER' ? 'selected' : ''}`}>
        <input type="radio"
                value="Manager"
                checked ={userType === 'MANAGER'}
                onChange ={() => onUserTypeChange('MANAGER')} />
                Manager
    </label>

    </>
  )
}

export default UserTypeSelector
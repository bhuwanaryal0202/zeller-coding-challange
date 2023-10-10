//types for the CustomerList component.
export interface Customer {
    id: string;
    name: string;
    email: string;
    role: string;
}

//types for the UserTypeSelector component.
export interface UserTypeSelectorProps {
    userType: string;
    onUserTypeChange: (newUserType: string) => void;
}

  

  
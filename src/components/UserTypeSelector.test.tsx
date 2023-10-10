import { render, fireEvent, screen } from '@testing-library/react';
import UserTypeSelector from './UserTypeSelector';

describe('UserTypeSelector', () => {
    it('should render two radio buttons', () => {
        render(<UserTypeSelector userType="ADMIN" onUserTypeChange={() => {}} />);
        expect(screen.getByLabelText('Admin')).toBeInTheDocument();
        expect(screen.getByLabelText('Manager')).toBeInTheDocument();
    });

    it('should call onUserTypeChange when a radio button is clicked', () => {
        const handleUserTypeChange = jest.fn();
        render(<UserTypeSelector userType="ADMIN" onUserTypeChange={handleUserTypeChange} />);
        fireEvent.click(screen.getByLabelText('Manager'));
        expect(handleUserTypeChange).toHaveBeenCalledWith('MANAGER');
    });

    it('should check the radio button corresponding to the userType prop', () => {
        render(<UserTypeSelector userType="MANAGER" onUserTypeChange={() => {}} />);
        expect(screen.getByLabelText('Manager')).toBeChecked();
    });
});
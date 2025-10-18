import { useState } from "react";

export default function useSignupForm(initialValues) {
    const [formData, setFormData] = useState(initialValues);
    const [touched, setTouched] = useState(initialValues);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleBlur = (e) => {
        const { name } = e.target;
        setTouched((prev) => ({ ...prev, [name]: true }));
    };

    const validate = () => {
        const errors = {};

        if (!formData.firstName.trim()) errors.firstName = "Please enter your first name";
        if (!formData.lastName.trim()) errors.lastName = "Please enter your last name";
        if (!formData.email.trim()) errors.email = "Please enter your correct email address";
        if (!formData.phone.trim()) errors.phone = "Please enter your phone number";

        return errors;
    };

    const handleSubmit = (e, onSuccess) => {
        e.preventDefault();
        const errors = validation();

        if (Object.keys(errors).lenght > 0) {
            // Mark all fields as touched
            setTouched({
                firstName: true,
                lastName: true,
                email: true,
                phone: true,
            });
            return;
        }

        if (onSuccess) onSuccess(formData);
    };

    return {
        formData,
        touched,
        errors: validate(),
        handleChange,
        handleBlur,
        handleSubmit,
    };
}
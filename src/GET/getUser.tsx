import { useState, useEffect } from "react";
//import { useHistory } from "react-router-dom";
import { User } from "../modules/user";
import './getUser.css'
import axios from "axios";

interface Props {
    user: User | null;
}

interface FormErrors {
    [key: string]: string;
}

var id: String | undefined;

function PropExemple({ user }: Props) {

    id= user?._id;

    const userNuevo: User = {
        name: {
            first_name: user?.name.first_name || '',
            middle_name: user?.name.middle_name || '',
            last_name: user?.name.last_name || '',
        },
        email: user?.email || '',
        phone_number: user?.phone_number || '',
        gender: user?.gender || ''
    };

    const isValidEmail = (email: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const [first_name, setFirstName] = useState('');
    const [middle_name, setMiddleName] = useState('');
    const [last_name, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone_number, setPhoneNumber] = useState('');
    const [gender, setGender] = useState('');
    const [errors, setErrors] = useState<FormErrors>({});
    
    const validateField = (fieldName: string, value: string) => {
        let errorMessage = '';

        switch (fieldName) {
           
            case 'email':
                errorMessage = !isValidEmail(value) ? 'Invalid email format' : '';
                break;
            
            default:
                break;
        }
        setErrors(prevErrors => ({
            ...prevErrors,
            [fieldName]: errorMessage
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("aqui")
        const isFormValid = validateForm();
        if (isFormValid) {
            const user: User = {
                name: {
                    first_name: first_name || userNuevo.name.first_name ,
                    middle_name: middle_name || userNuevo.name.middle_name  ,
                    last_name: last_name||userNuevo.name.last_name ,
                },
                email: email || userNuevo.email ,
                phone_number: phone_number || userNuevo.phone_number ,
                gender: gender || userNuevo.gender 
            };

            console.log(user.name.first_name, user.name.middle_name, user.name.last_name, user.email, user.phone_number, user.gender)
            axios.put(`http://localhost:3000/user/${id}`, user)
                .then(result => {
                    console.log(result);
                    setFirstName('');
                    setMiddleName('');
                    setLastName('');
                    setEmail('');
                    setPhoneNumber('');
                    setGender('');
                })
                .catch(err => console.error(err));
        }
    };

    const validateForm = () => {
        let isValid = true;

        validateField('first_name', first_name);
        validateField('middle_name', middle_name);
        validateField('last_name', last_name);
        validateField('email', email);

        for (const error in errors) {
            if (errors[error] !== '') {
                isValid = false;
                break;
            }
        }

        return isValid;
    };

    return (
        <div className="user-details">
            {user ? (
                <div>
                    <h2>User Details:</h2>
                    <form onSubmit={handleSubmit} className="update-user-form">
                    <div>
                        <label>First Name</label>
                        <input type="text" placeholder={user ? user.name.first_name.toString() : ''}value={first_name} onChange={(e) => { setFirstName(e.target.value); validateField('first_name', e.target.value); }} />
                        {errors.first_name && <span style={{ color: 'red' }}>{errors.first_name}</span>}
                    </div>
                    <div>
                    <label>Middle Name</label>
                    <input type="text"placeholder={user ? user.name.middle_name.toString() : ''} value={middle_name} onChange={(e) => { setMiddleName(e.target.value); validateField('middle_name', e.target.value);}} />
                    {errors.middle_name && <span style={{ color: 'red' }}>{errors.middle_name}</span>}
                </div>
                <div>
                    <label>Last Name</label>
                    <input type="text" placeholder={user ? user.name.last_name.toString() : ''}value={last_name} onChange={(e) => { setLastName(e.target.value); validateField('last_name', e.target.value); }} />
                    {errors.last_name && <span style={{ color: 'red' }}>{errors.last_name}</span>}
                </div>
                <div>
                    <label>Email</label>
                    <input type="text"placeholder={user ? user.email.toString() : ''} value={email} onChange={(e) => { setEmail(e.target.value); validateField('email', e.target.value); }} />
                    {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
                </div>
                <div>
                    <label>Phone Number</label>
                    <input type="text" placeholder={user ? user.phone_number.toString() : ''}value={phone_number} onChange={(e) => setPhoneNumber(e.target.value)} />
                </div>
                <div>
                    <label>Gender</label>
                    <input type="text" placeholder={user ? user.gender.toString() : ''}value={gender} onChange={(e) => setGender(e.target.value)} />
                </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            ) : (
                <p>Please select a user from the table.</p>
            )}
        </div>
    );
}

export default PropExemple;
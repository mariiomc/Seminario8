 import { useState, useEffect } from "react";
 import axios from "axios";
 import { User } from "../modules/user";
import { strict } from "assert";

function CreateUser() {
    const [first_name, setFirsName] = useState('');
    const [middle_name, setMiddleName] = useState('');
    const [last_name, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone_number, setPhoneNumber] = useState('');
    const [gender, setGender] = useState('');
    
    const Submit = (e: any) => {
        e.preventDefault();
        const user : User = {
            name: {
                first_name: first_name ,
                middle_name: middle_name,
                last_name: last_name,
            },
            email: email,
            phone_number: phone_number,
            gender: gender
    
        };

        axios.post("http://localhost:3000/user", user)
        .then(result => {
            console.log(result)
        })
        .catch(err => console.log(err));
        console.log(user);
    }
        
    return (
        <div>
            <form onSubmit={Submit}>
                <div>
                    <label>First Name</label>
                    <input type="text" value={first_name} onChange={(e: any) => setFirsName(e.target.value)}/> 
                </div>
                <div>
                    <label>Middle Name</label>
                    <input type="text" value={middle_name} onChange={(e: any) => setMiddleName(e.target.value)}/> 
                </div>
                <div>
                    <label>Last Name</label>
                    <input type="text" value={last_name} onChange={(e: any) => setLastName(e.target.value)}/> 
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" value={email} onChange={(e: any) => setEmail(e.target.value)}/> 
                </div>
                <div>
                    <label>Phone Number</label>
                    <input type="text" value={phone_number} onChange={(e: any) => setPhoneNumber(e.target.value)}/> 
                </div>
                <div>
                    <label>Gender</label>
                    <input type="text" value={gender} onChange={(e: any) => setGender(e.target.value)}/> 
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default CreateUser;
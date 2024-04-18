 import { useState } from "react";
 import axios from "axios";
 import { User } from "../modules/user";
import { strict } from "assert";

function CreateUser() {
    const [name, setName] = useState({
        first_name: '',
        middle_name: '',
        last_name: ''
    })
    const [email, setEmail] = useState('');
    const [phone_number, setPhoneNumber] = useState('');
    const [gender, setGender] = useState('');
    

    const Submit = (e: any) => {
        e.preventDefault();
        const user : User = {
            name: {
                first_name: name.first_name ,
                middle_name: name.middle_name,
                last_name: name.last_name,
            },
            email: email,
            phone_number: phone_number,
            gender: gender
    
        };

        axios.post("http://localhost:3000/user", user)
        .then(result => {
            console.log(result)
        })
        .catch(err => console.log(err))

        return (
            <div>
                <form onSubmit={Submit}>
                    <div>
                        <label>First Name</label>
                        <input type="text" value={name.first_name} onChange={(e: any) => setName(e.target.value)}/> 
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default CreateUser;
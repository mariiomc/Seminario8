import { useState } from "react";
import axios from "axios";
import { User } from "../modules/user";

function CreateUser () {
    const [first_name, setFirstName] = useState()
    const [middle_name, setMiddleName] = useState()
    const [last_name, setLastName] = useState()
    const [email, setEmail] = useState()
    const [phone_number, setPhoneNumber] = useState()
    const [gender, setGender] = useState()

    const user : User = {
        
    }

    const Submit = (e: any) => {
        e.preventDefault();
        axios.post("http://localhost:3000/user", user)
        .then(result => {
            console.log(result)
        })
        .catch(err => console.log(err))
    }




}

export default CreateUser;
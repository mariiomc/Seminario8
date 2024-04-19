import { useState, useEffect } from "react";
import { User } from "../modules/user";
import axios from "axios";

interface GetUsersProps {
    usersUpdated: boolean;
}

function GetUsers({ usersUpdated } : GetUsersProps){
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        axios.get('http://localhost:3000/user')
        .then((result) => setUsers(result.data))
        .catch((err) => console.log(err))
    }, [usersUpdated] )

    return (
        <div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone number</th>
                            <th>Gender</th>
                            <th>Posts</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => (
                                    <tr key = {index}>
                                    <td>{user.name.first_name} {user.name.middle_name} {user.name.last_name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone_number}</td>
                                    <td>{user.gender}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default GetUsers;


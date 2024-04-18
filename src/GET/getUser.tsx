import { useState, useEffect } from "react";
import { User } from "../modules/user";
import axios from "axios";


function GetUsers(){
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        axios.get('http://localhost:3000/user')
        .then((result) => setUsers(result.data))
        .catch((err) => console.log(err))
    }, [] )

    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                {/* <Link to="/create" className='btn btn-success'>Add + </Link> */}
                <table className='table'>
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
                                   {/*  <td>
                                    <Link to={`/update/${user._id}`} className='btn btn-success'>Update</Link>
                                    <Link to={`/products/`} className='btn btn-success'>Products</Link>
                                        <button className='btn btn-danger' onClick={() => handleDelete(user._id)}>Delete</button>
                                    </td> */}
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

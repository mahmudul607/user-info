import React from 'react';
import './User.css'
import profilePic from '../.././all.jpg';

const User = (props) => {


    const { name, phone, salary, picture} = props.user;
    const addUser = props.addUser;
  
console.log(salary);

    return (
        <div className='user-body'>
            <div className='person'>
                <img src={picture} alt="" />
                <h1>Name: {name}</h1>
                <h3>Salary: {salary}</h3>
                <h5>Phone: {phone}</h5>
                <button onClick={() => addUser(props.user)}>Add User</button>
            </div>
        </div>
    );

};

export default User;
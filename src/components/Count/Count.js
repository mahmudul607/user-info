import React from 'react';
import './Count.css';

const Count = (props) => {
    const person = props.person;
   
console.log(person);

    let totalYearlySalary = 0;
for (let i = 0; i < person.length; i++) {
    const select = person[i];
    totalYearlySalary = totalYearlySalary + select.salary;
}
let [id, name, salary] = ['','',''];

for (let i = 0; i < person.length; i++) {
    const info = person[i];
    id = id + ',' + info.id;
    name = name + ',' + info.name;
    salary = salary + ',' + info.salary;
}



    return (
        <div className="Count">
            
            <h1>Added Person: {person.length}</h1>
            <h3>Total Yearly Salary: {totalYearlySalary}</h3>
            <div>
                <p>Id: {id}</p>
                <p>Name: {name}</p>
                <p>Age: {salary}</p>
            </div>
        </div>
       
    );
};
  

export default Count;
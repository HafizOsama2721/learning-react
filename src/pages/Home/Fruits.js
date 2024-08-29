import React from 'react'

export default function Fruits() {

  const fruits = ['Apple', 'Mango', 'Orange', 'Banana', 
    'Strawberry', 'Grapes', 'Pineapple', 'Watermelon', 'Avocado', 'Dates'];

  const user = {firstName: 'HafizOsama27', lastName: 'Rajpoot', age: 24, city: 'Faisalabad', country: 'Pakistan'};
  const {firstName, lastName, age} = user;

  // const myVehicle = {
  //   brand: 'Ford',
  //   model: 'Mustang',
  //   color: 'red'
  // }
  
  // const updateMyVehicle = {
  //   type: 'car',
  //   year: 2021, 
  //   color: 'yellow'
  // }
  
  // const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}
  // console.log(myUpdatedVehicle);

  let cgpa = 3.5;

  return (
    <div className='py-5 bg-light fruits'>
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1 className='text-center'>This is our Fruits Section</h1>
                    <p className='text-center text-dark'>{cgpa >= 3 ? 'Brilliant' : 'Passed'}</p>
                    {/* <p className='text-center text-dark'>{cgpa >= 3 && 'Brilliant'}</p> */}
                    <p className='text-center text-danger'>User name is : {firstName} {lastName} and age is {age}.</p>
                    <div className="text-center">
                        <ul>
                            {
                                fruits.map((fruit, i) => {
                                    return <li key={i} className='text-success'>{i + 1} {fruit}</li>
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

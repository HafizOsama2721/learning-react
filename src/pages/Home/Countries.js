import React from "react";
import countries from '../../data/countries';
import ButtonSimple from "../../components/Buttons/ButtonSimple";

export default function Countries() {
  return (
    <div className="py-5 bg-secondary fruits">
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="text-center">This is our Countries Section</h1>
            <ul className="text-center">
              {
                countries.map((country, i) => {
                  return <li key={i}>{i + 1} {country}</li>
                })
              }
            </ul>
            <div className="text-center">
              <ButtonSimple bgColor='primary' text='Create' icon='far fa-bell' />
              <ButtonSimple bgColor='success' text='Delete' icon='far fa-trash' />
              <ButtonSimple bgColor='danger' text='Update' icon='fa-solid fa-upload' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

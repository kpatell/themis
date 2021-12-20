import React, { useState } from 'react';
import './App.css';

export const App = () => {
    let [name, setName] = useState();
    let [email, setEmail] = useState();
    let [phoneNumber, setPhoneNumber] = useState();

    const nameUpdate = (event) => {
        setName(event.target.value);
    }

    const emailUpdate = (event) => {
        setEmail(event.target.value);
    }

    const phoneNumberUpdate = (event) => {
        setPhoneNumber(event.target.value);
    }

    const handleSubmit = () => {
        const postUrl = 'http://localhost:3001/queue';

        fetch(postUrl, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                email: email,
                phone_number: phoneNumber
            })
        })
            .then(res => res.json())
            .then(data => console.log(data));
    }

    return (
        <div class='queueForm'>
            <form onSubmit={handleSubmit} name='queueForm'>
                <div id='fullNameFormSection'>
                    <label id='fullNameLabel'>Full Name: </label>
                    <input required onChange={nameUpdate} id='fullNameField'></input>
                </div>

                <div id='emailFormSection'>
                    <label id='emailLabel'>Email: </label>
                    <input required onChange={emailUpdate} id='emailField'></input>
                </div>

                <div name='phoneNumberSection'>
                    <label name='phoneNumberLabel'>Phone Number: </label>
                    <input required onChange={phoneNumberUpdate} id='phoneNumberField'></input>
                </div>

                <button type='submit' id='submitFormButton'>Submit</button>
            </form>
        </div>
    );
}

export default App;

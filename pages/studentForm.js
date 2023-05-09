import React, { useState, useEffect } from'react';
import Link from 'next/link';

export default function StudentForm() {

    const randID = Math.floor(Math.random() * (99999 - 10000));
    const [randomID, setRandomID] = useState("");
    const [name, setName] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [gender, setGender] = useState("");
    const [classes, setClasses] = useState([]);
    const [address, setAddress] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        setRandomID(randID);
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = { name, birthDate, gender, classes, address, phoneNumber, email };
        const response = await fetch('http://localhost:5000/student', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        console.log(data)
        if(response.ok) {
            alert('Form submitted successfully!');
        } else {
            alert('Something went wrong');
        }
    }

  return (
    <>
      <div>
        <h1>Student Form</h1>
        <div id="container">
            <form action="/student" method="POST" onSubmit={handleSubmit}>
                <div class="section">
                    <label for="name">Enter your name: </label>
                    <input type="text" name="name" id="name" value={name} required 
                        onChange={e => setName(e.target.value)} />
                </div>

                <div class="section">
                    <label for="birthDate">Enter your birthdate: </label>
                    <input type="text" min="1900" value={birthDate} name="birthDate" id="birthDate" required 
                        onChange={e => setBirthDate(e.target.value)} />
                </div>

                <div class="section">
                    <label for="gender">Enter your gender: </label>
                    <input list="browsers" name="gender" id="gender" required value={gender}
                        onChange={e => setGender(e.target.value)} />
                    <datalist id="browsers">
                        <option value="Male"></option>
                        <option value="Female"></option>
                        <option value="Other"></option>
                    </datalist>
                </div>

                <div class="section">
                    <label for="class">Enter your classes (separate by commas): </label>
                    <input multiple class="class" type="text" name="class" id="class1" required value={classes}
                        onChange={e => setClasses(e.target.value)} />
                </div>

                <div class="section">
                    <label for="address">Enter your address: </label>
                    <input type="text" name="address" id="address" required value={address}
                        onChange={e => setAddress(e.target.value)} />
                </div>

                <div class="section">
                    <label for="phoneNumber">Enter your phone number: </label>
                    <input type="text" name="phoneNumber" id="phoneNumber" required value={phoneNumber}
                        onChange={e => setPhoneNumber(e.target.value)} />
                </div>

                <div class="section">
                    <label for="email">Enter your email: </label>
                    <input type="text" name="email" id="email" required value={email}
                        onChange={e => setEmail(e.target.value)} />
                </div>
                <div>
                    <p>Assigned Student ID: {randomID}</p>
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
        <div class="flex">
            <div class="a">
                <Link href='/'>Home</Link>
            </div>
            <Link href='/dorm'>Next: Dorm</Link>
        </div>
      </div>
    </>
  )
}

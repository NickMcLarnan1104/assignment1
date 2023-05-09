import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function facultyForm() {

    const randID = Math.floor(Math.random() * (99999 - 10000));
    const [randomID, setRandomID] = useState(0);
    const [fname, setFname] = useState("");
    const [fbirthDate, setFbirthDate] = useState("");
    const [femail, setFemail] = useState("");
    const [position, setPosition] = useState("");
    const [extension, setExtension] = useState("");
    const [fphoneNumber, setFphoneNumber] = useState("");

    useEffect(() => {
        setRandomID(randID);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = { fname, fbirthDate, femail, position, extension, fphoneNumber };
        const response = await fetch('http://localhost:5000/faculty', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        })
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
                <h1>Faculty Form</h1>
                <div class="a">
                    <a href='/'>Home</a>
                </div>
                <div id="container">
                    <form action="/faculty" method="POST" onSubmit={handleSubmit}>
                        <div class="section">
                            <label for="name">Enter your name: </label>
                            <input type="text" name="name" id="name" required value={fname} onChange={e => setFname(e.target.value)} />
                        </div>

                        <div class="section">
                            <label for="born">Enter year you were born: </label>
                            <input type="text" name="born" id="born" required value={fbirthDate} onChange={e => setFbirthDate(e.target.value)} />
                        </div>

                        <div class="section">
                            <label for="email">Enter your email: </label>
                            <input type="text" name="email" id="email" required value={femail} onChange={e => setFemail(e.target.value)} />
                        </div>

                        <div class="section">
                            <label for="position">Enter your position: </label>
                            <input type="text" name="position" id="position" required value={position} onChange={e => setPosition(e.target.value)} />
                        </div>

                        <div class="section">
                            <label for="extension">Enter your extension: </label>
                            <input type="text" name="extension" id="extension" required value={extension} onChange={e => setExtension(e.target.value)} />
                        </div>

                        <div class="section">
                            <label for="number">Enter your phone number: </label>
                            <input type="text" name="number" id="number" required value={fphoneNumber} onChange={e => setFphoneNumber(e.target.value)} />
                        </div>

                        <p>Your random ID: {randomID}</p>

                        <button type="submit">Submit</button>

                    </form>
                    {/* <Link href="/showApplications">Applications</Link> */}
                </div>    
            </div>
        </>
    )
}
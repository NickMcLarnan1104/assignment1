import Link from 'next/link';
import React, { useState } from 'react';

export default function Dorm() {

    const [daddress, setDaddress] = useState('');
    const [dprice, setDprice] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = { daddress, dprice };
        const request = await fetch('http://localhost:5000/dorm', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        console.log(data)
        if(request.ok) {
            alert("Success!");
        } else {
            console.log("Error");
        }
    };

    return (
        <>
            <div>
                <h1>Dorm</h1>
                <div id="container">
                    
                    <form action="/dorm" method="POST" onSubmit={handleSubmit}>
                        <div class="section">
                            <label for="dorm-address">Enter your dorm address: </label>
                            <input type="text" name="dorm-address" id="dorm-address" value={daddress} required 
                            onChange={e => setDaddress(e.target.value)} />
                        </div>
                        <div class="section">
                            <label for="dorm-rent">Enter your dorm total price: </label>
                            <input type="text" name="dorm-rent" id="dorm-rent" value={dprice} required 
                            onChange={e => setDprice(e.target.value)} /> 
                        </div>
                       
                        <button type='submit'>Submit</button>
                    </form>
                </div>
                <div class='flex'>
                    <Link href='/'>Home</Link>
                    <Link href='/studentForm'>Back</Link> 
                    <Link href='/rent'>Pay rent</Link>
                </div>
                
            </div>
        </>
    )
}
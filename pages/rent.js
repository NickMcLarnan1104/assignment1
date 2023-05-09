import Link from "next/link"
import { useState } from 'react'

export default function Rent() {

    const [paymentInfo, setPaymentInfo] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {paymentInfo};
        const request = await fetch('http://localhost:5000/rent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        console.log(data)
        if(request.ok) {
            alert('Rent paid for!');
        } else {
            alert('Something went wrong');
        }
    }
    
    return (
        <>
            <div>
                <h1>Rent</h1>
                <div id="container">
                    
                    <form action="/rent" method="POST" onSubmit={handleSubmit}>

                        <div class="section">
                            <label for="rent">Enter your rent due: </label>
                            <div>
                               $<input value={paymentInfo} type="text" name="rent" id="rent" required onChange={e => setPaymentInfo(e.target.value)} /> 
                            </div>
                        </div>
                        <button type='submit'>Submit</button>
                    </form>
                </div>
                
                <div class="flex">
                    <Link href='/'>Home</Link>
                    <Link href='/dorm'>Back: Dorm</Link>
                    <Link href='/workOrder'>Work Order</Link>
                </div>
                
            </div>

        
        </>
    )
}
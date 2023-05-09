import Link from 'next/link';
import { useState } from 'react';

export default function WorkOrder() {

    const [propertyDamage, setPropertyDamage] = useState("");
    const [applianceDamage, setApplianceDamage] = useState("");
    const [applicanceRelacement, setApplianceReplacement] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = { propertyDamage, applianceDamage, applicanceRelacement }
        const response = await fetch('http://localhost:5000/workOrderType', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })

        console.log(data)
        if(response.ok) {
            alert('Work order submitted! Thank you for your submission.');
        } else {
            alert('Something went wrong');
        }
    }

    return (
        <>
            <div>
                <h1>Work Order</h1>
                <div id="container">
                    
                    <form action="/workOrderType" method="POST" onSubmit={handleSubmit}>

                        <div class="section">
                            <label for="property-damage">Property Damage: </label>
                            <select value={propertyDamage} onChange={e => setPropertyDamage(e.target.value)}>
                                <option value=""></option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                        <div class="section">
                            <label for="appliance-damage">Appliance Damage Details: </label>
                            <input type="text" name="name" id="name" value={applianceDamage} required 
                                onChange={e => setApplianceDamage(e.target.value)} />
                        </div>
                        <div class="section">
                            <label for="appliance-replacement">Appliance Replacement: </label>
                            <select value={applicanceRelacement} onChange={e => setApplianceReplacement(e.target.value)}>
                                <option value=""></option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>

                        <button type='submit'>Submit</button>
                    </form>
                </div>
                
                <div class="flex">
                    <Link href='/'>Home</Link>
                    <Link href='/dorm'>Back: Dorm</Link>
                    <Link href='/application'>Application</Link>
                </div>
                
            </div>

        </>
    )
}
import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/router';

export default function Application() {

    const [status, setStatus] = useState('');
    const [cost, setCost] = useState('');

    const router = useRouter();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const application = {
            status: status,
            cost: cost,
        };
        fetch('http://localhost:5000/application', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(application)
        })
        .then(response => response.json())
        .then(data => {
          router.push({
            pathname: 'http://localhost:3000/showApplications'});
        })
        .catch(error => console.error(error));

    }

    return(
        
        <div id="container">
                    
                    <form action="/application" method="POST" onSubmit={handleSubmit}>
                        <div class="section">
                            <label for="status">Status: </label>
                            <select id="status" required name="status" value={status} onChange={e => setStatus(e.target.value)}>
                                <option value=""></option>
                                <option value="accepted">Accepted</option>
                                <option value="pending">Pending</option>
                                <option value="denied">Denied</option>
                            </select>
                        </div>
                        <div class="section">
                            <label for="cost">Enter the cost: </label>
                            <div>
                                $<input type="text" name="cost" id="cost" value={cost} required 
                                onChange={e => setCost(e.target.value)} /> 
                            </div>
                            
                        </div>
                       
                        <button type='submit'>Submit</button>
                    </form>
                </div>
        
    )
}
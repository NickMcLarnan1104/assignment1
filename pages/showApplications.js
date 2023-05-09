import { useState, useEffect } from 'react'
// We want to show the data saved in the applications database showed on this page
export default function showApplications(){
    const [applications, setApplications] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/application')
        .then (res => res.json())
        .then(data => setApplications(data))
        .catch(err => console.error(err));
    }, [])


    return(
        <div>
            <p>Info: </p>
            <div>
                {applications && applications.map(application => (
                    <div key={application._id}>
                        Status: {application.status}<br />
                        Cost: {application.cost}<br />
                        
                    </div>
                ))}
            </div>
        </div>
    )
}
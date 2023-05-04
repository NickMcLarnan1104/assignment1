import Link from 'next/link';
import WorkOrder from './workOrder';
import {useRouter} from 'next/router';

export default function Dorm() {

    return (
        <>
            <div>
                <h1>Application</h1>
                <div id="container">
                    
                    <form action="" method="get" onSubmit={handleSubmit}>
                        <div class="section">
                            <label for="dorm-address">Enter your dorm address: </label>
                            <input type="text" name="dorm-address" id="dorm-address" required />
                        </div>
                        <div class="section">
                            <label for="dorm-rent">Enter your dorm rent: </label>
                            <input type="text" name="dorm-rent" id="dorm-rent" required /> 
                        </div>
                       
                        <button type='submit'>Submit</button>
                       
                    </form>
                </div>
                <div class='flex'>
                    <Link href='/'>Home</Link>
                    <Link href='/studentForm'>Back</Link> 
                    <Link href='/workOrder'>Work Order</Link>
                </div>
                
            </div>
        </>
    )
}
import Link from 'next/link';

export default function Home() {
    return (
        <>
                <h1 id="index-h1">Select whether you are a Student or a Faculty member:</h1>
                <div id='home-link-container'>
                    <Link class='link' href='/studentForm'>Student Form</Link>
                    <Link class='link' href='/facultyForm'>Faculty Form</Link>
                </div>
        </>
    )
}
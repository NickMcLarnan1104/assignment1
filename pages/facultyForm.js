import Link from "next/link";

export default function facultyForm() {

    
    return (
        <>
            <div>
                <h1>Faculty Form</h1>
                <div class="a">
                    <Link href='/'>Home</Link>
                </div>
                <div id="container">
                    <form action="/post" onSubmit={''}>
                        <div class="section">
                            <label for="name">Enter your name: </label>
                            <input type="text" name="name" id="name" required />
                        </div>

                        <div class="section">
                            <label for="born">Enter year you were born: </label>
                            <input type="number" min="1900" max="2099" step="1" value="2000" name="born" id="born" required />
                        </div>

                        <div class="section">
                            <label for="email">Enter your email: </label>
                            <input type="text" name="email" id="email" required />
                        </div>

                        <div class="section">
                            <label for="position">Enter your position: </label>
                            <input type="text" name="position" id="position" required />
                        </div>

                        <div class="section">
                            <label for="extension">Enter your extension: </label>
                            <input type="text" name="extension" id="extension" required />
                        </div>

                        <div class="section">
                            <label for="number">Enter your phone number: </label>
                            <input type="text" name="number" id="number" required />
                        </div>

                    </form>
                </div>    
            </div>
        </>
    )
}
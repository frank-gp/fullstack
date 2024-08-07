const Register = () =>{

    return (
        <div>
            <h1>Register</h1>
            <form >
                <label htmlFor="username">Username</label>
                <input type="text" id="username" />
                
                <label htmlFor="email">Email</label>
                <input type="email" id="email" />

                <label htmlFor="password">Password</label>
                <input type="password" id="password" />

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Register
import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div className='sign-in-container'>
            <form>
                <h1>Log In</h1>
                <input type="email" placeholder='Enter email' 
                value={email}
                onChange={(e) => setEmail(e.target.value)}>
                
                </input>
                <input type="password" placeholder='Enter password' 
                value={password}
                onChange={(e) => setPassword(e.target.value)}></input>

            </form>


        </div>
    )

}

export default SignIn
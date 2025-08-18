import React from 'react'

const LoginSignUp = () => {
    return (
        <div className="w-full">
            <div className="w-100">
                <button>Login</button>
                <button>Sign up</button>
            </div>
            <div className="w-100">
                <label>Name</label>
                <input type="text" />
                <label>Email</label>
                <input type="email" />
                <label>Password</label>
                <input type="password" />
            </div>
        </div>
    )
}

export default LoginSignUp
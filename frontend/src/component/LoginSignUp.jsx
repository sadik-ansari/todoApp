import React, { useState } from "react";

const LoginSignUp = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="container d-flex justify-content-center align-items-center min-vw-100 min-vh-100">
      <div className="card shadow p-4 col-12 col-md-6 col-lg-4 rounded-4">
        
        {/* Header Tabs */}
        <div className="d-flex justify-content-between mb-4">
          <button
            className={`btn w-50 me-2 ${isLogin ? "btn-primary" : "btn-outline-primary"}`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={`btn w-50 ${!isLogin ? "btn-primary" : "btn-outline-primary"}`}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>
        </div>

        {/* Title */}
        <h4 className="text-center mb-4 fw-bold">
          {isLogin ? "Welcome Back 👋" : "Create an Account 🚀"}
        </h4>

        {/* Form */}
        <form>
          {!isLogin && (
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your name"
              />
            </div>
          )}

          <div className="mb-3">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
            />
          </div>

          <button type="submit" className="btn btn-success w-100">
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        {/* Extra Links */}
        {isLogin ? (
          <p className="text-center mt-3">
            Don’t have an account?{" "}
            <button
              className="btn btn-link p-0"
              onClick={() => setIsLogin(false)}
            >
              Sign Up
            </button>
          </p>
        ) : (
          <p className="text-center mt-3">
            Already have an account?{" "}
            <button
              className="btn btn-link p-0"
              onClick={() => setIsLogin(true)}
            >
              Login
            </button>
          </p>
        )}
      </div>
    </div>
  );
};

export default LoginSignUp;

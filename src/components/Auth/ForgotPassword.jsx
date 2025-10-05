import React, { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");


  return (
    <section className="py-10 lg:py-20">
      <div className="md:container w-full mx-auto px-4">
        <div className="max-w-md mx-auto">
          <div className="text-center lg:mb-8 mb-6">
            <h2 className="font-bold text-2xl lg:text-3xl mb-3">Forgot Your Password?</h2>
            <p className="text-gray-600">Enter your email to receive a password reset link.</p>
          </div>

          {/* Email Form */}
          <div className="bg-gray-50 border md:p-8 p-4 rounded-lg shadow-sm">
            <form className="md:space-y-6 space-y-4">
              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block mb-2 font-medium md:text-base text-sm">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-input"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {/* Submit Button */}
              <button type="submit" className="btn-primary w-full">
                Reset Password
              </button>

              <div className="text-center">
                <p className="text-gray-600">
                  Remember your password?{' '}
                  <Link to="/login" className="text-primary hover:text-primary-dark font-medium">
                    Back to login
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;

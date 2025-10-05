import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { useUser } from "../../context/UserContext";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const { login } = useUser();
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.email) newErrors.email = "Email is required.";
    if (!form.password) newErrors.password = "Password is required.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    const result = login(form);
    if (result === "invalid_email") {
      setErrors({ email: "No user found with this email." });
    } else if (result === "invalid_password") {
      setErrors({ password: "Incorrect password." });
    } else if (result === true) {
      setErrors({});
      navigate("/account");
    }
  };

  return (
    <section className="py-10 lg:py-20">
      <div className="md:container w-full mx-auto px-4">
        <div className="max-w-md mx-auto">
          <div className="text-center lg:mb-8 mb-6">
            <h2 className="text-2xl sm:text-4xl font-bold mb-2 capitalize">Sign In</h2>
            <p className="text-gray-600">Welcome back! Sign in to your account to continue.</p>
          </div>

          {/* Login Form */}
          <div className="bg-gray-50 border md:p-8 p-4 rounded-lg shadow-sm md:mb-6 mb-4">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block mb-2 font-medium text-base">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  required
                  value={form.email}
                  onChange={handleChange}
                />
                {errors.email && <div className="text-red-500 text-xs mt-1">{errors.email}</div>}
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 font-medium text-base">
                  Password <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form-input"
                  required
                  value={form.password}
                  onChange={handleChange}
                />
                {errors.password && <div className="text-red-500 text-xs mt-1">{errors.password}</div>}
              </div>
              <button type="submit" className="w-full btn-primary">
                Login
              </button>
            </form>
          </div>

          {/* Registration Link */}
          <div className="text-center">
            <p className="text-gray-600">
              Don't have an account?{' '}
              <Link to="/register" className="text-primary hover:text-primary-dark font-medium">
                Sign up here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;

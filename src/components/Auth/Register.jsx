import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { useUser } from "../../context/UserContext";

const Register = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    newsletter: true,
    sms: true,
    terms: false,
  });
  const { register } = useUser();
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [successMsg, setSuccessMsg] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.firstName) newErrors.firstName = "First name is required.";
    if (!form.lastName) newErrors.lastName = "Last name is required.";
    if (!form.email) newErrors.email = "Email is required.";
    if (!form.password) newErrors.password = "Password is required.";
    if (!form.confirmPassword) newErrors.confirmPassword = "Confirm password is required.";
    if (form.password && form.confirmPassword && form.password !== form.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match.";
    if (!form.terms) newErrors.terms = "You must accept the terms.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    const result = register({
      firstName: form.firstName,
      lastName: form.lastName,
      email: form.email,
      password: form.password,
    });
    if (result === "already_registered") {
      setErrors({ email: "User with this email already exists." });
    } else if (result === "success") {
      setErrors({});
      setSuccessMsg("Registration successful! Please login to continue.");
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        newsletter: true,
        sms: true,
        terms: false,
      });
    }
  };

  return (
    <section className="py-10 lg:py-20">
      <div className="md:container w-full mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-4xl font-bold mb-2 capitalize">Create Your Account</h2>
            <p className="text-gray-600">Join FreshMart for a seamless shopping experience</p>
          </div>

          {/* Registration Form */}
          <div className="bg-gray-50 border md:p-8 p-4 rounded-lg mb-6">
            <form className="md:space-y-6 space-y-4" onSubmit={handleSubmit}>
              {/* Personal Information */}
              <div>
                <h2 className="font-heading font-semibold text-xl mb-4">Personal Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 gap-4">
                  <div>
                    <label htmlFor="first-name" className="block mb-2 font-medium md:text-base text-sm">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="first-name"
                      name="firstName"
                      className="form-input"
                      required
                      value={form.firstName}
                      onChange={handleChange}
                    />
                    {errors.firstName && <div className="text-red-500 text-xs mt-1">{errors.firstName}</div>}
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block mb-2 font-medium md:text-base text-sm">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="last-name"
                      name="lastName"
                      className="form-input"
                      required
                      value={form.lastName}
                      onChange={handleChange}
                    />
                    {errors.lastName && <div className="text-red-500 text-xs mt-1">{errors.lastName}</div>}
                  </div>
                </div>
              </div>

              {/* Account Information */}
              <div>
                <h2 className="font-heading font-semibold text-xl mb-4">Account Information</h2>
                <div className="md:mb-6 mb-4">
                  <label htmlFor="email" className="block mb-2 font-medium md:text-base text-sm">
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
                  <p className="text-sm text-gray-500 mt-1">
                    We'll send order confirmations and receipts to this email
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 gap-4">
                  <div>
                    <label htmlFor="password" className="block mb-2 font-medium md:text-base text-sm">
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
                  <div>
                    <label htmlFor="confirm-password" className="block mb-2 font-medium md:text-base text-sm">
                      Confirm Password <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="password"
                      id="confirm-password"
                      name="confirmPassword"
                      className="form-input"
                      required
                      value={form.confirmPassword}
                      onChange={handleChange}
                    />
                    {errors.confirmPassword && <div className="text-red-500 text-xs mt-1">{errors.confirmPassword}</div>}
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  Password must be at least 8 characters long and include a mix of letters, numbers, and special characters
                </p>
              </div>

              {/* Preferences */}
              <div>
                <h2 className="font-heading font-semibold text-xl mb-4">Preferences</h2>
                <div className="checkbox flex items-start mb-4">
                  <input
                    type="checkbox"
                    id="newsletter"
                    name="newsletter"
                    className="rounded border-gray-300 text-primary focus:ring-primary mt-1 mr-2"
                    checked={form.newsletter}
                    onChange={handleChange}
                  />
                  <label htmlFor="newsletter" className="flex-1 text-gray-700">
                    Subscribe to our newsletter to receive updates, exclusive offers, and healthy recipe ideas.
                  </label>
                </div>
                <div className="checkbox flex items-start">
                  <input
                    type="checkbox"
                    id="sms"
                    name="sms"
                    className="rounded border-gray-300 text-primary focus:ring-primary mt-1 mr-2"
                    checked={form.sms}
                    onChange={handleChange}
                  />
                  <label htmlFor="sms" className="flex-1 text-gray-700">
                    Receive SMS notifications about your orders, special promotions, and delivery updates.
                  </label>
                </div>
              </div>

              {/* Terms and Privacy */}
              <div className="border-t border-gray-200 pt-6">
                <div className="checkbox flex items-start">
                  <input
                    type="checkbox"
                    id="terms"
                    name="terms"
                    className="rounded border-gray-300 text-primary focus:ring-primary mt-1 mr-2"
                    required
                    checked={form.terms}
                    onChange={handleChange}
                  />
                  <label htmlFor="terms" className="flex-1 text-gray-700">
                    I agree to the {" "}
                    <Link to="/terms-condition" className="text-primary hover:underline">
                      Terms & Conditions
                    </Link>{" "}
                    and {" "}
                    <Link to="/privacy-policy" className="text-primary hover:underline">
                      Privacy Policy
                    </Link>
                    . I confirm that I am at least 18 years old.
                  </label>
                  {errors.terms && <div className="text-red-500 text-xs mt-1">{errors.terms}</div>}
                </div>
              </div>

              {/* Success Message */}
              {successMsg && (
                <div className="text-green-600 text-sm mb-4">{successMsg}</div>
              )}

              {/* Submit Button */}
              <button type="submit" className="w-full btn-primary">
                Create Account
              </button>
            </form>
          </div>

          {/* Login Link */}
          <div className="text-center">
            <p className="text-gray-600">
              Already have an account?{' '}
              <Link to="/login" className="text-primary hover:text-primary-dark font-medium">
                Sign in here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;

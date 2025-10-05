import React, { useState } from "react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="lg:py-20 py-10">
      <div className="md:container w-full mx-auto px-4">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Stay in the Loop</h2>
          <p className="text-gray-600 mb-6">
            Subscribe to our newsletter to get updates on our latest offers and tech news.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className="form-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="btn-primary">
              Subscribe Now
            </button>
          </form>
          {submitted ? (
            <div className="text-base text-green-600 font-medium mt-4">Thank you for subscribing!</div>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;

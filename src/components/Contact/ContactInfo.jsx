import React from "react";

const ContactInfo = () => (
  <section className="lg:py-20 py-10 bg-white">
    <div className="md:container w-full mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-8 gap-5">
        {/* Location */}
        <div className="text-center lg:p-6 p-4 border rounded-lg shadow-sm hover:shadow-md transition">
          <div className="inline-flex items-center justify-center bg-primary/10 text-primary h-16 w-16 rounded-full mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </div>
          <h3 className="font-heading font-semibold text-xl mb-2">Our Location</h3>
          <p className="text-gray-600 mb-2">123 Organic Avenue</p>
          <p className="text-gray-600 mb-2">Green Hills, CA 94107</p>
          <p className="text-gray-600 mb-4">United States</p>
          <a href="https://maps.app.goo.gl/xxt9ywxoSVqLFDCg7" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark font-medium">View on Map</a>
        </div>
        {/* Phone */}
        <div className="text-center lg:p-6 p-4 border rounded-lg shadow-sm hover:shadow-md transition">
          <div className="inline-flex items-center justify-center bg-primary/10 text-primary h-16 w-16 rounded-full mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </div>
          <h3 className="font-heading font-semibold text-xl mb-2">Phone Number</h3>
          <p className="text-gray-600 mb-1">Customer Service:</p>
          <p className="text-gray-600 mb-2">
            <a href="tel:5551234567" className="text-primary hover:text-primary-dark">(555) 123-4567</a>
          </p>
          <p className="text-gray-600 mb-1">Order Support:</p>
          <p className="text-gray-600 mb-4">
            <a href="tel:5557654321" className="text-primary hover:text-primary-dark">(555) 765-4321</a>
          </p>
          <p className="text-sm text-gray-500">Mon–Fri: 8am–8pm, Sat–Sun: 9am–6pm</p>
        </div>
        {/* Email */}
        <div className="text-center lg:p-6 p-4 border rounded-lg shadow-sm hover:shadow-md transition">
          <div className="inline-flex items-center justify-center bg-primary/10 text-primary h-16 w-16 rounded-full mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </div>
          <h3 className="font-heading font-semibold text-xl mb-2">Email</h3>
          <p className="text-gray-600 mb-1">General Inquiries:</p>
          <p className="mb-2">
            <a href="mailto:info@techzonix.com" className="text-primary hover:text-primary-dark">info@techzonix.com</a>
          </p>
          <p className="text-gray-600 mb-1">Customer Support:</p>
          <p className="mb-4">
            <a href="mailto:support@techzonix.com" className="text-primary hover:text-primary-dark">support@techzonix.com</a>
          </p>
          <p className="text-sm text-gray-500">We aim to respond within 24 hours</p>
        </div>
      </div>
    </div>
  </section>
);

export default ContactInfo;

import React from "react";
import { FaCalendarAlt, FaInfoCircle, FaCheckCircle, FaLaptopCode, FaWindowMaximize, FaDesktop, FaFileAlt, FaClock, FaShoppingBag, FaHeadset, FaEnvelope, FaShieldAlt, FaLock, FaExclamationTriangle, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const PrivacyPolicy = () => (
  <section className="py-10 lg:py-20">
    <div className="md:container w-full mx-auto px-4 md:px-6">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="bg-gray-50 border p-4 md:p-8 rounded-lg shadow-sm w-full">
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-gray-500 flex items-center"><FaCalendarAlt className="mr-2" />Last Updated: May 1, 2023</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="border-l-4 border-primary p-4 mb-6 rounded-lg bg-primary/10">
              <p className="font-medium text-gray-700 flex"><FaInfoCircle className="text-primary mr-2 mt-1 flex-shrink-0" />This Privacy Policy explains how FreshMart collects, uses, and protects your personal information when you use our services.</p>
            </div>
            <h2 className="font-bold text-xl md:text-3xl mb-5">1. Introduction</h2>
            <p className="mb-4">FreshMart ("we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website www.freshmart.com and use our services.</p>
            <p className="mb-6">Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site or use our services.</p>

            <h2 className="font-bold text-xl md:text-3xl mb-5">2. Information We Collect</h2>
            <h3 className="font-bold md:text-lg text-md mb-2 mt-6">2.1 Personal Information</h3>
            <p>We may collect personal information that you provide to us when you register for an account, place an order, subscribe to our newsletter, respond to a survey, fill out a form, or engage with our website in any other way. Personal information may include:</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4">
              <li className="flex items-center"><FaCheckCircle className="text-primary mr-2 text-sm" /> First and last name</li>
              <li className="flex items-center"><FaCheckCircle className="text-primary mr-2 text-sm" /> Email address</li>
              <li className="flex items-center"><FaCheckCircle className="text-primary mr-2 text-sm" /> Mailing address</li>
              <li className="flex items-center"><FaCheckCircle className="text-primary mr-2 text-sm" /> Phone number</li>
              <li className="flex items-center"><FaCheckCircle className="text-primary mr-2 text-sm" /> Payment information</li>
              <li className="flex items-center"><FaCheckCircle className="text-primary mr-2 text-sm" /> Order history and preferences</li>
            </ul>

            <h3 className="font-bold md:text-lg text-md mb-2 mt-6">2.2 Automatically Collected Information</h3>
            <p>When you visit our website, we may automatically collect certain information about your device, including:</p>
            <div className="p-4 rounded-lg mt-4 bg-primary/10">
              <ul className="space-y-2">
                <li className="flex items-center"><FaLaptopCode className="text-primary mr-2 text-sm" /> IP address</li>
                <li className="flex items-center"><FaWindowMaximize className="text-primary mr-2 text-sm" /> Browser type and version</li>
                <li className="flex items-center"><FaDesktop className="text-primary mr-2 text-sm" /> Operating system</li>
                <li className="flex items-center"><FaFileAlt className="text-primary mr-2 text-sm" /> Pages you visit</li>
                <li className="flex items-center"><FaClock className="text-primary mr-2 text-sm" /> Time and date of your visit</li>
              </ul>
            </div>

            <h3 className="font-bold md:text-lg text-md mb-2 mt-6">2.3 Cookies and Tracking Technologies</h3>
            <p className="mb-6">We use cookies and similar tracking technologies to track activity on our website and store certain information. Cookies are files with a small amount of data that may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.</p>

            <h2 className="font-bold text-xl md:text-3xl mb-5">3. How We Use Your Information</h2>
            <p>We may use the information we collect for various purposes, including:</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 mb-6">
              <div className="bg-primary/10 flex gap-3 items-center p-4 rounded-lg">
                <FaShoppingBag className="text-primary md:text-xl text-lg" />
                <p className="font-medium">Processing and fulfilling orders</p>
              </div>
              <div className="bg-primary/10 flex gap-3 items-center p-4 rounded-lg">
                <FaHeadset className="text-primary md:text-xl text-lg" />
                <p className="font-medium">Customer support</p>
              </div>
              <div className="bg-primary/10 flex gap-3 items-center p-4 rounded-lg">
                <FaEnvelope className="text-primary md:text-xl text-lg" />
                <p className="font-medium">Marketing communications</p>
              </div>
              <div className="bg-primary/10 flex gap-3 items-center p-4 rounded-lg">
                <FaShieldAlt className="text-primary md:text-xl text-lg" />
                <p className="font-medium">Security and integrity</p>
              </div>
            </div>

            <h2 className="font-bold text-xl md:text-3xl mb-5">4. Sharing Your Information</h2>
            <div className="space-y-6 mb-6">
              <div>
                <h3 className="font-bold md:text-lg text-md mb-2">4.1 Service Providers</h3>
                <p>We may share your information with third-party service providers who perform services on our behalf, such as payment processing, data analysis, email delivery, hosting services, and customer service.</p>
              </div>
              <div>
                <h3 className="font-bold md:text-lg text-md mb-2">4.2 Business Partners</h3>
                <p>We may share your information with our business partners to offer you certain products, services, or promotions.</p>
              </div>
            </div>

            <h2 className="font-bold text-xl md:text-3xl mb-5">5. Data Security</h2>
            <div className="bg-primary/10 p-4 rounded-lg flex items-start mb-6">
              <FaLock className="text-green-500 md:text-xl text-lg mr-3 mt-1 flex-shrink-0" />
              <p>We implement appropriate technical and organizational measures to protect the security of your personal information. However, please be aware that no method of transmission over the internet or method of electronic storage is 100% secure, and we cannot guarantee its absolute security.</p>
            </div>

            <h2 className="font-bold text-xl md:text-3xl mb-5">6. Your Privacy Rights</h2>
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full bg-white border border-gray-200">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Right</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-700 font-medium">Access</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Access the personal information we have about you</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-700 font-medium">Correction</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Correct inaccuracies in your personal information</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-700 font-medium">Deletion</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Delete your personal information</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="font-bold text-xl md:text-3xl mb-5">7. Children's Privacy</h2>
            <div className="bg-yellow-50 p-4 rounded-lg mb-6">
              <p className="text-yellow-800 flex items-start"><FaExclamationTriangle className="text-yellow-500 mr-2 mt-1 flex-shrink-0" />Our website and services are not directed to children under 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us immediately.</p>
            </div>

            <h2 className="font-bold text-xl md:text-3xl mb-5">8. Changes to This Privacy Policy</h2>
            <p className="mb-6">We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.</p>

            <h2 className="font-bold text-xl md:text-3xl mb-5">9. Contact Us</h2>
            <div className="bg-primary/10 md:p-6 p-4 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold md:text-lg text-md md:mb-3 mb-2 text-gray-800 flex items-center"><FaMapMarkerAlt className="text-primary mr-2" />Our Address</h3>
                  <p className="text-gray-600">FreshMart<br />123 Organic Avenue<br />Green Hills, CA 94107<br />United States</p>
                </div>
                <div>
                  <h3 className="font-bold md:text-lg text-md md:mb-3 mb-2 text-gray-800 flex items-center"><FaEnvelope className="text-primary mr-2" />Email Us</h3>
                  <p className="text-gray-600">privacy@freshmart.com</p>
                  <h3 className="font-bold md:text-lg text-md md:mb-3 mt-4 mb-2 text-gray-800 flex items-center"><FaPhone className="text-primary mr-2" />Call Us</h3>
                  <p className="text-gray-600">(555) 123-4567</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
);

export default PrivacyPolicy;

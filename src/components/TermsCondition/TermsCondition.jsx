import React from "react";
import { FaBan, FaStore, FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

const TermsCondition = () => {
  return (
    <section className="lg:py-20 py-10">
      <div className="md:container w-full mx-auto px-4">
        <div>
          {/* 1. Introduction */}
          <h2 className="font-bold text-xl md:text-3xl mb-5">1. Introduction</h2>
          <div className="bg-primary/10 border-l-4 border-primary p-4 md:pl-6 mb-6 rounded-lg">
            <p className="mb-3">
              Welcome to ElectroMart's website. These Terms and Conditions govern your use of our website and the purchase of products through our online platform. By accessing our website and/or placing orders, you agree to be bound by these Terms and Conditions.
            </p>
            <p>
              Please read these terms carefully before using our services. If you do not agree to all the terms and conditions of this agreement, you may not access the website or use any services.
            </p>
          </div>

          {/* 2. Definitions */}
          <h2 className="font-bold text-xl md:text-3xl mb-5">2. Definitions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-50 border p-4 rounded-lg">
              <p className="font-medium text-gray-700 mb-1">"Company", "we", "us", or "our"</p>
              <p className="text-gray-600">Refers to ElectroMart.</p>
            </div>
            <div className="bg-gray-50 border p-4 rounded-lg">
              <p className="font-medium text-gray-700 mb-1">"Website"</p>
              <p className="text-gray-600">Refers to ElectroMart's website, accessible at www.electromart.com.</p>
            </div>
            <div className="bg-gray-50 border p-4 rounded-lg">
              <p className="font-medium text-gray-700 mb-1">"Products"</p>
              <p className="text-gray-600">Refers to all electronic devices and accessories available for purchase on our website.</p>
            </div>
            <div className="bg-gray-50 border p-4 rounded-lg">
              <p className="font-medium text-gray-700 mb-1">"User", "you", and "your"</p>
              <p className="text-gray-600">Refers to the person accessing or using the website and services.</p>
            </div>
          </div>

          {/* 3. Account Registration */}
          <h2 className="font-bold text-xl md:text-3xl mb-5">3. Account Registration</h2>
          <p className="mb-4">
            To access certain features of the website and to make purchases, you may be required to register for an account. When registering, you agree to provide accurate, current, and complete information. You are responsible for maintaining the confidentiality of your account and password, and for restricting access to your account.
          </p>
          <p className="mb-6">
            You accept responsibility for all activities that occur under your account or password. We reserve the right to refuse service, terminate accounts, or cancel orders at our discretion.
          </p>

          {/* 4. Ordering and Pricing */}
          <h2 className="font-bold text-xl md:text-3xl mb-5">4. Ordering and Pricing</h2>
          <p className="mb-4">
            All prices are listed in US dollars and do not include applicable taxes unless otherwise stated. We reserve the right to modify prices at any time. Products are subject to availability, and we may limit the quantity of products available for purchase.
          </p>
          <p className="mb-6">
            Once you place an order, you will receive a confirmation email acknowledging that we have received your order. This email serves as an acknowledgment that we have received your order request, but it does not indicate acceptance of your order. We reserve the right to accept or decline your order for any reason.
          </p>

          {/* 5. Payments */}
          <h2 className="font-bold text-xl md:text-3xl mb-5">5. Payments</h2>
          <div className="bg-primary/10 border-l-4 border-primary p-4 md:pl-6 mb-6 rounded-lg">
            <p className="mb-3">
              We accept various payment methods as indicated on our website. By providing payment information, you represent that you are authorized to use the payment method. All payment information is encrypted and securely processed.
            </p>
            <p>
              You agree to pay all charges incurred by your account at the prices in effect when such charges are incurred. You are also responsible for any taxes that may apply to your purchases.
            </p>
          </div>

          {/* 6. Shipping and Delivery */}
          <h2 className="font-bold text-xl md:text-3xl mb-5">6. Shipping and Delivery</h2>
          <p className="mb-4">
            We ship to addresses within our specified delivery regions. Shipping times are estimates and not guaranteed. We are not responsible for delays due to unforeseen circumstances or events beyond our control.
          </p>
          <p className="mb-6">
            You agree to provide accurate delivery information and to be available to receive shipments during normal delivery hours. If you are not available, the carrier may leave the products at the delivery address if safe to do so, or they may attempt redelivery on the following business day.
          </p>

          {/* 7. Product Warranty and Returns */}
          <h2 className="font-bold text-xl md:text-3xl mb-5">7. Product Warranty and Returns</h2>
          <p className="mb-4">
            We provide a standard manufacturer's warranty on all electronics. If you experience any defects or issues with your device, please contact us within 30 days of delivery. We may offer a refund, replacement, or repair at our discretion.
          </p>
          <p className="mb-6">
            To request a return or warranty service, please contact our technical support team with your order number and details about the issue. We reserve the right to verify claims before processing any refunds or replacements.
          </p>

          {/* 8. Intellectual Property */}
          <h2 className="font-bold text-xl md:text-3xl mb-5">8. Intellectual Property</h2>
          <p className="mb-4">
            All content on the website, including but not limited to text, graphics, logos, images, audio clips, digital downloads, and software, is the property of ElectroMart or its content suppliers and is protected by international copyright laws.
          </p>
          <p className="mb-6">
            You may not reproduce, distribute, modify, display, perform, or use any content from our website without our express written permission.
          </p>

          {/* 9. User Conduct */}
          <h2 className="font-bold text-xl md:text-3xl mb-5">9. User Conduct</h2>
          <p className="mb-4">When using our website, you agree not to:</p>
          <ul className="space-y-1 mb-6">
            <li className="flex items-center">
              <FaBan className="text-red-400 mr-2 text-sm" />
              <span className="flex-1">Violate any applicable laws or regulations</span>
            </li>
            <li className="flex items-center">
              <FaBan className="text-red-400 mr-2 text-sm" />
              <span className="flex-1">Infringe upon the rights of others</span>
            </li>
            <li className="flex items-center">
              <FaBan className="text-red-400 mr-2 text-sm" />
              <span className="flex-1">Use the website to distribute unsolicited promotional or advertising material</span>
            </li>
            <li className="flex items-center">
              <FaBan className="text-red-400 mr-2 text-sm" />
              <span className="flex-1">Attempt to gain unauthorized access to any portion of the website</span>
            </li>
            <li className="flex items-center">
              <FaBan className="text-red-400 mr-2 text-sm" />
              <span className="flex-1">Interfere with the proper functioning of the website</span>
            </li>
          </ul>

          {/* 10. Limitation of Liability */}
          <h2 className="font-bold text-xl md:text-3xl mb-5">10. Limitation of Liability</h2>
          <p className="mb-4">
            To the maximum extent permitted by law, ElectroMart shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
          </p>
          <ol className="space-y-2 mb-6">
            <li className="flex items-start">
              <span className="bg-gray-200 text-gray-700 rounded-full w-6 h-6 flex items-center justify-center mr-2 text-sm">1</span>
              <span className="flex-1">Your access to or use of or inability to access or use the website</span>
            </li>
            <li className="flex items-start">
              <span className="bg-gray-200 text-gray-700 rounded-full w-6 h-6 flex items-center justify-center mr-2 text-sm">2</span>
              <span className="flex-1">Any conduct or content of any third party on the website</span>
            </li>
            <li className="flex items-start">
              <span className="bg-gray-200 text-gray-700 rounded-full w-6 h-6 flex items-center justify-center mr-2 text-sm">3</span>
              <span className="flex-1">Any content obtained from the website</span>
            </li>
            <li className="flex items-start">
              <span className="bg-gray-200 text-gray-700 rounded-full w-6 h-6 flex items-center justify-center mr-2 text-sm">4</span>
              <span className="flex-1">Unauthorized access, use, or alteration of your transmissions or content</span>
            </li>
          </ol>

          {/* 11. Indemnification */}
          <h2 className="font-bold text-xl md:text-3xl mb-5">11. Indemnification</h2>
          <p className="mb-6">
            You agree to indemnify, defend, and hold harmless ElectroMart and its affiliates, officers, agents, and employees, from and against any claims, liabilities, damages, losses, and expenses, including without limitation reasonable legal and accounting fees, arising out of or in any way connected with your access to or use of the website or your violation of these Terms.
          </p>

          {/* 12. Modifications to Terms */}
          <h2 className="font-bold text-xl md:text-3xl mb-5">12. Modifications to Terms</h2>
          <p className="mb-6">
            We reserve the right to modify these Terms at any time. Any changes will be posted on this page with an updated "Last Updated" date. Your continued use of the website after such modifications constitutes your acceptance of the modified Terms.
          </p>

          {/* 13. Governing Law */}
          <h2 className="font-bold text-xl md:text-3xl mb-5">13. Governing Law</h2>
          <p className="mb-6">
            These Terms shall be governed by and construed in accordance with the laws of the state of California, without regard to its conflict of law provisions. Any disputes arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts located within California.
          </p>

          {/* 14. Contact Information */}
          <h2 className="font-bold text-xl md:text-3xl mb-5">14. Contact Information</h2>
          <div className="bg-primary/10 md:p-6 p-4 rounded-lg">
            <p className="font-medium text-gray-800 mb-2">For any questions regarding these Terms, please contact us at:</p>
            <div className="space-y-2">
              <p className="flex items-center">
                <FaStore className="text-primary mr-3 w-5 text-center flex-shrink-0" />
                ElectroMart
              </p>
              <p className="flex items-center">
                <FaMapMarkerAlt className="text-primary mr-3 w-5 text-center flex-shrink-0" />
                456 Digital Boulevard, Silicon Valley, CA 94107
              </p>
              <p className="flex items-center">
                <FaEnvelope className="text-primary mr-3 w-5 text-center flex-shrink-0" />
                legal@electromart.com
              </p>
              <p className="flex items-center">
                <FaPhone className="text-primary mr-3 w-5 text-center flex-shrink-0" />
                (555) 987-6543
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsCondition;

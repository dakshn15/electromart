import React from "react";
import { FaWarehouse, FaTruck, FaUndoAlt, FaPhone, FaEnvelope, FaComments } from "react-icons/fa";
import { FiCheck, FiBox } from "react-icons/fi";

const ShippingReturn = () => (
  <section className="lg:py-20 py-10">
    <div className="md:container w-full mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        {/* Shipping Policy Section */}
        <div id="shipping" className="lg:mb-16 mb-10">
          <div className="flex items-center mb-6">
            <div className="bg-primary text-white sm:h-12 sm:w-12 h-10 w-10 rounded-full flex items-center justify-center mr-4">
              <FaWarehouse className="text-white text-xl" />
            </div>
            <h2 className="flex-1 text-2xl lg:text-3xl font-bold text-gray-900">Shipping Policy</h2>
          </div>
          <div>
            <p className="mb-5">At ElectroMart, we're committed to delivering top-quality electronics to your doorstep quickly and reliably. We offer multiple shipping options to suit your needs.</p>
            <h3 className="text-xl font-bold text-gray-900">Shipping Methods</h3>
            <div className="my-6">
              <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 gap-4">
                {/* Standard Delivery */}
                <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-lg">Standard Delivery</h4>
                    <span className="text-primary font-semibold">$4.99</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">Delivered within 1-2 business days</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li className="flex items-start"><FiCheck className="h-4 w-4 text-primary mr-2 mt-0.5" /><span className="flex-1">Available for orders placed before 5 PM</span></li>
                    <li className="flex items-start"><FiCheck className="h-4 w-4 text-primary mr-2 mt-0.5" /><span className="flex-1">Free for orders over $50</span></li>
                    <li className="flex items-start"><FiCheck className="h-4 w-4 text-primary mr-2 mt-0.5" /><span className="flex-1">Order tracking available</span></li>
                  </ul>
                </div>
                {/* Express Delivery */}
                <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-lg">Express Delivery</h4>
                    <span className="text-primary font-semibold">$9.99</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">Same-day or next-day delivery for eligible electronics</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li className="flex items-start"><FiCheck className="h-4 w-4 text-primary mr-2 mt-0.5" /><span className="flex-1">Same-day delivery for orders placed before 12 PM</span></li>
                    <li className="flex items-start"><FiCheck className="h-4 w-4 text-primary mr-2 mt-0.5" /><span className="flex-1">Next-day delivery for orders placed after 12 PM</span></li>
                    <li className="flex items-start"><FiCheck className="h-4 w-4 text-primary mr-2 mt-0.5" /><span className="flex-1">Real-time order tracking</span></li>
                  </ul>
                </div>
              </div>
              {/* Subscription Delivery */}
              <div className="border border-gray-200 rounded-lg p-4 bg-gray-50 md:mt-6 mt-4">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-lg">Subscription Delivery</h4>
                  <span className="text-primary font-semibold">Free</span>
                </div>
                <p className="text-gray-600 text-sm mb-2">Scheduled delivery service for office or business essentials</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li className="flex items-start"><FiCheck className="h-4 w-4 text-primary mr-2 mt-0.5" /><span className="flex-1">Free shipping on all subscription orders</span></li>
                    <li className="flex items-start"><FiCheck className="h-4 w-4 text-primary mr-2 mt-0.5" /><span className="flex-1">Choose weekly, bi-weekly, or monthly deliveries</span></li>
                  </ul>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li className="flex items-start"><FiCheck className="h-4 w-4 text-primary mr-2 mt-0.5" /><span className="flex-1">Flexible delivery dates and times</span></li>
                    <li className="flex items-start"><FiCheck className="h-4 w-4 text-primary mr-2 mt-0.5" /><span className="flex-1">Easily modify or pause your subscription anytime</span></li>
                  </ul>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Service Area</h3>
            <p className="mb-4">We currently deliver electronics to the following regions:</p>
            <ul className="list-disc ps-5 mb-4 space-y-1">
              <li>San Francisco and surrounding Bay Area</li>
              <li>Los Angeles metropolitan area</li>
              <li>Portland, Oregon</li>
              <li>Seattle, Washington</li>
              <li>Denver, Colorado</li>
            </ul>
            <p className="mb-4">We're expanding rapidly. To check delivery availability in your area, enter your zip code at checkout or reach out to our support team.</p>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Shipping Restrictions</h3>
            <p>Due to certain product types and manufacturer restrictions, some electronics may not be available for shipping to all locations. We will notify you at checkout if your selected items cannot be shipped to your address.</p>
          </div>
        </div>
        {/* Delivery Information Section */}
        <div id="delivery" className="lg:mb-16 mb-10">
          <div className="flex items-center mb-6">
            <div className="bg-primary text-white sm:h-12 sm:w-12 h-10 w-10 rounded-full flex items-center justify-center mr-4 text-lg">
              <FaTruck />
            </div>
            <h2 className="flex-1 text-2xl lg:text-3xl font-bold text-gray-900">Delivery Information</h2>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Delivery Times</h3>
            <p>At ElectroMart, we ensure fast and flexible delivery for all your tech needs. Standard deliveries typically arrive between 10 AM and 8 PM. For urgent needs, express deliveries can be scheduled within specific time windows.</p>
            <div className="my-6">
              <h4 className="font-semibold text-lg mb-4">Available Delivery Windows (Express Delivery)</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="border rounded-lg overflow-hidden">
                  <div className="bg-primary text-white px-4 py-2 font-medium">Weekdays</div>
                  <div className="p-4 space-y-2 text-gray-600">
                    <p className="flex justify-between"><span>Morning</span><span>10 AM - 1 PM</span></p>
                    <p className="flex justify-between"><span>Afternoon</span><span>1 PM - 4 PM</span></p>
                    <p className="flex justify-between"><span>Evening</span><span>5 PM - 8 PM</span></p>
                  </div>
                </div>
                <div className="border rounded-lg overflow-hidden">
                  <div className="bg-primary text-white px-4 py-2 font-medium">Weekends</div>
                  <div className="p-4 space-y-2 text-gray-600">
                    <p className="flex justify-between"><span>Morning</span><span>9 AM - 12 PM</span></p>
                    <p className="flex justify-between"><span>Afternoon</span><span>12 PM - 3 PM</span></p>
                    <p className="flex justify-between"><span>Evening</span><span>4 PM - 7 PM</span></p>
                  </div>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Packaging & Protection</h3>
            <p className="mb-4">We use secure and protective packaging to ensure your electronics arrive in perfect condition:</p>
            <ul className="list-disc ps-5 mb-4 space-y-1">
              <li>Shock-absorbing materials for fragile electronics</li>
              <li>Anti-static packaging for sensitive components</li>
              <li>Eco-friendly, recyclable outer boxes</li>
              <li>Sealed and tamper-proof packaging for security</li>
            </ul>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Tracking Your Delivery</h3>
            <p className="mb-4">Stay updated on your order every step of the way:</p>
            <ol className="list-decimal ps-5 mb-4 space-y-1">
              <li>Receive a tracking link via email and SMS after dispatch</li>
              <li>Get real-time status updates and ETA notifications</li>
              <li>Receive alerts when your delivery is about to arrive</li>
              <li>Communicate directly with the delivery agent for any instructions</li>
            </ol>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Contactless Delivery</h3>
            <p>We provide contactless delivery for your safety and convenience. At checkout, select the contactless option and include specific instructions. Our delivery team will follow your preferences and notify you once the package is delivered.</p>
            <div className="bg-primary/10 md:p-6 p-4 rounded-lg my-6 border-l-4 border-primary">
              <h4 className="font-semibold mb-2">Missing or Incomplete Deliveries</h4>
              <p>If your order is missing items or hasn't arrived within the expected delivery window, please contact our customer support team at <strong>(800) 987-6543</strong> or <a href="mailto:support@electromart.com" className="underline">support@electromart.com</a>. We will resolve the issue promptly to ensure you receive your complete order as soon as possible.</p>
            </div>
          </div>
        </div>
        {/* Returns & Refunds Section */}
        <div id="returns">
          <div className="flex items-center mb-6">
            <div className="bg-primary bg-opacity-10 text-white sm:h-12 sm:w-12 h-10 w-10 rounded-full flex items-center justify-center mr-4">
              <FaUndoAlt className="text-white text-xl" />
            </div>
            <h2 className="flex-1 text-2xl lg:text-3xl font-bold text-gray-900">Returns & Refunds</h2>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">100% Satisfaction Guarantee</h3>
            <p>At ElectroMart, your satisfaction is our top priority. If you're not completely satisfied with the quality, functionality, or condition of your order, we offer a hassle-free return and refund process.</p>
            <div className="bg-gray-50 rounded-lg my-6 md:p-6 p-4">
              <h4 className="font-semibold text-lg mb-4">Our Guarantee Covers:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-medium mb-2 flex items-center"><FiBox className="h-5 w-5 text-primary mr-2" />Quality Issues</h5>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li className="flex items-start"><FiCheck className="h-4 w-4 text-primary mr-2 mt-0.5" /><span className="flex-1">Products that don't meet our performance standards</span></li>
                    <li className="flex items-start"><FiCheck className="h-4 w-4 text-primary mr-2 mt-0.5" /><span className="flex-1">Damaged or defective items</span></li>
                    <li className="flex items-start"><FiCheck className="h-4 w-4 text-primary mr-2 mt-0.5" /><span className="flex-1">Items that don't function as advertised</span></li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium mb-2 flex items-center"><FiBox className="h-5 w-5 text-primary mr-2" />Delivery Issues</h5>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li className="flex items-start"><FiCheck className="h-4 w-4 text-primary mr-2 mt-0.5" /><span className="flex-1">Missing items or components</span></li>
                    <li className="flex items-start"><FiCheck className="h-4 w-4 text-primary mr-2 mt-0.5" /><span className="flex-1">Incorrect items or models</span></li>
                    <li className="flex items-start"><FiCheck className="h-4 w-4 text-primary mr-2 mt-0.5" /><span className="flex-1">Late deliveries (beyond the promised window)</span></li>
                  </ul>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Return Process</h3>
            <p className="mb-4">To initiate a return or request a refund, please follow these steps:</p>
            <ol className="list-decimal ps-5 mb-4 space-y-1">
              <li><strong>Contact us within 30 days</strong> of receiving your order</li>
              <li>Report the issue through your account dashboard or by contacting customer service</li>
              <li>Provide your order number and details about the issue</li>
              <li>Photos of the problematic items can help expedite the process (though not required)</li>
            </ol>
            <p className="mb-4">For most electronics, you'll need to return the product in its original packaging with all accessories. Our customer service team will provide return instructions and may issue a prepaid shipping label.</p>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Refund Process</h3>
            <p>Once your return or refund request is approved, we will process it according to the following guidelines:</p>
            <div className="my-6">
              <div className="grid grid-cols-1 md:grid-cols-3 md:gap-6 gap-4">
                {/* Full Refund */}
                <div className="border rounded-lg overflow-hidden">
                  <div className="bg-green-100 text-green-700 px-4 py-2 font-medium">Full Refund</div>
                  <div className="p-4 text-gray-600 text-sm">
                    <p className="mb-2">We offer a full refund when:</p>
                    <ul className="space-y-1">
                      <li className="flex items-start"><FiCheck className="h-4 w-4 text-green-600 mr-1 mt-0.5" /><span className="flex-1">Items are DOA or defective</span></li>
                      <li className="flex items-start"><FiCheck className="h-4 w-4 text-green-600 mr-1 mt-0.5" /><span className="flex-1">Performance is significantly below specs</span></li>
                      <li className="flex items-start"><FiCheck className="h-4 w-4 text-green-600 mr-1 mt-0.5" /><span className="flex-1">Delivery is extremely late</span></li>
                    </ul>
                  </div>
                </div>
                {/* Partial Refund */}
                <div className="border rounded-lg overflow-hidden">
                  <div className="bg-yellow-100 text-yellow-700 px-4 py-2 font-medium">Partial Refund</div>
                  <div className="p-4 text-gray-600 text-sm">
                    <p className="mb-2">We may offer a partial refund when:</p>
                    <ul className="space-y-1">
                      <li className="flex items-start"><FiCheck className="h-4 w-4 text-yellow-600 mr-1 mt-0.5" /><span className="flex-1">Minor cosmetic damage exists</span></li>
                      <li className="flex items-start"><FiCheck className="h-4 w-4 text-yellow-600 mr-1 mt-0.5" /><span className="flex-1">Product is opened but unused</span></li>
                      <li className="flex items-start"><FiCheck className="h-4 w-4 text-yellow-600 mr-1 mt-0.5" /><span className="flex-1">Missing non-essential accessories</span></li>
                    </ul>
                  </div>
                </div>
                {/* Store Credit */}
                <div className="border rounded-lg overflow-hidden">
                  <div className="bg-blue-100 text-blue-700 px-4 py-2 font-medium">Store Credit</div>
                  <div className="p-4 text-gray-600 text-sm">
                    <p className="mb-2">We may offer store credit when:</p>
                    <ul className="space-y-1">
                      <li className="flex items-start"><FiCheck className="h-4 w-4 text-blue-600 mr-1 mt-0.5" /><span className="flex-1">Customer prefers store credit</span></li>
                      <li className="flex items-start"><FiCheck className="h-4 w-4 text-blue-600 mr-1 mt-0.5" /><span className="flex-1">Returns after 30-day window</span></li>
                      <li className="flex items-start"><FiCheck className="h-4 w-4 text-blue-600 mr-1 mt-0.5" /><span className="flex-1">Often includes a bonus (10% extra)</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <p className="mb-4">Refunds are processed within 1-3 business days of receiving and inspecting the returned item, though it may take 5-10 business days for the refund to appear in your account, depending on your payment method and financial institution.</p>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Non-Returnable Items</h3>
            <p className="mb-4">For safety and security reasons, certain items cannot be returned after delivery unless they arrive damaged or defective:</p>
            <ul className="list-disc ps-5 mb-4 space-y-1">
              <li>Software with opened/activated license keys</li>
              <li>Custom-built or personalized electronics</li>
              <li>Memory cards and storage devices that have been used</li>
            </ul>
            <div className="bg-primary/10 md:p-6 p-4 rounded-lg mt-6 border-l-4 border-primary">
              <h4 className="font-semibold mb-2">Contact Our Customer Service Team</h4>
              <p className="mb-4">If you have any questions about our return policy or need assistance with a return, our customer service team is here to help.</p>
              <div className="flex flex-wrap gap-4">
                <a href="tel:+15551234567" className="inline-flex items-center bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md transition text-sm font-medium"><FaPhone className="h-4 w-4 mr-2" />(555) 123-4567</a>
                <a href="mailto:support@electromart.com" className="inline-flex items-center bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md transition text-sm font-medium"><FaEnvelope className="h-4 w-4 mr-2" />support@electromart.com</a>
                <a href="/contact" className="inline-flex items-center bg-primary hover:bg-primary/80 text-white px-4 py-2 rounded-md transition-all duration-300 text-sm font-medium border"><FaComments className="h-4 w-4 mr-2" />Live Chat</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ShippingReturn;

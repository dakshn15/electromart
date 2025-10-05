import React, { useState } from "react";

const faqData = [
  {
    group: "Ordering & Delivery",
    items: [
      {
        q: "What areas do you deliver to?",
        a: "We currently deliver to all major cities and surrounding areas within a 50-mile radius. You can check if we deliver to your area by entering your zip code on our checkout page. We're continuously expanding our delivery network to serve more fashion-conscious customers.",
      },
      {
        q: "How can I track my order?",
        a: "Once your order has been dispatched, you'll receive a tracking link via email and SMS. You can also view the status of your order by logging into your account and visiting the 'Order History' section. For express deliveries, you'll receive real-time updates about your delivery window.",
      },
      {
        q: "What if I need to change or cancel my order?",
        a: "Orders can be modified or canceled within 1 hour of placing the order. To make changes, log into your account and go to 'Order History,' or contact our customer service team directly. Please note that for orders already in the preparation or shipping process, modifications may be limited.",
      },
      {
        q: "Is there a minimum order value for delivery?",
        a: "Yes, we have a minimum order value of $50 for standard delivery. Orders above $100 qualify for free delivery; otherwise, a delivery fee of $5.99 is applied. Express delivery is available for an additional fee of $9.99.",
      },
    ],
  },
  {
    group: "Account & Payment",
    items: [
      {
        q: "What payment methods do you accept?",
        a: "We accept all major credit and debit cards (Visa, Mastercard, American Express, Discover), PayPal, Apple Pay, and Google Pay. We also offer the option to pay in installments through Klarna and Afterpay for eligible purchases. Payment is processed securely at checkout, and we never store your full credit card information on our servers.",
      },
      {
        q: "Do I need to create an account to place an order?",
        a: "While you can place orders as a guest, creating an account offers several benefits: faster checkout, order history tracking, saved delivery addresses, wishlist functionality, and exclusive member-only discounts. Account creation is quick and only requires your email address and a password. You can also sign up using your Google or Facebook account for even faster registration.",
      },
      {
        q: "Is my payment information secure?",
        a: "Yes, we take payment security very seriously. Our website uses SSL encryption to protect your data during transmission. We are PCI DSS compliant, meaning we follow strict industry standards for handling payment information. We partner with trusted payment processors who handle the actual transaction, so your complete card details are never stored on our servers.",
      },
    ],
  },
  {
    group: "Returns & Refunds",
    items: [
      {
        q: "What is your return policy?",
        a: "We offer a 30-day return policy for most items. Products must be unworn, unwashed, and in their original condition with all tags attached. For hygiene reasons, swimwear, underwear, and earrings are final sale unless defective. Simply contact our customer service team within 30 days of delivery with your order number and return reason. Our team will guide you through the return process.",
      },
      {
        q: "How do I report issues with my order?",
        a: "If you encounter any issues with your order (wrong size, damaged items, quality concerns), please contact us within 48 hours of delivery. You can report issues through your account dashboard by selecting the order and clicking 'Report Issue,' or by contacting our customer service team via email, phone, or live chat. Having photos of the problematic items can help speed up the resolution process.",
      },
      {
        q: "How long do refunds take to process?",
        a: "Once we receive and inspect your return, refunds are processed within 3-5 business days. However, the time it takes for the funds to appear in your account depends on your payment method and financial institution. Credit/debit card refunds typically take 5-10 business days, while PayPal refunds are usually faster, appearing within 1-3 business days. Store credit is applied immediately to your account and can be used right away.",
      },
    ],
  },
];

const Faq = () => {
  const [open, setOpen] = useState({});

  const toggle = (groupIdx, itemIdx) => {
    setOpen((prev) => ({
      ...prev,
      [`${groupIdx}-${itemIdx}`]: !prev[`${groupIdx}-${itemIdx}`],
    }));
  };

  return (
    <section className="lg:py-20 py-10">
      <div className="md:container w-full mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {faqData.map((group, groupIdx) => (
            <div className="not-last:md:mb-10 not-last:mb-6" key={group.group}>
              <h2 className="font-bold text-2xl mb-6">{group.group}</h2>
              <div className="lg:space-y-6 space-y-4">
                {group.items.map((item, itemIdx) => {
                  const isOpen = open[`${groupIdx}-${itemIdx}`];
                  return (
                    <div className="border rounded-lg overflow-hidden" key={item.q}>
                      <button
                        className="flex items-center justify-between w-full md:px-6 md:py-4 p-4 text-left font-semibold focus:outline-none gap-3"
                        onClick={() => toggle(groupIdx, itemIdx)}
                        aria-expanded={isOpen}
                      >
                        <span className="flex-1">{item.q}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`h-5 w-5 text-primary transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`}>
                          <path d="M5 12h14" />
                          <path d="M12 5v14" />
                        </svg>
                      </button>
                      <div className={`px-6 pb-4 transition-all duration-200 ${isOpen ? '' : 'hidden'}`}>
                        <p className="text-gray-600">{item.a}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;

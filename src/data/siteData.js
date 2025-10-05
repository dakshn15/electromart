// Example: Static site-wide data for navigation, footer, etc.

export const navigationLinks = [
  { name: 'Home', path: '/' },
  // Shop menu will be dynamically generated in Header.jsx
  { name: 'Shop', path: '/shop' },
  { name: 'Blog', path: '/blogs' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export const footerLinks = [
  { name: 'Home', path: '/' },
  { name: 'Shop', path: '/products' },
  { name: 'About Us', path: '/about' },
  { name: 'Contact', path: '/contact' },
  { name: 'Blog', path: '/blogs' },
];

export const footerCategories = [
  { name: 'Mobile Phones'},
  { name: 'Laptops'},
  { name: 'Audio'},
  { name: 'Wearables'},
  { name: 'Cameras'},
];

export const companyInfo = {
  name: 'Techzonix',
  address: '123 Tech Street, Digital City',
  email: 'info@electroshop.com',
  phone: '+1 (555) 123-4567',
  copyright: '© 2025 Techzonix. All rights reserved.'
}; 
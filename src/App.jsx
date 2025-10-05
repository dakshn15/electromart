import React from "react";
import { CartProvider } from "./context/CartContext";
import { CompareProvider } from "./context/CompareContext";
import { WishlistProvider } from "./context/WishlistContext";
import { UserProvider } from "./context/UserContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';
import AnnounceBar from './components/Common/AnnounceBar';
import Header from './components/Common/Header';
import Footer from './components/Common/Footer';
import HomePage from './pages/HomePage';
import CartPage from "./pages/CartPage";
import WishlistPage from "./pages/WishlistPage";
import ComparePage from "./pages/ComparePage";
import ProductPage from "./pages/ProductPage";
import ProductListPage from "./pages/ProductListPage";
import CollectionListPage from "./pages/CollectionListPage";
import BlogPage from "./pages/BlogPage";
import ArticlePage from "./pages/ArticlePage";
import CheckoutPage from "./pages/CheckoutPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ErrorPage from "./pages/ErrorPage";
import FaqPage from "./pages/FaqPage";
import PrivacyPage from "./pages/PrivacyPage";
import ShippingPage from "./pages/ShippingPage";
import TermsPage from "./pages/TermsPage";
import AddressPage from "./pages/AuthPages/AddressPage";
import AccountPage from "./pages/AuthPages/AccountPage";
import LoginPage from "./pages/AuthPages/LoginPage";
import RegisterPage from "./pages/AuthPages/RegisterPage";
import ForgotPasswordPage from "./pages/AuthPages/ForgotPasswordPage";
import OrderPage from "./pages/AuthPages/OrderPage";
import RequireAuth from './components/Auth/RequireAuth';

function App() {
  return (
    <CartProvider>
      <CompareProvider>
        <WishlistProvider>
          <UserProvider>
            <Router basename={import.meta.env.BASE_URL}>
              <Routes>
                <Route path="/" element={<><AnnounceBar /><Header /><HomePage /><Footer /></>} />
                <Route path="/cart" element={<><AnnounceBar /><Header /><CartPage /><Footer /></>} />
                <Route path="/wishlist" element={<><AnnounceBar /><Header /><WishlistPage /><Footer /></>} />
                <Route path="/compare" element={<><AnnounceBar /><Header /><ComparePage /><Footer /></>} />
                <Route path="/products/:slug" element={<><AnnounceBar /><Header /><ProductPage /><Footer /></>} />
                <Route path="/products" element={<><AnnounceBar /><Header /><ProductListPage /><Footer /></>} />
                <Route path="/collections" element={<><AnnounceBar /><Header /><CollectionListPage /><Footer /></>} />
                <Route path="/blogs/" element={<><AnnounceBar /><Header /><BlogPage /><Footer /></>} />
                <Route path="/blogs/:slug" element={<><AnnounceBar /><Header /><ArticlePage /><Footer /></>} />
                <Route path="/checkout" element={<RequireAuth><AnnounceBar /><Header /><CheckoutPage /><Footer /></RequireAuth>} />
                <Route path="/about" element={<><AnnounceBar /><Header /><AboutPage /><Footer /></>} />
                <Route path="/contact" element={<><AnnounceBar /><Header /><ContactPage /><Footer /></>} />
                <Route path="/faq" element={<><AnnounceBar /><Header /><FaqPage /><Footer /></>} />
                <Route path="/privacy-policy" element={<><AnnounceBar /><Header /><PrivacyPage /><Footer /></>} />
                <Route path="/shipping-return" element={<><AnnounceBar /><Header /><ShippingPage /><Footer /></>} />
                <Route path="/terms-condition" element={<><AnnounceBar /><Header /><TermsPage /><Footer /></>} />
                <Route path="/address" element={<RequireAuth><AnnounceBar /><Header /><AddressPage /><Footer /></RequireAuth>} />
                <Route path="/account" element={<RequireAuth><AnnounceBar /><Header /><AccountPage /><Footer /></RequireAuth>} />
                <Route path="/order" element={<RequireAuth><AnnounceBar /><Header /><OrderPage /><Footer /></RequireAuth>} />
                <Route path="/login" element={<><AnnounceBar /><Header /><LoginPage /><Footer /></>} />
                <Route path="/register" element={<><AnnounceBar /><Header /><RegisterPage /><Footer /></>} />
                <Route path="/forgot-password" element={<><AnnounceBar /><Header /><ForgotPasswordPage /><Footer /></>} />
                <Route path="*" element={<ErrorPage />} />
              </Routes>
            </Router>
          </UserProvider>
        </WishlistProvider>
      </CompareProvider>
    </CartProvider>
  );
}

export default App;

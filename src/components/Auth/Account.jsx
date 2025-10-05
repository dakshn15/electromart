import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaBox, FaMapMarkerAlt, FaHeart, FaSignOutAlt, FaBoxOpen, FaUserCircle } from "react-icons/fa";
import AccountSidebar from "../Common/AccountSidebar";
import { useUser } from "../../context/UserContext";

const Account = () => {
  const { user, setUser, registeredUsers, setRegisteredUsers, orders } = useUser();
  const [account, setAccount] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    phone: user.phone || "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [successMsg, setSuccessMsg] = useState("");

  const recentOrders = (orders && orders.length > 0)
    ? orders.slice(-5).reverse()
    : [];

  // Get last 3 items ordered across all orders (most recent first)
  const allOrderedItems = (user.orders || [])
    .flatMap(order => order.items.map(item => ({
      ...item,
      orderId: order.id,
      orderDate: order.date,
      orderStatus: order.status,
      orderTotal: order.total
    })))
    .sort((a, b) => new Date(b.orderDate) - new Date(a.orderDate));
  const recentItems = allOrderedItems.slice(0, 3);

  // Handle account form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAccount((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
    setSuccessMsg("");
  };

  const validate = () => {
    const newErrors = {};
    if (!account.firstName) newErrors.firstName = "First name is required.";
    if (!account.lastName) newErrors.lastName = "Last name is required.";
    if (account.newPassword || account.confirmPassword) {
      if (!account.currentPassword) newErrors.currentPassword = "Current password is required to change password.";
      if (account.newPassword !== account.confirmPassword) newErrors.confirmPassword = "Passwords do not match.";
      if (account.newPassword && account.newPassword.length < 8) newErrors.newPassword = "Password must be at least 8 characters.";
    }
    return newErrors;
  };

  // Handle account form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    // Only allow name and password change, not email
    let updatedUser = {
      ...user,
      firstName: account.firstName,
      lastName: account.lastName,
      phone: account.phone,
    };
    // Password change logic
    if (account.newPassword) {
      if (account.currentPassword !== user.password) {
        setErrors({ currentPassword: "Current password is incorrect." });
        return;
      }
      updatedUser.password = account.newPassword;
    }
    setUser(updatedUser);
    setRegisteredUsers((prev) => prev.map(u => u.email === user.email ? updatedUser : u));
    setAccount((prev) => ({ ...prev, currentPassword: "", newPassword: "", confirmPassword: "" }));
    setSuccessMsg("Account details updated!");
  };

  return (
    <section className="lg:py-20 py-10">
      <div className="md:container w-full mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:gap-8 gap-6">
          {/* Sidebar */}
          <div className="lg:w-1/4">
            <AccountSidebar firstName={user.firstName} lastName={user.lastName} email={user.email} />
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Dashboard Section */}
            <div id="dashboard" className="bg-gray-50 border md:p-6 p-4 rounded-lg shadow-sm mb-6">
              <h2 className="font-heading font-bold text-xl md:text-2xl md:mb-6 mb-4">Dashboard</h2>
              <p className="text-gray-600 mb-6">
                From your account dashboard you can view your <Link to="/order" className="text-primary hover:underline">recent orders</Link>, manage your <Link to="/address" className="text-primary hover:underline">shipping and billing addresses</Link>, and <a href="#account-details" className="text-primary hover:underline">edit your password and account details</a>.
              </p>
              {/* Dashboard Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Orders Card */}
                <div className="border rounded-lg p-4 flex flex-col items-center text-center hover:border-primary transition">
                  <div className="bg-primary bg-opacity-10 md:h-12 md:w-12 h-10 w-10 rounded-full flex items-center justify-center mb-3">
                    <FaBoxOpen className="text-white text-xl" />
                  </div>
                  <h3 className="font-heading font-semibold mb-1">Orders</h3>
                  <p className="text-sm text-gray-500 mb-3">View and track your orders</p>
                  <Link to="/order" className="text-primary text-sm hover:underline mt-auto">View Orders</Link>
                </div>
                {/* Addresses Card */}
                <div className="border rounded-lg p-4 flex flex-col items-center text-center hover:border-primary transition">
                  <div className="bg-primary bg-opacity-10 md:h-12 md:w-12 h-10 w-10 rounded-full flex items-center justify-center mb-3">
                    <FaMapMarkerAlt className="text-white text-xl" />
                  </div>
                  <h3 className="font-heading font-semibold mb-1">Addresses</h3>
                  <p className="text-sm text-gray-500 mb-3">Manage your addresses</p>
                  <Link to="/address" className="text-primary text-sm hover:underline mt-auto">Manage Addresses</Link>
                </div>
                {/* Wishlist Card */}
                <div className="border rounded-lg p-4 flex flex-col items-center text-center hover:border-primary transition">
                  <div className="bg-primary bg-opacity-10 md:h-12 md:w-12 h-10 w-10 rounded-full flex items-center justify-center mb-3">
                    <FaHeart className="text-white text-xl" />
                  </div>
                  <h3 className="font-heading font-semibold mb-1">Wishlist</h3>
                  <p className="text-sm text-gray-500 mb-3">View saved items</p>
                  <Link to="/wishlist" className="text-primary text-sm hover:underline mt-auto">View Wishlist</Link>
                </div>
                {/* Account Card */}
                <div className="border rounded-lg p-4 flex flex-col items-center text-center hover:border-primary transition">
                  <div className="bg-primary bg-opacity-10 md:h-12 md:w-12 h-10 w-10 rounded-full flex items-center justify-center mb-3">
                    <FaUserCircle className="text-white text-xl" />
                  </div>
                  <h3 className="font-heading font-semibold mb-1">Account Details</h3>
                  <p className="text-sm text-gray-500 mb-3">Update your information</p>
                  <a href="#account-details" className="text-primary text-sm hover:underline mt-auto">Edit Details</a>
                </div>
              </div>
            </div>

            {/* Recent Orders */}
            <div className="bg-gray-50 border md:p-6 p-4 rounded-lg shadow-sm mb-6">
              <div className="flex items-center justify-between md:mb-6 mb-4 gap-4 flex-wrap">
                <h2 className="font-heading font-bold text-xl">Recent Orders</h2>
                <Link to="/order" className="text-primary hover:underline text-sm">View All Orders</Link>
              </div>
              {/* Orders Table */}
              <div className="overflow-x-auto">
                <table className="md:w-full min-w-[750px] border">
                  <thead className="text-left bg-primary/10 border border-b">
                    <tr>
                      <th className="py-3 px-4 text-sm font-semibold text-gray-700">Order Number</th>
                      <th className="py-3 px-4 text-sm font-semibold text-gray-700">Date</th>
                      <th className="py-3 px-4 text-sm font-semibold text-gray-700">Products</th>
                      <th className="py-3 px-4 text-sm font-semibold text-gray-700">Status</th>
                      <th className="py-3 px-4 text-sm font-semibold text-gray-700">Total</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {recentOrders.length === 0 ? (
                      <tr>
                        <td colSpan="5" className="py-6 px-4 text-center text-gray-500">No recent orders found.</td>
                      </tr>
                    ) : (
                      recentOrders.map((order) => (
                        <tr key={order.id}>
                          <td className="py-3 px-4 text-sm">{order.id}</td>
                          <td className="py-3 px-4 text-sm">{order.date}</td>
                          <td className="py-3 px-4 text-sm">
                            {Array.isArray(order.items) && order.items.length > 0 ? (
                              <div className="flex flex-col gap-2">
                                {order.items.map((item, idx) => (
                                  <div key={idx} className="flex items-center gap-2">
                                    {item.image && (
                                      <img src={item.image} alt={item.name} className="w-8 h-8 object-cover rounded border" />
                                    )}
                                    <span className="font-medium">{item.name}</span>
                                    <span className="text-xs text-gray-500 ml-2">x{item.quantity}</span>
                                  </div>
                                ))}
                              </div>
                            ) : (
                              "-"
                            )}
                          </td>
                          <td className="py-3 px-4">
                            {order.status === "Delivered" && (
                              <span className="inline-block bg-green-100 text-green-600 px-2 py-1 rounded border border-green-600 text-xs font-medium">Delivered</span>
                            )}
                            {order.status === "Processing" && (
                              <span className="inline-block bg-primary bg-opacity-10 text-white px-2 py-1 rounded border border-primary text-xs font-medium">Processing</span>
                            )}
                            {order.status === "Cancelled" && (
                              <span className="inline-block bg-red-100 text-red-600 px-2 py-1 rounded border border-red-600 text-xs font-medium">Cancelled</span>
                            )}
                          </td>
                          <td className="py-3 px-4 text-sm font-medium">{order.total}</td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Account Details */}
            <div id="account-details" className="bg-gray-50 border md:p-6 p-4 rounded-lg shadow-sm">
              <h2 className="font-heading font-bold text-xl md:mb-6 mb-4">Account Details</h2>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 gap-4 md:mb-6 mb-4">
                  <div>
                    <label className="block mb-2 font-medium md:text-base text-sm">First Name <span className="text-red-500">*</span></label>
                    <input type="text" name="firstName" value={account.firstName} onChange={handleChange} className="form-input" required />
                  </div>
                  <div>
                    <label className="block mb-2 font-medium md:text-base text-sm">Last Name <span className="text-red-500">*</span></label>
                    <input type="text" name="lastName" value={account.lastName} onChange={handleChange} className="form-input" required />
                  </div>
                  <div>
                    <label className="block mb-2 font-medium md:text-base text-sm">Email Address <span className="text-red-500">*</span></label>
                    <input type="email" name="email" value={account.email} className="form-input bg-gray-100" disabled />
                  </div>
                  <div>
                    <label className="block mb-2 font-medium md:text-base text-sm">Phone Number</label>
                    <input type="tel" name="phone" value={account.phone} onChange={handleChange} className="form-input" />
                  </div>
                </div>
                <h3 className="font-heading font-semibold text-lg mb-4 border-b pb-2">Password Change</h3>
                <p className="text-sm text-gray-500 mb-4">Leave blank to keep the same password</p>
                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 gap-4 md:mb-6 mb-4">
                  <div>
                    <label className="block mb-2 font-medium md:text-base text-sm">Current Password</label>
                    <input type="password" name="currentPassword" value={account.currentPassword} onChange={handleChange} className="form-input" />
                  </div>
                  <div>
                    <label className="block mb-2 font-medium md:text-base text-sm">New Password</label>
                    <input type="password" name="newPassword" value={account.newPassword} onChange={handleChange} className="form-input" />
                  </div>
                  <div>
                    <label className="block mb-2 font-medium md:text-base text-sm">Confirm New Password</label>
                    <input type="password" name="confirmPassword" value={account.confirmPassword} onChange={handleChange} className="form-input" />
                  </div>
                </div>
                <div className="flex justify-start">
                  <button type="submit" className="btn-primary">Save Changes</button>
                </div>
                {/* Error and Success Messages */}
                <div className="mt-4">
                  {errors.firstName && <div className="text-red-500 text-xs mt-1">{errors.firstName}</div>}
                  {errors.lastName && <div className="text-red-500 text-xs mt-1">{errors.lastName}</div>}
                  {errors.currentPassword && <div className="text-red-500 text-xs mt-1">{errors.currentPassword}</div>}
                  {errors.newPassword && <div className="text-red-500 text-xs mt-1">{errors.newPassword}</div>}
                  {errors.confirmPassword && <div className="text-red-500 text-xs mt-1">{errors.confirmPassword}</div>}
                  {successMsg && <div className="text-green-600 text-sm mb-4">{successMsg}</div>}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Account;

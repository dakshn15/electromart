import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaBox, FaMapMarkerAlt, FaHeart, FaSignOutAlt } from "react-icons/fa";
import { useUser } from "../../context/UserContext";

const statusStyles = {
  Delivered: "bg-green-100 text-green-600 border-green-600",
  Processing: "bg-primary bg-opacity-10 text-white border-primary",
  Cancelled: "bg-red-100 text-red-600 border-red-600",
};

const Order = () => {
  const [filter, setFilter] = useState("all");
  const { user, orders } = useUser();

  // Sidebar user info
  const userName = user ? `${user.firstName} ${user.lastName}` : "";
  const userEmail = user ? user.email : "";

  // Filter and sort orders so latest are on top
  const filteredOrders = orders
    .filter(order => filter === "all" || order.status.toLowerCase() === filter)
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  // Show order items dynamically
  const getOrderProducts = (order) => order.items || [];

  return (
    <section className="lg:py-20 py-10">
      <div className="md:container w-full mx-auto px-4">
        <div className="flex flex-col lg:flex-row md:gap-8 gap-6">
          {/* Account Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-gray-50 border md:p-6 p-4 rounded-lg shadow-sm lg:sticky lg:top-20">
              <div className="flex items-center gap-4 pb-4 border-b mb-4">
                <div className="bg-primary bg-opacity-10 text-white xl:h-12 xl:w-12 h-10 w-10 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaUser />
                </div>
                <div>
                  <h3 className="font-medium">{userName}</h3>
                  <p className="text-sm text-gray-500 break-all">{userEmail}</p>
                </div>
              </div>
              <ul className="space-y-1">
                <li>
                  <Link to="/order" className="block py-2 px-3 rounded-md hover:bg-primary/10 transition-all duration-300">
                    <div className="flex items-center">
                      <FaBox className="mr-3 text-gray-500" />
                      <span>Orders</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/address" className="block py-2 px-3 rounded-md hover:bg-primary/10 transition-all duration-300">
                    <div className="flex items-center">
                      <FaMapMarkerAlt className="mr-3 text-gray-500" />
                      <span>Addresses</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/wishlist" className="block py-2 px-3 rounded-md hover:bg-primary/10 transition-all duration-300">
                    <div className="flex items-center">
                      <FaHeart className="mr-3 text-gray-500" />
                      <span>Wishlist</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/account" className="block py-2 px-3 rounded-md hover:bg-primary/10 transition-all duration-300">
                    <div className="flex items-center">
                      <FaUser className="mr-3 text-gray-500" />
                      <span>Account Details</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/login" className="block py-2 px-3 rounded-md hover:bg-primary/10 text-red-600 transition-all duration-300">
                    <div className="flex items-center">
                      <FaSignOutAlt className="mr-3" />
                      <span>Logout</span>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            <div className="bg-gray-50 border md:p-6 p-4 rounded-lg shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <h2 className="font-bold md:text-2xl text-xl">Order History</h2>
                <div className="flex items-center">
                  <span className="mr-2">Filter:</span>
                  <div className="relative">
                    <select
                      className="block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                      value={filter}
                      onChange={e => setFilter(e.target.value)}
                    >
                      <option value="all">All Orders</option>
                      <option value="processing">Processing</option>
                      <option value="shipped">Shipped</option>
                      <option value="delivered">Delivered</option>
                      <option value="cancelled">Cancelled</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Orders List */}
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
                    {filteredOrders.length === 0 ? (
                      <tr>
                        <td colSpan="5" className="py-6 px-4 text-center text-gray-500">No orders found.</td>
                      </tr>
                    ) : (
                      filteredOrders.map((order) => (
                        <tr key={order.id}>
                          <td className="py-3 px-4 text-sm font-mono font-semibold">{order.id}</td>
                          <td className="py-3 px-4 text-sm whitespace-nowrap">{order.date}</td>
                          <td className="py-3 px-4 text-sm">
                            {(order.items && order.items.length > 0) ? (
                              <ul className="space-y-2">
                                {order.items.map((item, idx) => (
                                  <li key={idx} className="flex items-center gap-3 border rounded p-2 bg-white shadow-sm">
                                    <img src={item.image} alt={item.name} className="h-10 w-10 object-contain" />
                                    <div>
                                      <div className="font-medium text-gray-800 mb-2">{item.name}</div>
                                      <div className="text-xs text-gray-500">Qty: {item.quantity} &nbsp;|&nbsp; Price: ${item.price}</div>
                                    </div>
                                  </li>
                                ))}
                              </ul>
                            ) : ("-")}
                          </td>
                          <td className="py-3 px-4 text-sm">
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
                          <td className="py-3 px-4 text-sm font-bold text-primary-dark">{order.total}</td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Order;

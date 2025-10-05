import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaBox, FaMapMarkerAlt, FaHeart, FaSignOutAlt } from "react-icons/fa";
import { useUser } from "../../context/UserContext";

const AccountSidebar = ({ firstName, lastName, email }) => {
  const { logout } = useUser();
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  return (
    <div className="bg-gray-50 border md:p-6 p-4 rounded-lg shadow-sm lg:sticky lg:top-20">
      <div className="flex items-center gap-4 pb-4 border-b mb-2">
        <div className="bg-primary bg-opacity-10 text-white xl:h-12 xl:w-12 h-10 w-10 rounded-full flex items-center justify-center flex-shrink-0">
          <FaUser className="text-2xl" />
        </div>
        <div>
          <h3 className="font-medium mb-1">{firstName} {lastName}</h3>
          <p className="text-sm text-gray-500 break-all">{email}</p>
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
          <button type="button" onClick={handleLogout} className="block w-full text-left py-2 px-3 rounded-md hover:bg-primary/10 text-red-600 transition-all duration-300">
            <div className="flex items-center">
              <FaSignOutAlt className="mr-3" />
              <span>Logout</span>
            </div>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default AccountSidebar;

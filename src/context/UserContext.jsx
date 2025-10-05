import React, { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // Load from localStorage
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem("user");
    return stored ? JSON.parse(stored) : null;
  });
  const [orders, setOrders] = useState(() => {
    const stored = localStorage.getItem("orders");
    return stored ? JSON.parse(stored) : [];
  });
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const stored = localStorage.getItem("isLoggedIn");
    return stored === "true";
  });
  const [registeredUsers, setRegisteredUsers] = useState(() => {
    const stored = localStorage.getItem("registeredUsers");
    return stored ? JSON.parse(stored) : [];
  });

  // Persist to localStorage
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("orders", JSON.stringify(orders));
    localStorage.setItem("isLoggedIn", isLoggedIn);
    localStorage.setItem("registeredUsers", JSON.stringify(registeredUsers));
  }, [user, orders, isLoggedIn, registeredUsers]);

  // Login function
  const login = ({ email, password }) => {
    const user = registeredUsers.find((u) => u.email === email);
    if (!user) return "invalid_email";
    if (user.password !== password) return "invalid_password";
    setUser(user);
    setIsLoggedIn(true);
    setOrders(user.orders || []);
    return true;
  };

  // Register function
  const register = ({ firstName, lastName, email, password }) => {
    if (registeredUsers.some((u) => u.email === email)) return "already_registered";
    const newUser = { firstName, lastName, email, password, orders: [] };
    setRegisteredUsers((prev) => [...prev, newUser]);
    return "success";
  };

  // Logout function
  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
    setOrders([]);
  };

  // Add order function
  const addOrder = (order) => {
    setOrders((prev) => {
      const updatedOrders = [...prev, order];
      // Also update orders for the logged-in user in registeredUsers
      setRegisteredUsers((prev) =>
        prev.map((u) =>
          u.email === user.email ? { ...u, orders: updatedOrders } : u
        )
      );
      // Update user state as well
      setUser((prevUser) => (prevUser ? { ...prevUser, orders: updatedOrders } : prevUser));
      return updatedOrders;
    });
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        isLoggedIn,
        login,
        register,
        logout,
        orders,
        setOrders,
        addOrder,
        registeredUsers,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);

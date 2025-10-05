import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import AccountSidebar from "../Common/AccountSidebar";
import { useUser } from "../../context/UserContext";

const initialAddresses = [
  {
    id: 1,
    label: "Home",
    name: "John Doe",
    address1: "123 Main Street",
    address2: "Apt 4B",
    city: "San Francisco",
    state: "CA",
    zip: "94101",
    country: "United States",
    phone: "(555) 123-4567",
    isDefault: true,
  },
  {
    id: 2,
    label: "Work",
    name: "John Doe",
    address1: "456 Corporate Drive",
    address2: "Suite 202",
    city: "San Francisco",
    state: "CA",
    zip: "94107",
    country: "United States",
    phone: "(555) 765-4321",
    isDefault: false,
  },
];

const Address = () => {
  const { user } = useUser();
  const [addresses, setAddresses] = useState(initialAddresses);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    id: null,
    label: "home",
    name: "",
    phone: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    country: "us",
    isDefault: false,
    instructions: "",
  });
  const [editMode, setEditMode] = useState(false);

  // Extract first and last name, and email from the default address (simulate user info)
  const userName = addresses[0]?.name || "";
  const [firstName, ...lastNameArr] = userName.split(" ");
  const lastName = lastNameArr.join(" ");
  const email = "john.doe@example.com";

  const labelOptions = [
    { value: "home", label: "Home" },
    { value: "work", label: "Work" },
    { value: "other", label: "Other" },
  ];
  const countryOptions = [
    { value: "in", label: "India" },
    { value: "us", label: "United States" },
    { value: "ca", label: "Canada" },
    { value: "uk", label: "United Kingdom" },
    { value: "au", label: "Australia" },
  ];

  const handleShowForm = (address = null) => {
    if (address) {
      setForm({
        id: address.id,
        label: labelOptions.find((l) => l.label === address.label)?.value || "home",
        name: address.name,
        phone: address.phone,
        address1: address.address1,
        address2: address.address2,
        city: address.city,
        state: address.state,
        zip: address.zip,
        country: countryOptions.find((c) => c.label === address.country)?.value || "us",
        isDefault: address.isDefault,
        instructions: address.instructions || "",
      });
      setEditMode(true);
    } else {
      setForm({
        id: null,
        label: "home",
        name: "",
        phone: "",
        address1: "",
        address2: "",
        city: "",
        state: "",
        zip: "",
        country: "us",
        isDefault: false,
        instructions: "",
      });
      setEditMode(false);
    }
    setShowForm(true);
  };

  const handleHideForm = () => {
    setShowForm(false);
    setEditMode(false);
    setForm({
      id: null,
      label: "home",
      name: "",
      phone: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      zip: "",
      country: "us",
      isDefault: false,
      instructions: "",
    });
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.address1 || !form.city || !form.state || !form.zip || !form.country) return;
    let newAddresses = [...addresses];
    if (form.isDefault) {
      newAddresses = newAddresses.map((a) => ({ ...a, isDefault: false }));
    }
    if (editMode) {
      newAddresses = newAddresses.map((a) =>
        a.id === form.id
          ? {
              ...form,
              label: labelOptions.find((l) => l.value === form.label)?.label || "Home",
              country: countryOptions.find((c) => c.value === form.country)?.label || "United States",
            }
          : a
      );
    } else {
      newAddresses.push({
        ...form,
        id: Date.now(),
        label: labelOptions.find((l) => l.value === form.label)?.label || "Home",
        country: countryOptions.find((c) => c.value === form.country)?.label || "United States",
      });
    }
    setAddresses(newAddresses);
    handleHideForm();
  };

  const handleRemove = (id) => {
    setAddresses(addresses.filter((a) => a.id !== id));
  };

  const handleSetDefault = (id) => {
    setAddresses(addresses.map((a) => ({ ...a, isDefault: a.id === id })));
  };

  return (
    <section className="lg:py-20 py-10">
      <div className="md:container w-full mx-auto px-4">
        <div className="flex flex-col lg:flex-row md:gap-8 gap-6">
          {/* Sidebar */}
          <div className="lg:w-1/4">
            <AccountSidebar firstName={user.firstName} lastName={user.lastName} email={user.email} />
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            <div className="bg-gray-50 border lg:p-6 p-4 rounded-lg shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <h2 className="font-bold md:text-2xl text-xl">Your Addresses</h2>
                <button className="btn-primary flex items-center gap-2" onClick={() => handleShowForm()}>
                  <FaPlus />
                  Add New Address
                </button>
              </div>

              {/* Addresses List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:gap-6 gap-4" id="addresses-list">
                {addresses.map((a) => (
                  <div key={a.id} className="bg-white border rounded-lg md:p-5 p-4 relative">
                    {a.isDefault && (
                      <span className="inline-block bg-primary text-white text-xs px-2 py-1 rounded-md absolute right-4 top-4">Default</span>
                    )}
                    <h3 className="font-medium text-lg mb-2">{a.label}</h3>
                    <p className="text-gray-700 mb-3">
                      {a.name}<br />
                      {a.address1}<br />
                      {a.address2 && <>{a.address2}<br /></>}
                      {a.city}, {a.state} {a.zip}<br />
                      {a.country}
                    </p>
                    <p className="text-gray-700 mb-4">Phone: {a.phone}</p>
                    <div className="flex sm:gap-3 gap-1 flex-wrap">
                      <button className="text-primary hover:text-primary-dark font-medium md:text-base text-sm" onClick={() => handleShowForm(a)}>Edit</button>
                      <span className="text-gray-300 font-medium">|</span>
                      <button
                        className={`text-red-500 hover:text-red-600 font-medium md:text-base text-sm${a.isDefault ? ' cursor-not-allowed opacity-60' : ''}`}
                        onClick={() => !a.isDefault && handleRemove(a.id)}
                        disabled={a.isDefault}
                      >Remove</button>
                      {!a.isDefault && <>
                        <span className="text-gray-300 font-medium">|</span>
                        <button className="text-primary hover:text-primary-dark font-medium md:text-base text-sm" onClick={() => handleSetDefault(a.id)}>Set as Default</button>
                      </>}
                    </div>
                  </div>
                ))}
              </div>

              {/* Add/Edit Address Form */}
              {showForm && (
                <div className="bg-white border rounded-lg md:p-6 p-4 mt-6">
                  <h3 className="font-heading font-semibold text-xl mb-4">{editMode ? "Edit Address" : "Add New Address"}</h3>
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    {/* Address Label */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block mb-2 font-medium md:text-base text-sm">Address Label</label>
                        <select name="label" value={form.label} onChange={handleChange} className="w-full rounded-md border focus:ring-primary focus:border-primary">
                          {labelOptions.map((opt) => (
                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    {/* Full Name and Phone */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block mb-2 font-medium md:text-base text-sm">Full Name <span className="text-red-500">*</span></label>
                        <input type="text" name="name" value={form.name} onChange={handleChange} className="form-input" required />
                      </div>
                      <div>
                        <label className="block mb-2 font-medium md:text-base text-sm">Phone Number <span className="text-red-500">*</span></label>
                        <input type="tel" name="phone" value={form.phone} onChange={handleChange} className="form-input" required />
                      </div>
                    </div>
                    {/* Address Line 1 and 2 */}
                    <div>
                      <label className="block mb-2 font-medium md:text-base text-sm">Address Line 1 <span className="text-red-500">*</span></label>
                      <input type="text" name="address1" value={form.address1} onChange={handleChange} className="form-input" required />
                    </div>
                    <div>
                      <label className="block mb-2 font-medium md:text-base text-sm">Address Line 2</label>
                      <input type="text" name="address2" value={form.address2} onChange={handleChange} className="form-input" />
                    </div>
                    {/* City, State, Zip */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block mb-2 font-medium md:text-base text-sm">City <span className="text-red-500">*</span></label>
                        <input type="text" name="city" value={form.city} onChange={handleChange} className="form-input" required />
                      </div>
                      <div>
                        <label className="block mb-2 font-medium md:text-base text-sm">State/Province <span className="text-red-500">*</span></label>
                        <input type="text" name="state" value={form.state} onChange={handleChange} className="form-input" required />
                      </div>
                      <div>
                        <label className="block mb-2 font-medium md:text-base text-sm">Postal Code <span className="text-red-500">*</span></label>
                        <input type="text" name="zip" value={form.zip} onChange={handleChange} className="form-input" required />
                      </div>
                    </div>
                    {/* Country */}
                    <div>
                      <label className="block mb-2 font-medium md:text-base text-sm">Country <span className="text-red-500">*</span></label>
                      <select name="country" value={form.country} onChange={handleChange} className="w-full rounded-md border focus:ring-primary focus:border-primary" required>
                        <option value="">Select a country</option>
                        {countryOptions.map((opt) => (
                          <option key={opt.value} value={opt.value}>{opt.label}</option>
                        ))}
                      </select>
                    </div>
                    {/* Default Address */}
                    <div>
                      <div className="checkbox flex items-center">
                        <input type="checkbox" id="isDefault" name="isDefault" checked={form.isDefault} onChange={handleChange} className="rounded border text-primary focus:ring-primary mr-2" />
                        <label htmlFor="isDefault" className="flex-1 font-medium">Make this my default address</label>
                      </div>
                    </div>
                    {/* Delivery Instructions */}
                    <div>
                      <label className="block mb-2 font-medium md:text-base text-sm">Delivery Instructions (Optional)</label>
                      <textarea name="instructions" value={form.instructions} onChange={handleChange} className="form-input" rows={3}></textarea>
                    </div>
                    {/* Form Actions */}
                    <div className="flex flex-wrap gap-4">
                      <button type="submit" className="btn-primary">Save Address</button>
                      <button type="button" className="bg-gray-50 border text-gray-700 font-medium py-2.5 px-6 rounded-md hover:bg-primary/10 transition-all duration-300" onClick={handleHideForm}>Cancel</button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Address;

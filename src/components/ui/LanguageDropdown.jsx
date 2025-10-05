import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const languages = [
  { code: "en", label: "English" },
  { code: "fr", label: "French" },
  { code: "de", label: "German" },
  { code: "es", label: "Spanish" },
];

const LanguageDropdown = ({ selected, onChange }) => {
  const [open, setOpen] = useState(false);
  const current = languages.find(l => l.code === selected) || languages[0];

  return (
    <div className="relative">
      <button
        type="button"
        className="w-full flex items-center justify-between gap-2 px-4 py-2 border rounded-md text-sm"
        onClick={() => setOpen(!open)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span>{current.label}</span>
        <FaChevronDown className={`transition-all duration-300 ${open ? "rotate-180" : "rotate-0"}`} />
      </button>
      {open && (
        <ul className="absolute left-0 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow z-10 overflow-hidden transition-all duration-300" role="listbox">
          {languages.map(lang => (
            <li key={lang.code}>
              <button
                type="button"
                className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${lang.code === selected ? "font-bold text-primary" : "text-gray-700"}`}
                onClick={() => { onChange(lang.code); setOpen(false); }}
                role="option"
                aria-selected={lang.code === selected}
              >
                {lang.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageDropdown;

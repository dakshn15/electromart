
import React, { useState } from "react";
import SearchPopup from "../components/Common/SearchPopup";

export function useSearchPopup() {
  const [searchOpen, setSearchOpen] = useState(false);
  const openSearch = () => setSearchOpen(true);
  const closeSearch = () => setSearchOpen(false);

  const SearchPopupComponent = (
    <SearchPopup isOpen={searchOpen} onClose={closeSearch} />
  );

  return { searchOpen, openSearch, closeSearch, SearchPopupComponent };
}

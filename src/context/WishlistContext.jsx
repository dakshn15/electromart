import React, { createContext, useContext, useReducer, useEffect } from "react";

const WishlistContext = createContext();

const initialState = {
  wishlist: JSON.parse(localStorage.getItem("wishlist")) || [],
};

function wishlistReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_WISHLIST": {
      if (state.wishlist.find(item => item.id === action.payload.id)) {
        return state;
      }
      return {
        ...state,
        wishlist: [...state.wishlist, action.payload],
      };
    }
    case "REMOVE_FROM_WISHLIST": {
      return {
        ...state,
        wishlist: state.wishlist.filter(item => item.id !== action.payload),
      };
    }
    case "CLEAR_WISHLIST": {
      return { ...state, wishlist: [] };
    }
    default:
      return state;
  }
}

export function WishlistProvider({ children }) {
  const [state, dispatch] = useReducer(wishlistReducer, initialState);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
  }, [state.wishlist]);

  return (
    <WishlistContext.Provider value={{ ...state, dispatch }}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  return useContext(WishlistContext);
}

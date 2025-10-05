import React, { createContext, useContext, useReducer, useEffect } from "react";

const CompareContext = createContext();

const initialState = {
  compare: JSON.parse(localStorage.getItem("compare")) || [],
};

function compareReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_COMPARE": {
      // Prevent duplicates
      if (state.compare.find(item => item.id === action.payload.id)) {
        return state;
      }
      return {
        ...state,
        compare: [...state.compare, action.payload],
      };
    }
    case "REMOVE_FROM_COMPARE": {
      return {
        ...state,
        compare: state.compare.filter(item => item.id !== action.payload),
      };
    }
    case "CLEAR_COMPARE": {
      return { ...state, compare: [] };
    }
    default:
      return state;
  }
}

export function CompareProvider({ children }) {
  const [state, dispatch] = useReducer(compareReducer, initialState);

  useEffect(() => {
    localStorage.setItem("compare", JSON.stringify(state.compare));
  }, [state.compare]);

  return (
    <CompareContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CompareContext.Provider>
  );
}

export function useCompare() {
  return useContext(CompareContext);
}

import React, { Children, createContext, useContext } from "react";

const MyContext = createContext();
export const useMyContext = () => useContext(MyContext);

const MyContextProvider = ({ children }) => {
  const name = "Nischaya";
  const age = 12;
  const email = "hello";
  const fruits = ["apple", "banana"];

  return (
    <MyContext.Provider value={{ name, age, email, fruits }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContextProvider;

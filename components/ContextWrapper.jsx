import AppContext from "../context/context";
import { useState } from "react";
import axios from "axios";

const ContextWrapper = ({ children }) => {
  const [query, setQuery] = useState([]);

  return <AppContext.Provider value={{ query }}>{children}</AppContext.Provider>;
};

export default ContextWrapper;

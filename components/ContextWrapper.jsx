import AppContext from "../context/context";
import { useState } from "react";
import axios from "axios";

const ContextWrapper = ({ children }) => {
  const [data, setData] = useState([]);

  return <AppContext.Provider value={{ data }}>{children}</AppContext.Provider>;
};

export default ContextWrapper;

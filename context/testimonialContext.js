import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const TestimonialContext = createContext();

export const TestimonialProvider = ({ children }) => {
  const [testiList, setTestiList] = useState([]);

  useEffect(() => {
    axios
      .get("/api/testimonials")
      .then((res) => res.data)
      .then((data) => {
        setTestiList(data);
      });
  }, [testiList]);

  return (
    <TestimonialContext.Provider
      value={{
        testiList,
        setTestiList,
      }}
    >
      {children}
    </TestimonialContext.Provider>
  );
};

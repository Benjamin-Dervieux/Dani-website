import { useState, useEffect } from "react";
import axios from "axios";
import TestimonialCard from "../TestimonialCard/TestimonialCard";
import { RiDeleteBinLine } from "react-icons/ri";

const TestimonialList = () => {
  const [testimoList, setTestimoList] = useState([]);

  const fetchTestimonialList = () => {
    axios
      .get("api/testimonials")
      .then((res) => setTestimoList(res.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchTestimonialList();
  }, []);

  const handleDelete = async (id) => {
    await axios
      .delete(`api/testimonials/${id}`)
      .then(() => fetchTestimonialList());
  };

  return (
    <div className="mb-8">
      {testimoList.map((testimonials) => {
        return (
          <div key={testimonials.id}>
            <TestimonialCard
              card={testimonials}
              key={testimonials.id}
              id={testimonials.id}
            />
            <div className="w-[390px] flex justify-around ">
              <div className="flex items-center ">
                <RiDeleteBinLine />
                <button
                  className="ml-3 text-md hover:underline"
                  type="button"
                  onClick={() => {
                    handleDelete(testimonials.id);
                  }}
                >
                  Supprimer
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TestimonialList;

import {
  patchTestimonial,
  deleteOneTestimonial,
} from "../../../model/testimonials";
import base from "../../../middleware/common";

const handlePatch = async (req, res) => {
  const testimonialToPatch = await patchTestimonial(req.query.id);
  return res.status(201).send(testimonialToPatch);
};

const handleDelete = async (req, res) => {
  const testimonialToDelete = await deleteOneTestimonial(req.query.id);
  return res.status(201).send(testimonialToDelete);
};

export default base().patch(handlePatch).delete(handleDelete);

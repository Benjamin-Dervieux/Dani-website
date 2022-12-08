import {
  createNewTestimonial,
  findAllTestimoials,
} from "../../../model/testimonials";
import base from "../../../middleware/common";

const handlePost = async (req, res) => {
  const testimonialPost = await createNewTestimonial(req.body);
  return res.status(201).send(testimonialPost);
};

async function handleGet(req, res) {
  res.send(await findAllTestimoials());
}

export default base().post(handlePost).get(handleGet);

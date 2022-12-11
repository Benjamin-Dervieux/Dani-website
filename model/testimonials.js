const db = require("../lib/prisma");

module.exports.createNewTestimonial = async ({
  rating,
  title,
  content,
  author,
}) => {
  return await db.testimonials.create({
    data: {
      rating,
      title,
      content,
      author,
    },
  });
};

module.exports.patchTestimonial = async (data) => {
  return await db.testimonials
    .update({
      where: {
        id: data.id,
      },
      data: {
        rating: data.rating,
        title: data.title,
        content: data.content,
        author: data.author,
      },
    })
    .catch((_) => false);
};

module.exports.findAllTestimoials = () =>
  db.testimonials.findMany({
    orderBy: {
      id: "desc",
    },
  });

module.exports.deleteOneTestimonial = (id) => {
  return db.testimonials.delete({
    where: {
      id: parseInt(id),
    },
  });
};

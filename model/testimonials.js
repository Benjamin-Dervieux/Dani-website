const db = require("../db");

module.exports.createNewTestimonial = async ({ title, content, author }) => {
  return await db.testimonials.create({
    data: {
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

module.exports.deleteTestimonials = (id) => {
  return db.testimonials.delete({
    where: {
      id,
    },
  });
};

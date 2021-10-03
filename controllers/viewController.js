exports.getIndex = (req, res, next) => {
  res.status(200).render("index", {
    title: `Worker-Safe | Worker's Safety is our Number One Priority`,
  });
};

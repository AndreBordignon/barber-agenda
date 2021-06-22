const Survey = require('../models/surveys')

module.exports = (app) => {
  app.post("/surveys", (req, res) => {
    const survey = req.body
    Survey.criar(survey, res)
  });

  app.get("/surveys/", (req, res) => {
    Survey.listAll(res)
  });

  app.get("/surveys/:id", (req, res) => {
    const id = parseInt(req.params.id)
    Survey.listById(id, res)
  });

  app.delete("/surveys/:id", (req, res) => {
    const id = parseInt(req.params.id)
    Survey.delete(id, res)
  });
};

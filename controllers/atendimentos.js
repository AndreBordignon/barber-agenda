const Atendimento = require('../models/atendimentos')

module.exports = (app) => {
  app.post("/atendimentos", (req, res) => {
    const atendimento = req.body
    Atendimento.criar(atendimento, res)
  });

  app.get("/atendimentos/", (req, res) => {
    Atendimento.listAll(res)
  });

  app.get("/atendimentos/:id", (req, res) => {
    const id = parseInt(req.params.id)
    Atendimento.listById(id, res)
  });

  app.delete("/atendimentos/:id", (req, res) => {
    const id = parseInt(req.params.id)
    Atendimento.delete(id, res)
  });
};

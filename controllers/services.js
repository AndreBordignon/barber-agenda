const Service = require('../models/services')

module.exports = (app) => {
  app.post("/services", (req, res) => {
    const service = req.body
    Service.criar(service, res)
  });

  app.get("/services/", (req, res) => {
    Service.listAll(res)
  });

  app.get("/services/:id", (req, res) => {
    const id = parseInt(req.params.id)
    Service.listById(id, res)
  });

  app.delete("/services/:id", (req, res) => {
    const id = parseInt(req.params.id)
    Service.delete(id, res)
  });
};
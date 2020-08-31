const router = require("express").Router();

const { Apartment } = require("../../db");

router.get("/", async (req, res) => {
  const apartments = await Apartment.findAll();
  res.json(apartments);
});

router.post("/", async (req, res) => {
  const apartment = await Apartment.create(req.body);
  res.json(apartment);
});
router.put("/:apartmentId", async (req, res) => {
  await Apartment.update(req.body, {
    where: { id: req.params.apartmentId },
  });
  res.json({ sucess: "Se ha modificado" });
});
router.delete("/:apartmentId", async (req, res) => {
  await Apartment.destroy({
    where: { id: req.params.apartmentId },
  });
  res.json({ Sucess: "se ha elminado exitosamente" });
});

module.exports = router;

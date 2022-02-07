import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send({ success: true });
});

router.get("/franchise/:franchise", (req, res) => {
  res.send({});
});

export default router;

import express from "express";
import Waiter from "./model/Waiter";
import Restaurent from "./model/Restaurent";
import WaiterBuilder from "./model/utils/WaiterBuilder";
import Franchise from "./model/Franchise";
import RestaurentBuilder from "./model/utils/RestaurentBuilder";

const router = express.Router();

router.get("/", (req, res) => {
  res.send({ success: true });
});

router.get("/waiters/:id", (req, res) => {
  const waiter: Waiter = new Waiter("John Doe", 30);

  res.send({ success: true, waiter });
});

router.get("/restaurent/:id", (req, res) => {
  const restaurent = new Restaurent(WaiterBuilder.buildMany(3));

  res.send({ success: true, restaurent });
});

router.get("/franchise/:id", (req, res) => {
  const franchise = new Franchise(RestaurentBuilder.buildMany(4));

  res.send({ success: true, franchise });
});

export default router;

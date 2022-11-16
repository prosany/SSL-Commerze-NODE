import * as express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send({ status: 1, message: "Server running" });
});

router.post("/success", (req, res) => {
  res.send({ status: 1, message: "Payment Success", data: req.body });
});

router.post("/fail", (req, res) => {
  res.send({ status: 0, message: "Payment Fail", data: req.body });
});

router.post("/cancel", (req, res) => {
  res.send({ status: 0, message: "Payment Cancel", data: req.body });
});

router.post("/ipn", (req, res) => {
  res.send({ status: 0, message: "IPN", data: req.body });
});

export default router;

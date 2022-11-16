import * as express from "express";
import SSLCommerzPayment from "sslcommerz-lts";
import Configs from "../config";

const router = express.Router();
const { STORE_ID, STORE_PASS } = Configs;
const store_id = STORE_ID;
const store_passwd = STORE_PASS;
const is_live = false;

router.get("/create-order", async (req, res) => {
  try {
    const data = {
      total_amount: 20000,
      currency: "BDT",
      tran_id: "r65t65",
      success_url: "http://localhost:5040/success",
      fail_url: "http://localhost:5040/fail",
      cancel_url: "http://localhost:5040/cancel",
      ipn_url: "http://localhost:5040/ipn",
      shipping_method: "Courier",
      product_name: "Apple Macbook Air M2 16GB/256GB",
      product_category: "Electronic",
      product_profile: "general",
      cus_name: "Customer Name",
      cus_email: "customer@example.com",
      cus_add1: "Dhaka",
      cus_add2: "Dhaka",
      cus_city: "Dhaka",
      cus_state: "Dhaka",
      cus_postcode: "1000",
      cus_country: "Bangladesh",
      cus_phone: "01711111111",
      cus_fax: "01711111111",
      ship_name: "Customer Name",
      ship_add1: "Dhaka",
      ship_add2: "Dhaka",
      ship_city: "Dhaka",
      ship_state: "Dhaka",
      ship_postcode: 1000,
      ship_country: "Bangladesh",
    };
    const sslCom = new SSLCommerzPayment(store_id, store_passwd, is_live);

    sslCom.init(data).then((apiResponse) => {
      console.log("Payment", apiResponse);
      let GatewayPageURL = apiResponse.GatewayPageURL;
      res.send(apiResponse);
      // res.redirect(GatewayPageURL);
    });
  } catch (error) {
    res.send(error);
  }
});

router.get("/validate", (req, res) => {
  const data = {
    val_id: req.query.key,
  };
  const sslCom = new SSLCommerzPayment(store_id, store_passwd, is_live);
  sslCom.validate(data).then((data) => {
    res.send(data);
  });
});

router.get("/valid", (req, res) => {
  const data = {
    tran_id: req.query.key,
  };
  const sslCom = new SSLCommerzPayment(store_id, store_passwd, is_live);
  sslCom.transactionQueryByTransactionId(data).then((data) => {
    res.send(data);
  });
});

export default router;

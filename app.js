import express from "express";
import cors from "cors";
import HomeRoute from "./routes/Home.Routes";
import PaymentRoute from "./routes/Payment.Routes";
import Configs from "./config";

const app = express();
const { PORT } = Configs;

app.use(cors());
app.use(express.json());

// Routes
app.use("/", HomeRoute);
app.use("/pay", PaymentRoute);

app.listen(PORT, () =>
  console.log(`Payment server running on http://localhost:${PORT}`)
);

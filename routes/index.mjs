import { default as express } from "express";
export const router = express.Router();
import Instrument_weights_schema from "../model/instrument_weights.mjs";
import response from "../helpers/reponses.mjs";

router.get("/", async function (_, res) {
  try {
    const weights = await Instrument_weights_schema.find({});
    console.log(weights);
    return response(res, 200, "success", weights);
  } catch (error) {
    return response(res, 500, "server error", err.message);
  }
});

import mongoose from "mongoose";

//{ 'risk_score': 0, 'nigerian_stocks': 18, 'foriegn_stocks': 4,
//'tech_stocks': 2, 'emerging_stocks':7, 'nigerian_bonds':35,
//'foriegn_bonds':15,'commodities':7,'real_estate':12, 'tbills':0,'alternative':0 }

const Instrument_weights_schema = new mongoose.Schema(
  {
    risk_score: {
      type: Number,
    },
    nigerian_stocks: {
      type: Number,
    },
    foriegn_stocks: {
      type: Number,
    },
    tech_stocks: {
      type: Number,
    },
    tech_stocks: {
      type: Number,
    },
    emerging_stocks: {
      type: Number,
    },
    nigerian_bonds: {
      type: Number,
    },
    foriegn_bonds: {
      type: Number,
    },
    commodities: {
      type: Number,
    },
    tbills: {
      type: Number,
    },
    alternative: {
      type: Number,
    },
  }
  //   {
  //     timestamps: true,
  //   }
);

export default mongoose.model("instrument_weights", Instrument_weights_schema);

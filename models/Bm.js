const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bmSchema = new Schema({
  id: String,
  name: String,
  account_id: Number,
  account_status: Number,
  currency: String,
  balance: String,
  amount_spent: Number,
  adtrust_dsl: Number,
  is_prepay_account: Boolean,
  funding_source_details: Object,
  insights: Object,
  adspaymentcycle: Object,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

bmSchema.index({ id: 1 });
module.exports = mongoose.model("Bm", bmSchema);

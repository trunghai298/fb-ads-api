const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AdsSchema = new Schema({
  id: String,
  name: String,
  account_id: Number,
  account_status: Number,
  owner_business: Object,
  created_time: String,
  next_bill_date: String,
  currency: String,
  adtrust_dsl: Number,
  timezone_name: String,
  timezone_offset_hours_utc: Number,
  business_country_code: String,
  disable_reason: Number,
  adspaymentcycle: Object,
  balance: Number,
  is_prepay_account: Boolean,
  owner: Number,
  all_payment_methods: Object,
  total_prepay_balance: Object,
  insights: Object,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
AdsSchema.index({ id: 1 });
module.exports = mongoose.model("Ads", AdsSchema);

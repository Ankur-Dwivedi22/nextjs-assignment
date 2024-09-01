import mongoose from "mongoose";

const contractModel = new mongoose.Schema({
  propertyAddress: String,
  rentAmount: String,
  startDate: String,
  endDate: String,
  tenantEmail: String,

  firstName: String,
  middleName: String,
  lastName: String,
  dob: String,
  jobTitle: String,
  annualIncome: String,
  status: String,
});

export const Contract =
  mongoose.models.contracts || mongoose.model("contracts", contractModel);

const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({

  UserId: { type: String, required: false },

  TenantId: { type: String, required: false },
  UserId: { type: String, required: false },
  OurCode: { type: String, required: false },
  Limit: { type: Number, required: false },

  //First Step
  Name: { type: String, required: false },
  LastName: { type: String, required: false },
  Document: { type: String, required: false },
  DocumentType: { type: String, required: false },
  Cellphone: { type: String, required: false },
  Birthdate: { type: String, required: false },
  Gender: { type: String, required: false },

  //Second Step
  AddressName: { type: String, required: false },
  PostalCode: { type: String, required: false },
  Address: { type: String, required: false },
  Number: { type: String, required: false },
  Complement: { type: String, required: false },
  Neighborhood: { type: String, required: false },
  City: { type: String, required: false },
  State: { type: String, required: false },
  ReferencePoint: { type: String, required: false },

  //Third Step
  SymptomsDescription: { type: String, required: false },
  AccessForm: { type: String, required: false },
  Crm: { type: String, required: false },
  DoctorName: { type: String, required: false },
  DoctorEmail: { type: String, required: false },
  DoctorCellphone: { type: String, required: false },

  //fifth Step
  FirstPreference: { type: String, required: false },
  SecondPreference: { type: String, required: false },
  ThirdPreference: { type: String, required: false },

  //sixth Step
  CheckRememberSchedule: { type: Boolean, required: false },
  CheckShareDoctor: { type: Boolean, required: false },
  CheckShareMedicine: { type: Boolean, required: false },
  CheckGetNews: { type: Boolean, required: false },

  //seventh Step
  ScheduleKit: { type: String, required: false },
  PeriodScheduleKit: { type: String, required: false },
  ScheduleNurse: { type: String, required: false },
  PeriodScheduleNurse: { type: String, required: false },

});

module.exports = mongoose.model("Customer", customerSchema);

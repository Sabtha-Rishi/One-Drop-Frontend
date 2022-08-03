import { useState } from "react";

const requestsData = [
  {
    id: 0,
    bloodGroup: "A Positive",
    attenderName: "Gabriel",
    patientName: "Vinith Raju",
    hospital: "Appolo Hospital",
    totalUnits: 6,
    hoursRemaining: 16,
    isAllBloodAccepted: true,
    attenderPhone: "+919871562461",
    patientAge: 29,
    location: "Rajanna street, Meenambakkam, Chennai-600061",
    isPickup: true,
    isDrop: true,
    isVerified: false,
    reason: "Blood Transfusion",
    docs: {
      type: "Blood Bank Request",
      doc: "",
    },
    reqUnits: 3,
  },

  {
    id: 1,
    bloodGroup: "B Negative",
    attenderName: "Rithish",
    patientName: "Harsha",
    hospital: "Jeevan Hospital",
    totalUnits: 2,
    hoursRemaining: 56,
    isAllBloodAccepted: true,
    attenderPhone: "+918273526731",
    patientAge: 32,
    location: "Rajanna street, Meenambakkam, Chennai-600061",
    isPickup: true,
    isDrop: true,
    isVerified: true,
    reason: "Heart Transplant",
    docs: {
      type: "Hospital Letter",
      doc: "",
    },
    reqUnits: 1,
  },
];

const singleReq = {
  id: 0,
  bloodGroup: "A Positive",
  attenderName: "Gabriel",
  patientName: "Vinith Raju",
  hospital: "Appolo Hospital",
  totalUnits: 3,
  hoursRemaining: 16,
  isAllBloodAccepted: true,
  attenderPhone: "+919871562461",
  patientAge: 29,
  location: "Rajanna street, Meenambakkam, Chennai-600061",
  isPickup: true,
  isDrop: true,
  isVerified: true,
  reason: "Surgery",
  docs: {
    type: "Doctor Letter",
    doc: "",
  },
  reqUnits: 2,
};

const singleDonor = {
  id: 0,
  bloodGroup: "A Positive",
  name: "Gabriel",
  profilePicture: "",
  bio: "You have got to trust the process😄 Uniting for a better world 🩸",
  phone: "+919871562461",
  email: "gabriel23@gmail.com",
  age: 29,
  location: "No-10, First floor, Hariram street, Anna Salai, Chennai-600028",
  symptoms: [],
  isDonatable: true,
  isAvailable: true,
  gender: "Male",
  isCall: true,
  isWhatsapp: true,
  isEmail: true,
  instagram: "https://instagram.com/artsbyrishi",
  isInstagram: true,
  isVerified: true,
  totalDonation: 2,
  donors: [],
};

const screeningData = [
  { id: 1, ques: "Were you hospitalized in the last 30 days?", ans: "" },
  { id: 2, ques: "Do you have a tatoo?", ans: "" },
  { id: 3, ques: "Do you have any skin allergies?", ans: "" },
  { id: 4, ques: "Do you have an habit of alcohol?", ans: "" },
  { id: 5, ques: "Do you have an habit of smoking?", ans: "" },
  {
    id: 6,
    ques: "Have you been diagonised with sexually transmitted diseases?",
    ans: "",
  },
];

const RegisterFields = [
  {
    id: 0,
    ques: "Hi there, can I have your name?",
    type: "text",
    label: "Name",
    name: "name",
    dynamicData: "",
    isOption: false,
  },

  {
    id: 1,

    ques: "Awesome *****, what is your email?",
    type: "email",
    label: "Email",
    name: "email",
    dynamicData: "name",
    isOption: false,
  },
  {
    id: 2,

    ques: "Your data are stored as safe as possible. Create  strong password for your account",
    type: "password",
    label: "Password",
    name: "password",
    dynamicData: "name",
    isOption: false,
  },
  {
    id: 3,

    ques: "Cool, can you share your primary phone number? (can be hidden later)",
    type: "text",
    label: "Phone",
    name: "phone",
    dynamicData: "name",
    isOption: false,
  },
  {
    id: 4,

    ques: "Kindly pick your blood group *****",
    type: "text",
    label: "Blood Group",
    name: "bloodGrp",
    dynamicData: "name",
    isOption: true,
    options: [
      '',
      "A Positive",
      "B Positive",
      "B Negative",
      "A Negative",
      "AB Positive",
      "AB Negative",
      "O Positive",
      "O Negative",
    ],
  },
  {
    id: 5,

    ques: "Kindly pick your gender",
    type: "text",
    label: "Gender",
    name: "gender",
    dynamicData: "name",
    isOption: true,
    options: ['',"Male", "Female", "Transgender"],
  },

  {
    id: 6,

    ques: "What is your age? ",
    type: "text",
    label: "Age",
    name: "age",
    dynamicData: "name",
    isOption: false,
  },

  {
    id: 7,

    ques: "You can share a profile picture if you prefer",
    type: "file",
    label: "Profile Picture",
    dynamicData: "",
    name: "file",
    isOption: false,
  },
];

const data = {
  requestsData,
  singleReq,
  singleDonor,
  screeningData,
  RegisterFields,
};
export default data;

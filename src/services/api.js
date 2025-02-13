import axios from "axios";

const BASE_URL = "https://paymatebackend.onrender.com/api";
const END_POINTS = {
  GET_USER: "/users/user",
  LOGIN: "/users/login",
  SIGNUP: "/users/signup",
  UPDATE: "/users/updateUser",
  RESET_PASSWORD: "/users/resetPassword",
  UPLOAD_IMAGE: "/uploads/upload",
  CREATE_GROUP: "/groups/createGroup",
  JOIN_GROUP: "/groups/joinGroup/",
  GET_GROUPS: "/groups/getGroups",
  CLOSE_GROUP: "/groups/closeGroup/",
  GET_EXPENSES: "/expenses/getExpenses",
  CREATE_EXPENSE: "/expenses/createExpense",
  GET_SETTLEMENTS: "/settlements/getSettlements",
  CREATE_SETTLEMENT: "/settlements/createSettlement",
  UPDATE_SETTLEMENT_STATUS: "/settlements/updateStatus",
};

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export { api, END_POINTS };

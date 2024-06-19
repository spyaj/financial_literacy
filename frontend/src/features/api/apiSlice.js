import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const BASE_URL = `http://localhost:8001`;

// const baseQuery = fetchBaseQuery({
//   baseUrl: BASE_URL,
// });

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "" }),
  tagTypes: ["Expense", "User"],
  endpoints: (builder) => ({}),
});

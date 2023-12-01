import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const sendMail = createApi({
  reducerPath: "sendMail",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://frudbaz-backend.vercel.app",
  }),
  endpoints: (builder) => ({}),
});

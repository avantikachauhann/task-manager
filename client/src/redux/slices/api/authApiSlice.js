import { apiSlice } from "../apiSlice";

const AUTH_URL = "/user";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${AUTH_URL}/login`, 
        method: "POST",
        body: data,
        credentials: "include", // Optional: Include credentials (cookies, etc.) if required
      }),
    }),

    register: builder.mutation({
        query: (data) => ({
          url: `${AUTH_URL}/register`, // Use backticks instead of double quotes
          method: "POST",
          body: data,
          credentials: "include", // Optional: Include credentials (cookies, etc.) if required
        }),
      }),

      logout: builder.mutation({
        query: (data) => ({
          url: `${AUTH_URL}/logout`, // Use backticks instead of double quotes
          method: "POST",
          body: data,
          credentials: "include", // Optional: Include credentials (cookies, etc.) if required
        }),
      }),

  }),
});

export const { useLoginMutation, useRegisterMutation, useLogoutMutation } = authApiSlice;

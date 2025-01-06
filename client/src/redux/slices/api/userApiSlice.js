import { apiSlice } from "../apiSlice";

const USER_URL = "/user";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    updateUser : builder.mutation({
      query: (data) => ({
        url: `${USER_URL}/profile`, 
        method: "PUT",
        body: data,
        credentials: "include", // Optional: Include credentials (cookies, etc.) if required
      }),
    }),

    getTeamList: builder.query({
        query: () => ({
          url: `${USER_URL}/get-team`, // Use backticks instead of double quotes
          method: "GET",
          credentials: "include", // Optional: Include credentials (cookies, etc.) if required
        }),
      }),

  }),
});

export const { useUpdateUserMutation , useGetTeamListQuery } = userApiSlice;
import { apiSlice } from "../apiSlice";

const USER_URL = "/user";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    updateUser: builder.mutation({
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

    deleteUser: builder.mutation({
      query: (id) => ({
        url: `${USER_URL}/${id}`, // Use backticks instead of double quotes
        method: "DELETE",
        credentials: "include", // Optional: Include credentials (cookies, etc.) if required
      }),
    }),

    UserAction: builder.mutation({
      query: (data) => ({
        url: `${USER_URL}/${data.id}`, // Use backticks instead of double quotes
        method: "PUT",
        body: data,
        credentials: "include", // Optional: Include credentials (cookies, etc.) if required
      }),
    }),

    getNotifications: builder.query({
      query: (data) => ({
        url: `${USER_URL}/notifications`,
        method: "PUT",
        credentials: "include", // Optional: Include credentials (cookies, etc.) if required
      }),
    }),

    markNotiAsRead: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/read-noti?isReadType=${data.type}&id=${data?.id}`,
        method: "PUT",
        body: data,
        credentials: "include",
      }),
    }),

    changePassword: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/change-password`,
        method: "PUT",
        body: data,
        credentials: "include",
      }),
    }),
  }),
});

export const {
  useUpdateUserMutation,
  useGetTeamListQuery,
  useDeleteUserMutation,
  useUserActionMutation,
  useGetNotificationsQuery,
  useMarkNotiAsReadMutation,
  useChangePasswordMutation,
} = userApiSlice;

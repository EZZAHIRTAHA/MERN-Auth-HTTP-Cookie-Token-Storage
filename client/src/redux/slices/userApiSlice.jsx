import { apiSlice } from "./apiSlice";
const USERS_URL = "/api/auth"


export const apiUsersSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/auth`,
                method: 'POST',
                body: data
            })
        })
    })
})


export const { useLoginMutation } = apiUsersSlice;
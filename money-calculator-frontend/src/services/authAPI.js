// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const userAuthApi = createApi({
  reducerPath: 'userAuthApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/' }),
  endpoints: (builder) => ({
    logUser: builder.mutation({
      query: (user) => {
        return {
        url: 'auth/login/',
        method: 'POST',
        body: user,
        headers: {
            'content-type': 'application/json'
        }
    }
      },
    }),
    registerUser: builder.mutation({
      query: (user) => {
        return {
          url: 'auth/register/',
          method: 'POST',
          body: user,
          headers: {
            'content-type': 'application/json'
          }

        }
      }
    }),
    getTitleApi: builder.query({
      query: (access_token) => {
        return {
          url: 'user/title/',
          method: 'GET',
          headers: {
            'content-type': 'application/json',
            'authorization': `Bearer ${access_token}`,
          }
        }
      }
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useLogUserMutation,useRegisterUserMutation,useGetTitleApiQuery } = userAuthApi
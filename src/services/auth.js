import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react";


export const authApi=createApi({
reducerPath:"authApi",
baseQuery:fetchBaseQuery({
    baseUrl:"http://localhost:5000"
}),
endpoints:(builder)=>({
    signinUser: builder.mutation({
        query: (body) => {
          return {
            url: "/user/login",
            method: "post",
            body,
          };
        },
      }),
      signupUser: builder.mutation({
        query: (body) => {
          return {
            url: "/user/register",
            method: "post",
            body,
          };
        },
      }),
}),

});
export const { useSigninUserMutation,useSignupUserMutation}=authApi;
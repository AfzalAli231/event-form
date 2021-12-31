import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react";


export const usersApi=createApi({
reducerPath:"usersApi",
baseQuery:fetchBaseQuery({
    baseUrl:"http://localhost:5000/"
}),
refetchOnFocus: true,
tagTypes:["User"],
endpoints:(builder)=>({
    getusers:builder.query({
        query:()=>"user/users/all",
        providesTags:["User"],
    }),
    getusersbyid:builder.query({
      query:(id)=>"user/users/"+id,
      providesTags:["User"],
  }),
 
    statusUser: builder.mutation({
        query: ({id,...body}) => ({
            url:`user/update/${id}`,
            method: "PUT",
            body,
        }),
         invalidatesTags:["User"],
      }),
      updateUser: builder.mutation({
        query: ({id,...body}) => ({
            url:`user/updateuser/${id}`,
            method: "PUT",
            body,
        }),
         invalidatesTags:["User"],
      }),
      addUser: builder.mutation({
        query(body) {
          return {
            url: `user/`,
            method: 'POST',
            body,
          }
        },
        invalidatesTags:["User"],
      }),
      
     
}),


});
export const {useGetusersQuery,useGetusersbyidQuery,useStatusUserMutation,useAddUserMutation,useUpdateUserMutation}=usersApi;
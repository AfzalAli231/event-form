import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react";


export const extraApi=createApi({
reducerPath:"extraApi",
baseQuery:fetchBaseQuery({
    baseUrl:"http://localhost:5000/"
}),
refetchOnFocus: true,
tagTypes:["Extra"],
endpoints:(builder)=>({
    getextra:builder.query({
        query:()=>"extra/all",
        providesTags:["Extra"],
    }),
    getextrabyid:builder.query({
      query:(id)=>"extra/"+id,
      providesTags:["Extra"],
  }),
    statusExtra: builder.mutation({
        query: ({id,...body}) => ({
            url:`extra/update/${id}`,
            method: "PUT",
            body,
        }),
         invalidatesTags:["Extra"],
      }),
      addExtra: builder.mutation({
        query(body) {
          return {
            url: `extra/`,
            method: 'POST',
            body,
          }
        },
        invalidatesTags:["Extra"],
      }),
     
}),


});
export const {useGetextraQuery,useGetextrabyidQuery,useStatusExtraMutation,useAddExtraMutation}=extraApi;
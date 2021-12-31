import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react";


export const vendorsApi=createApi({
reducerPath:"vendorsApi",
baseQuery:fetchBaseQuery({
    baseUrl:"http://localhost:5000/"
}),
refetchOnFocus: true,
tagTypes:["Vendors"],
endpoints:(builder)=>({
    getvendors:builder.query({
        query:()=>"user/vendors/all",
        providesTags:["Vendors"],
    }),
    getvendorsbyid:builder.query({
      query:(id)=>"user/vendors/"+id,
      providesTags:["Vendors"],
  }),
 
    statusVendor: builder.mutation({
        query: ({id,...body}) => ({
            url:`user/update/${id}`,
            method: "PUT",
            body,
        }),
         invalidatesTags:["Vendors"],
      }),
      updateVendor: builder.mutation({
        query: ({id,...body}) => ({
            url:`user/updateuser/${id}`,
            method: "PUT",
            body,
        }),
         invalidatesTags:["Vendors"],
      }),
      addVendor: builder.mutation({
        query(body) {
          return {
            url: `user/`,
            method: 'POST',
            body,
          }
        },
        invalidatesTags:["Vendors"],
      }),
      
     
}),


});
export const {useGetvendorsQuery,useGetvendorsbyidQuery,useStatusVendorMutation,useAddVendorMutation,useUpdateVendorMutation}=vendorsApi;
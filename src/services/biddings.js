import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react";


export const biddingsApi=createApi({
reducerPath:"biddingsApi",
baseQuery:fetchBaseQuery({
    baseUrl:"http://localhost:5000/"
}),
refetchOnFocus: true,
tagTypes:["Biddings"],
endpoints:(builder)=>({
    getbiddings:builder.query({
        query:()=>"bidding/all/child/",
        providesTags:["Biddings"],
    }),
   
     
}),


});
export const {useGetbiddingsQuery}=biddingsApi;
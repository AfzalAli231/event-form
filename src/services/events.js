import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react";


export const eventsApi=createApi({
reducerPath:"eventsApi",
baseQuery:fetchBaseQuery({
    baseUrl:"http://localhost:5000/"
}),
refetchOnFocus: true,
tagTypes:["Events"],
endpoints:(builder)=>({
    getevents:builder.query({
        query:()=>"event-profile/",
        providesTags:["Events"],
    }),
    addEvent: builder.mutation({
        query(body) {
          return {
            url: `event-profile/`,
            method: 'POST',
            body,
          }
        },
        invalidatesTags:["Events"],
      }),
     
}),


});
export const {useGeteventsQuery, useAddEventMutation}=eventsApi;
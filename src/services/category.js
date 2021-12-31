import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const categoryApi = createApi({
  reducerPath: "categoryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/",
  }),
  refetchOnFocus: true,
  tagTypes: ["Food"],
  endpoints: (builder) => ({
    getCategory: builder.query({
      query: ({type}) => `category/cattype/child/${type}`,
      providesTags: ["Food"],
    }),
  }),
});
export const { useGetCategoryQuery } = categoryApi;
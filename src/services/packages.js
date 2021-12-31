import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react";


export const packagesApi = createApi({
  reducerPath: "packagesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/",
  }),
  refetchOnFocus: true,
  tagTypes: ["Package"],
  endpoints: (builder) => ({
    getpackage: builder.query({
      query: () => "package/all",
      providesTags: ["Package"],
    }),
    getpackagebyservicetype: builder.query({
      query: ({ type }) => `package/all/${type}`,
      providesTags: ["Package"],
    }),
    getpackagebyserviceandevent: builder.query({
      query: ({ type, id }) => `package/all/${type}/${id}`,
      providesTags: ["Package"],
    }),
    statusPackage: builder.mutation({
      query: ({ id, ...body }) => ({
        url: `package/update/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Extra"],
    }),
  }),
});
export const {
  useGetpackageQuery,
  useGetpackagebyservicetypeQuery,
  useGetpackagebyserviceandeventQuery,
  useStatusPackageMutation,
} = packagesApi;
import { api } from "../api/apiSlice";

const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (category) => `/products?limit=10&page=1&category=${category}`,
    }),
    singleProduct: builder.query({
      query: (id) => `/products/${id}`,
    }),
    getAllProducts: builder.query({
      query: ({
        category = "",
        price ,
        page = 1,
      }: {
        category?: string;
        price?: number;
        page?: number;
      }) =>
        `/products?limit=8&page=${page}&category=${category ?? null}&price=${price?? null}`,
    }),
  }),
});

export const { useGetProductsQuery, useSingleProductQuery,useGetAllProductsQuery } = productApi;

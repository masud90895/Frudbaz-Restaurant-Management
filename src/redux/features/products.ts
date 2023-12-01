import { api } from "../api/apiSlice";

const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (category) =>
        `/products?limit=10&page=1&category=${category}`,
    }),
    singleProduct: builder.query({
      query: (id) => `/products/${id}`,
    }),
  }),
});

export const { useGetProductsQuery, useSingleProductQuery } = productApi;

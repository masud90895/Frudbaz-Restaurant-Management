import { api } from "../api/apiSlice";

const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({
        page,
        title,
        category,
        price,
      }: {
        page: number;
        title: string;
        category: string;
        price: string;
      }) =>
        `/products?limit=10&page=${page}&title=${title}&category=${category}&price=${price}`,
    }),
    singleProduct: builder.query({
      query: (id) => `/products/${id}`,
    }),
  }),
});

export const { useGetProductsQuery, useSingleProductQuery } = productApi;

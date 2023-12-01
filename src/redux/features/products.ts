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
        category,
        price,
        page = 1,
      }: {
        category?: string;
        price?: number;
        page?: number;
      }) => {
        let url = `/products?limit=8&page=${page}`;
        if (category) {
          url += `&category=${category}`;
        }
        if (price) {
          url += `&price=${price}`;
        }
        return url;
      },
    }),

    // searchProductByTitle
    searchProductByTitle: builder.query({
      query: (title) => `/products?title=${title}`,
    })


  }),
});

export const {
  useGetProductsQuery,
  useSingleProductQuery,
  useGetAllProductsQuery,
  useSearchProductByTitleQuery
} = productApi;

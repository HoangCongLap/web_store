import { Filters, PaginationContainer, ProductsContainer } from "../Components";
import { customFetch } from "../Utils";
const url = "/products";
export const loader = async ({ Request }) => {
  const response = await customFetch(url);
  const products = response.data.data;
  const meta = response.data.meta;
  return { products, meta };
};
const Products = () => {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  );
};

export default Products;

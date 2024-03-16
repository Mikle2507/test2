import {z} from "zod";

const ProductSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  price: z.number(),
  discountPercentage: z.number(),
  rating: z.number(),
  stock: z.number(),
  brand: z.string(),
  category: z.string(),
  thumbnail: z.string(),
  images: z.array(z.string())
});

export type ProductProp = z.infer<typeof ProductSchema>

const ProductPropList = z.array(ProductSchema);
export type ProductPropList = z.infer<typeof ProductPropList>

export const FetchProductListSchema = z.object({
  products: ProductPropList
});
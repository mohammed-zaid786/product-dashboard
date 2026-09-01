// deep Readonly Helper
export type DeepReadonly<T>={ readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K];}
// union to intersection Helper
export type UnionToIntersection<U> = (U extends unknown ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never;

// check/test
//Test 1: check deepReadonly
type ProductData = {title: string; details: {price: number}; };
export const myProduct: DeepReadonly<ProductData> = {title: "Laptop", details: {price: 5000}  };
// myProduct.details.price = 6000; // Error: Cannot assign to 'price' because it is a read-only property.

// Test 2: check union to intersection
type PartA = { name: string };
type PartB = { age: number };
export type Merged = UnionToIntersection<PartA | PartB>;// Merged is equivalent to { name: string } & { age: number }AA
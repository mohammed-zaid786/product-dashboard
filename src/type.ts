export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  status?: Status;
}

export type Status = "active" | "inactive";

export type ProductWithStock = Product & {
  stock: number;
};
export function getStatusMessage(status: Status | undefined): string {
  if (status === "active") {
    return "Product is active";
  }

  if (status === "inactive") {
    return "Product is inactive";
  }

  return "Status is not available";
}
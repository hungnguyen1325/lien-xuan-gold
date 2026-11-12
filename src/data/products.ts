import { business } from "./business";

export const GRAMS_PER_CHI = 3.75;

// Preserve existing QR codes, including LX6 for the 10-chỉ product.
const productVariants = [
  { code: "LX0.5", weight: "0.5" },
  { code: "LX0.3", weight: "0.3" },
  { code: "LX1", weight: "1" },
  { code: "LX2", weight: "2" },
  { code: "LX3", weight: "3" },
  { code: "LX5", weight: "5" },
  { code: "LX6", weight: "10" },
] as const;

type ProductCode = (typeof productVariants)[number]["code"];

type Product = {
  code: ProductCode;
  name: string;
  totalWeight: string;
  goldWeight: string;
  stoneWeight: string;
  goldContent: string;
  supplierID: number;
};

const suppliers = [
  {
    id: 1,
    name: business.name,
    address: "Thôn Quyết Tâm, Xã Cẩm Khê, Tỉnh Phú Thọ",
    standard: "TCCS 01:2024/LX",
    symbol: "VANG LIEN XUAN 9999",
  },
] as const;

export const products: Product[] = productVariants.map(({ code, weight }) => ({
  code,
  name: `Nhẫn ép vỉ LX ${weight} chỉ`,
  totalWeight: weight,
  goldWeight: weight,
  stoneWeight: "0",
  goldContent: "24K · 999.9",
  supplierID: 1,
}));

export function findProductByCode(code: string) {
  return products.find((product) => product.code === code.trim().toUpperCase());
}

export function findSupplierById(id: number) {
  const supplier = suppliers.find((supplier) => supplier.id === id);
  if (!supplier) throw new Error(`Supplier not found: ${id}`);
  return supplier;
}

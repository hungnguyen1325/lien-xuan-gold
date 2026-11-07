export const business = {
  name: "DOANH NGHIỆP TƯ NHÂN VÀNG BẠC LIÊN XUÂN",
  taxCode: "2600890372",
  address: "Thôn Quyết Tâm, Xã Cẩm Khê, Tỉnh Phú Thọ, Việt Nam",
} as const;

export const suppliers = [
    { id: 1, name: "DOANH NGHIỆP TƯ NHÂN VÀNG BẠC LIÊN XUÂN", address: "Thôn Quyết Tâm, Xã Cẩm Khê, Tỉnh Phú Thọ", standard: "TCCS 01:2024/LX", symbol: "VANG LIEN XUAN 9999"}
] as const;

export const products = [
  { id: 1, code: "LX0.5", name: "Nhẫn ép vỉ LX 0.5 chỉ", totalWeight: "0.5", goldWeight: "0.5", stoneWeight: "0", supplierID: 1 },
  { id: 2, code: "LX0.3", name: "Nhẫn ép vỉ LX 0.3 chỉ", totalWeight: "0.3", goldWeight: "0.3", stoneWeight: "0", supplierID: 1 },
  { id: 3, code: "LX1", name: "Nhẫn ép vỉ LX 1 chỉ", totalWeight: "1", goldWeight: "1", stoneWeight: "0", supplierID: 1 },
  { id: 4, code: "LX2", name: "Nhẫn ép vỉ LX 2 chỉ", totalWeight: "2", goldWeight: "2", stoneWeight: "0", supplierID: 1 },
  { id: 5, code: "LX3", name: "Nhẫn ép vỉ LX 3 chỉ", totalWeight: "3", goldWeight: "3", stoneWeight: "0", supplierID: 1 },
  { id: 6, code: "LX5", name: "Nhẫn ép vỉ LX 5 chỉ", totalWeight: "5", goldWeight: "5", stoneWeight: "0", supplierID: 1 },
  { id: 7, code: "LX6", name: "Nhẫn ép vỉ LX 10 chỉ", totalWeight: "10", goldWeight: "10", stoneWeight: "0", supplierID: 1 },
] as const;

export function findSupplierId(id: number) {
    const supplier = suppliers.find((supplier) => supplier.id === id)

    if (!supplier) {
        throw new Error(`Supplier not found ${id}`)
    }

    return supplier
}

export function findProductByCode(code: string) {
    const product = products.find((product) => product.code === code)

    if (!product) {
        throw new Error(`Product not found ${code}`)
    }

    return product
}
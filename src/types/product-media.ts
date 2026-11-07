// Each viewBox isolates one face of the supplied artwork without redrawing
// its lettering or QR code. Coordinates refer to the original 728 × 797 image.
export type PackagingArtwork = {
  front: string;
  back: string;
  fineness: string;
};

export const packagingByCode: Partial<Record<string, PackagingArtwork>> = {
  "LX0.5": { front: "95 4 132 217", back: "231 3 132 218", fineness: "24K · 999.9" },
  LX1: { front: "417 5 132 218", back: "577 2 132 220", fineness: "24K · 999.9" },
  LX2: { front: "404 272 132 218", back: "558 272 132 218", fineness: "24K · 999.9" },
  LX3: { front: "105 273 131 218", back: "251 273 132 218", fineness: "24K · 999.9" },
  LX5: { front: "382 530 160 265", back: "563 527 159 266", fineness: "24K · 999.9" },
  // The existing product code LX6 represents the 10-chỉ product.
  LX6: { front: "0 526 160 267", back: "176 526 160 267", fineness: "24K · 999.9" },
};

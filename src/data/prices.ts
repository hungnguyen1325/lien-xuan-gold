type PriceItem = {
  id: string;
  name: string;
  specs?: string;
  unit: string;
  buyPrice: string;
  sellPrice: string;
};

type PriceBoardMeta = {
  mode: "realtime" | "custom";
  customTime: string;
  customDate: string;
};

export const priceBoardMeta: PriceBoardMeta = {
  mode: "realtime",
  customTime: "08:30",
  customDate: "12/11/2026",
};

export const goldPrices: PriceItem[] = [];

export const business = {
  websiteUrl: "https://lx.futurix.vn",
  name: "DOANH NGHIỆP TƯ NHÂN VÀNG BẠC LIÊN XUÂN",
  brandName: "VÀNG BẠC ĐÁ QUÝ LIÊN XUÂN",
  slogan: "Giữ uy tín hơn giữ vàng",
  taxCode: "2600890372",
  address: "Thôn Quyết Tâm, Xã Cẩm Khê, Tỉnh Phú Thọ, Việt Nam",
  facebookUrl: "https://www.facebook.com/MG.Vangbaclienxuan9999/",
  openHours: "07:30 – 21:00 (Hằng ngày)",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=V%C3%A0ng+B%E1%BA%A1c+Li%C3%AAn+Xu%C3%A2n+Th%C3%B4n+Quy%E1%BA%BFt+T%C3%A2m+C%E1%BA%A9m+Kh%C3%AA+Ph%C3%BA+Th%E1%BB%8D",
} as const;

type StoreBranch = {
  id: string;
  name: string;
  shortName: string;
  address: string;
  phones: [
    { display: string; raw: string },
    ...{ display: string; raw: string }[],
  ];
  zalo: string;
  mapsUrl: string;
};

export const branches: StoreBranch[] = [
  {
    id: "cam-khe",
    name: "Cơ sở Thị trấn Cẩm Khê",
    shortName: "TT Cẩm Khê",
    address: "Thị trấn Cẩm Khê, Huyện Cẩm Khê, Tỉnh Phú Thọ",
    phones: [
      { display: "0393.538.947", raw: "0393538947" },
      { display: "0385.343.884", raw: "0385343884" },
    ],
    zalo: "0393538947",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=V%C3%A0ng+B%E1%BA%A1c+Li%C3%AAn+Xu%C3%A2n+Th%E1%BB%8B+tr%E1%BA%A5n+C%E1%BA%A9m+Kh%C3%AA+Ph%C3%BA+Th%E1%BB%8D",
  },
  {
    id: "yen-lap",
    name: "Cơ sở Thị trấn Yên Lập",
    shortName: "TT Yên Lập",
    address: "Thị trấn Yên Lập, Huyện Yên Lập, Tỉnh Phú Thọ",
    phones: [{ display: "0356.985.169", raw: "0356985169" }],
    zalo: "0356985169",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=V%C3%A0ng+B%E1%BA%A1c+Li%C3%AAn+Xu%C3%A2n+Th%E1%BB%8B+tr%E1%BA%A5n+Y%C3%AAn+L%E1%BA%ADp+Ph%C3%BA+Th%E1%BB%8D",
  },
];

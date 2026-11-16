export const business = {
  websiteUrl: "https://lx.futurix.vn",
  name: "DOANH NGHIỆP TƯ NHÂN VÀNG BẠC LIÊN XUÂN",
  brandName: "VÀNG BẠC ĐÁ QUÝ LIÊN XUÂN",
  slogan: "Giữ uy tín hơn giữ vàng",
  taxCode: "2600890372",
  address: "Số nhà 169-171, Thôn Quyết Tâm, Xã Cẩm Khê, Tỉnh Phú Thọ, Việt Nam",
  phone: "0982.333.666",
  phoneRaw: "0982333666",
  zalo: "0384409674",
  zaloDisplay: "038.440.9674",
  facebookUrl: "https://www.facebook.com/MG.Vangbaclienxuan9999/",
  openHours: "07:30 – 21:00 (Hằng ngày)",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=V%C3%A0ng+B%E1%BA%A1c+Li%C3%AAn+Xu%C3%A2n+169-171+Th%C3%B4n+Quy%E1%BA%BFt+T%C3%A2m+C%E1%BA%A9m+Kh%C3%AA+Ph%C3%BA+Th%E1%BB%8D",
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
  zaloDisplay: string;
  mapsUrl: string;
};

export const branches: StoreBranch[] = [
  {
    id: "quyet-tam",
    name: "Cơ sở 1: Thôn Quyết Tâm",
    shortName: "Cơ sở 1 (Quyết Tâm)",
    address: "Số nhà 169-171, Thôn Quyết Tâm, Xã Cẩm Khê, Tỉnh Phú Thọ",
    phones: [{ display: "0982.333.666", raw: "0982333666" }],
    zalo: "0384409674",
    zaloDisplay: "038.440.9674",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=V%C3%A0ng+B%E1%BA%A1c+Li%C3%AAn+Xu%C3%A2n+169-171+Th%C3%B4n+Quy%E1%BA%BFt+T%C3%A2m+C%E1%BA%A9m+Kh%C3%AA+Ph%C3%BA+Th%E1%BB%8D",
  },
  {
    id: "song-thao",
    name: "Cơ sở 2: Thôn Sông Thao",
    shortName: "Cơ sở 2 (Sông Thao)",
    address: "Số 155, Thôn Sông Thao, Xã Cẩm Khê, Tỉnh Phú Thọ",
    phones: [{ display: "0968.555.222", raw: "0968555222" }],
    zalo: "0384409674",
    zaloDisplay: "038.440.9674",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=V%C3%A0ng+B%E1%BA%A1c+Li%C3%AAn+Xu%C3%A2n+155+Th%C3%B4n+S%C3%B4ng+Thao+C%E1%BA%A9m+Kh%C3%AA+Ph%C3%BA+Th%E1%BB%8D",
  },
];

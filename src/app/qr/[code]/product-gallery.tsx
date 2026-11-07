"use client";

import Image from "next/image";
import { useState } from "react";
import type { PackagingArtwork } from "@/types/product-media";

type GallerySlide = {
  label: string;
  caption: string;
  src?: string;
  viewBox?: string;
};

const root = "/products/lien-xuan";

export default function ProductGallery({ code, packaging }: { code: string; packaging?: PackagingArtwork }) {
  const [selected, setSelected] = useState(0);
  const slides: GallerySlide[] = [
    { label: "Ảnh nhẫn", caption: "Ảnh mẫu nhẫn · Đã xử lý từ ảnh gốc", src: `${root}/ring-studio-v1.png` },
    ...(packaging ? [
      { label: "Mặt trước", caption: `Mặt trước vỉ · ${code}`, viewBox: packaging.front },
      { label: "Mặt sau", caption: `Mặt sau vỉ · ${code}`, viewBox: packaging.back },
    ] : []),
  ];
  const active = slides[selected];

  return (
    <div className="qr-gallery">
      <div className={`qr-galleryStage ${active.viewBox ? "qr-packagingStage" : ""}`}>
        <GalleryImage slide={active} eager={selected === 0} />
      </div>

      <div className="qr-thumbnails" role="group" aria-label="Chọn ảnh sản phẩm">
        {slides.map((slide, index) => (
          <button
            key={slide.label}
            type="button"
            className="qr-thumbnail"
            aria-label={slide.label}
            aria-pressed={index === selected}
            onClick={() => setSelected(index)}
          >
            <span>{slide.label}</span>
          </button>
        ))}
      </div>

      <p className="qr-imageCaption" aria-live="polite">{active.caption}</p>
    </div>
  );
}

function GalleryImage({ slide, eager = false }: { slide: GallerySlide; eager?: boolean }) {
  if (slide.viewBox) {
    return (
      <svg className="qr-packagingImage" viewBox={slide.viewBox} role="img" aria-label={slide.caption}>
        <image href={`${root}/packaging-original.png`} width="728" height="797" />
      </svg>
    );
  }
  return (
    <Image
      src={slide.src!}
      alt={slide.caption}
      fill
      sizes="(max-width: 760px) 90vw, 560px"
      loading={eager ? "eager" : "lazy"}
      className="qr-productImage"
    />
  );
}

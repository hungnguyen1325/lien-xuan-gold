"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

type GallerySlide = {
  id: string;
  label: string;
  src: string;
};

const slides: GallerySlide[] = [
  {
    id: "angle",
    label: "Góc nghiêng",
    src: "/products/lien-xuan/ring-mockup-1.png",
  },
  {
    id: "perspective",
    label: "Góc xiên",
    src: "/products/lien-xuan/ring-mockup-2.png",
  },
  {
    id: "top",
    label: "Góc thẳng",
    src: "/products/lien-xuan/ring-mockup-3.png",
  },
];

export default function ProductGallery({
  productName,
}: {
  productName: string;
}) {
  const [selected, setSelected] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  function goToSlide(index: number) {
    const slider = sliderRef.current;
    if (!slider) return;
    slider.scrollLeft = index * slider.clientWidth;
  }

  function handleScroll() {
    const slider = sliderRef.current;
    if (!slider?.clientWidth) return;
    const index = Math.round(slider.scrollLeft / slider.clientWidth);
    setSelected(Math.max(0, Math.min(index, slides.length - 1)));
  }

  useEffect(() => {
    const handleResize = () => {
      if (sliderRef.current) {
        sliderRef.current.scrollLeft = selected * sliderRef.current.clientWidth;
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [selected]);

  return (
    <div
      className="product-gallery grid w-full grid-cols-[minmax(0,1fr)_minmax(0,4fr)] items-start gap-3 select-none"
      aria-label="Ảnh sản phẩm"
    >
      <div
        className="flex min-w-0 flex-col gap-2"
        role="group"
        aria-label="Danh sách ảnh sản phẩm"
      >
        {slides.map((slide, idx) => {
          const isActive = idx === selected;
          return (
            <button
              key={slide.id}
              type="button"
              aria-pressed={isActive}
              aria-label={slide.label}
              title={slide.label}
              onClick={() => goToSlide(idx)}
              className="w-full cursor-pointer touch-manipulation rounded-lg text-center transition-transform active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <div
                className={`overflow-hidden rounded-lg border-2 ${isActive ? "border-accent" : "border-transparent"}`}
              >
                <div className="gallery-frame overflow-hidden rounded-md bg-product-photo">
                  <GalleryImage
                    slide={slide}
                    productName={productName}
                    thumbnail
                  />
                </div>
              </div>
            </button>
          );
        })}
      </div>
      <div className="min-w-0">
        <div className="gallery-frame w-full overflow-hidden rounded-xl bg-product-photo">
          <div
            ref={sliderRef}
            onScroll={handleScroll}
            className="absolute inset-0 flex overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {slides.map((slide, idx) => (
              <div
                key={slide.id}
                className="relative h-full w-full min-w-full shrink-0 snap-start snap-always"
              >
                <GalleryImage
                  slide={slide}
                  productName={productName}
                  eager={idx === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function GalleryImage({
  slide,
  productName,
  thumbnail = false,
  eager = false,
}: {
  slide: GallerySlide;
  productName: string;
  thumbnail?: boolean;
  eager?: boolean;
}) {
  const [status, setStatus] = useState<"loading" | "ready" | "error">(
    "loading",
  );
  return (
    <>
      {status === "loading" && (
        <div className="loading-shimmer absolute inset-0" aria-hidden="true" />
      )}
      <Image
        src={slide.src}
        alt={thumbnail ? "" : `${productName} - ${slide.label}`}
        fill
        sizes={
          thumbnail
            ? "(min-width: 1024px) 80px, (min-width: 640px) 76px, (max-width: 447px) calc(20vw - 11.2px), 79px"
            : "(min-width: 1024px) 335px, (min-width: 640px) 317px, (max-width: 447px) calc(80vw - 28.8px), 330px"
        }
        loading={thumbnail || eager ? "eager" : "lazy"}
        onLoad={() => setStatus("ready")}
        onError={() => setStatus("error")}
        draggable={false}
        className={`pointer-events-none select-none object-contain ${status === "ready" ? "gallery-image-ready" : ""}`}
      />
      {status === "error" && (
        <span className="absolute inset-0 flex items-center justify-center p-2 text-center text-xs text-accent-foreground">
          Không tải được ảnh
        </span>
      )}
    </>
  );
}

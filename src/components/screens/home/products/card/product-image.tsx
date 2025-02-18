"use client";

import { useState, useCallback } from "react";
import { FilledHeartIcon } from "../../../../../assets/icons";
import { IProduct } from "../../../../../types/product";

interface ProductImageProps {
  product: IProduct;
  loved: boolean;
  onDoubleTap: () => void;
}

/**
 * ProductImage component displays the product image with double-tap functionality.
 */
export function ProductImage(props: ProductImageProps) {
  const { product, loved, onDoubleTap } = props;
  const [tap, setTap] = useState(0);

  const handleTap = useCallback(() => {
    if (tap === 0) {
      setTap(1);
      setTimeout(() => setTap(0), 500);
    }
    if (tap === 1) {
      onDoubleTap();
    }
  }, [tap, onDoubleTap]);

  return (
    <div
      className="cursor-pointer relative w-full h-[140px] flex items-center justify-center overflow-hidden"
      onClick={handleTap}
    >
      {loved && (
        <div className="absolute">
          <FilledHeartIcon className="h-24 w-24" />
        </div>
      )}
      <img
        src={product.image || "/placeholder.svg"}
        alt={product.title}
        className="w-full h-full object-contain"
      />
    </div>
  );
}

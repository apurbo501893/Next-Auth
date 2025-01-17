import React from "react";
import { ProductType } from "../../type";
import Image from "next/image";
import { MdFavoriteBorder, MdStar } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import { LuEye } from "react-icons/lu";
import Button from "./ui/Button";
import AddToCartButton from "./AddToCartButton";

interface Props {
  product: ProductType;
}

const SideBar = () => {
  return (
    <div className="absolute right-2 bottom-12 border flex flex-col text-2xl border-borderColor bg-white rounded-md overflow-hidden transform translate-x-20 group-hover:translate-x-0 duration-300">
      <button className="p-2 hover:bg-skyColor duration-300 hover:text-white">
        <FiShoppingCart />
      </button>
      <button className="p-2 hover:bg-skyColor duration-300 hover:text-white border-y border-y-borderColor">
        <LuEye />
      </button>
      <button className="p-2 hover:bg-skyColor duration-300 hover:text-white">
        <MdFavoriteBorder />
      </button>
    </div>
  );
};

const ProductCard = ({ product }: Props) => {
  return (
    <div className="border border-borderColor hover:shadow-lg hover:shadow-black/30 duration-300 rounded-md group overflow-hidden">
      <div className=" relative">
        <Image
          src={product?.images[0]}
          alt="product-image"
          width={500}
          height={500}
          className="w-full h-64 object-contain hover:scale-110 duration-300"
        />
        <p className="absolute top-2 right-2 bg-orange-600 text-white py-1 px-2 text-xs rounded-lg flex items-center">
          {product?.rating}
          <MdStar />
        </p>
        <SideBar />
      </div>
      <div className="border-t border-t-borderColor py-2 px-4 flex flex-col justify-between h-40">
        <div className="flex flex-col ">
          <p className="text-sm text-lightText capitalize font-medium">
            {product?.category}
          </p>

          <h2 className="font-semibold text-base line-clamp-2">
            {product?.title}
          </h2>
          <p className="font-semibold text-skyColor">${product?.price}</p>
        </div>
        <AddToCartButton />
      </div>
    </div>
  );
};

export default ProductCard;

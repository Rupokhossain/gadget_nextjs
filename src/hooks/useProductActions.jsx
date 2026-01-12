"use client";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/redux/cartSlice";
import { toggleWishlist } from "@/redux/wishlistSlice";
import toast from "react-hot-toast";

export const useProductActions = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const wishlistItems = useSelector((state) => state.wishlist.items);

  //   add to cart
  const handleAddToCart = (product) => {
    const isAlreadyInCart = cartItems.some((item) => item.id === product.id);

    if (isAlreadyInCart) {
      toast.error(`"${product.title.slice(0, 20)} ..." is already in cart!`, {
        icon: "⚠️",
        style: { borderRadius: "10px", background: "#fff9c4", color: "#333" },
      });
    } else {
      dispatch(addToCart(product));
      toast.success(`${product.title} added to cart! 🛒`);
    }
  };

  // add to wishlist
  const handleWishlistAction = (product) => {
    const isAlreadyInWishlist = wishlistItems.some(
      (item) => item.id === product.id
    );

    if (isAlreadyInWishlist) {
      dispatch(toggleWishlist(product));
      toast.error(`"${product.title}" removed from wishlist! 💔`);
    } else {
      dispatch(toggleWishlist(product));
      toast.success(`${product.title} added to wishlist! ❤️`);
    }
  };

  return { handleAddToCart, handleWishlistAction };
};

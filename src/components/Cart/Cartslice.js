import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const cartstate = {
  cart: [],
  cartTotalQuantity: 0,
  furn: [],
};
export const cartslice = createSlice({
  name: "cart",
  initialState: cartstate,
  reducers: {
    addToCart(state, action) {
      const existingIndex = state.cart.findIndex(
        (item) => item._id === action.payload._id
      );
      if (existingIndex >= 0) {
        state.cart[existingIndex] = {
          ...state.cart[existingIndex],
          cartQuantity: state.cart[existingIndex].cartQuantity + 1,
          totalQuantity:
            state.cart[existingIndex].productPrice *
            (state.cart[existingIndex].cartQuantity + 1),
        };
        toast.info("Increased product quantity", {
          position: "bottom-left",
        });
      } else {
        let tempProductItem = { ...action.payload, cartQuantity: 1 };
        state.cart.push(tempProductItem);
        toast.success("Product added to cart", {
          position: "bottom-left",
        });
      }
    },
    decreaseCart(state, action) {
      const itemIndex = state.cart.findIndex(
        (item) => item._id === action.payload._id
      );
      if (state.cart[itemIndex].cartQuantity > 1) {
        state.cart[itemIndex].cartQuantity -= 1;
        state.cart[itemIndex].totalQuantity -=
          1 * state.cart[itemIndex].productPrice;
        toast.info("Decreased product quantity", {
          position: "bottom-left",
        });
      } else if (state.cart[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.cart.filter(
          (item) => item._id !== action.payload._id
        );

        state.cart = nextCartItems;

        toast.error("Product removed from cart", {
          position: "bottom-left",
        });
      }
    },
    getTotals(state, action) {
      let { total, quantity } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
    clearCart(state, action) {
      state.cart = [];
      toast.error("Cart cleared", { position: "bottom-left" });
    },
    removeFromCart(state, action) {
      state.cart.map((cartItem) => {
        if (cartItem._id === action.payload._id) {
          const nextCartItems = state.cart.filter(
            (item) => item._id !== cartItem._id
          );

          state.cart = nextCartItems;

          toast.error("Product removed from cart", {
            position: "bottom-left",
          });
        }
      });
    },
  },
});
export const { addToCart, decreaseCart, removeFromCart, getTotals, clearCart } =
  cartslice.actions;
export default cartslice.reducer;

import React, { createContext } from "react";
import { useReducer } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LikeCard from "./components/card/Likecard";
import { Product } from "./components/data/Product";
import { FAVOURITE_PRODUCTS } from "./const/const";
import Card from "./pages/Card";
import HomeP from "./pages/HomeP";
import Like from "./pages/Like";

export const ProductContext = createContext();

const initialState = {
  likedProducts: JSON.parse(localStorage.getItem(FAVOURITE_PRODUCTS)) || [],
  cartProducts: [],
};
function reducer(state, action) {
  switch (action.type) {
    case "add":
      let findProduct = state.likedProducts.find((el) => el.id === action.id);
      let likedProducts = [];

      if (findProduct) {
        likedProducts = state.likedProducts.filter((el) => el.id !== action.id);
      } else {
        likedProducts = [
          ...state.likedProducts,
          Product.find((el) => el.id === action.id),
        ];
      }
      localStorage.setItem(FAVOURITE_PRODUCTS, JSON.stringify(likedProducts));
      return {
        ...state,
        likedProducts,
      };

    case "delete":
      localStorage.setItem(FAVOURITE_PRODUCTS, JSON.stringify(LikeCard));
      return {
        ...state,
        likedProducts: state.likedProducts.filter((el) => el.id !== action.id),
      };

    default:
      return state;
  }
}

function addCard(state, action) {
  switch (action.type) {
    case "addCart":
      return;

    case "deletCart":
      return;

    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeP />} />
          <Route path="/like" element={<Like />} />
          <Route path="/card" element={<Card />} />
        </Routes>
      </BrowserRouter>
    </ProductContext.Provider>
  );
}

export default App;

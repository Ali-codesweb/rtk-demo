import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cakeSlice } from "./cakeSlice";

function CakeView() {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>No. of cakes - {numOfCakes} </h2>
      <button
        onClick={() => {
          console.log('ordered cake')
          dispatch(cakeSlice.actions.ordered());
        }}
      >
        Order cakes -{" "}
      </button>
      <button
        onClick={() => {
          dispatch(cakeSlice.actions.restocked(10));
        }}
      >
        Restock cakes -{" "}
      </button>
    </div>
  );
}

export default CakeView;

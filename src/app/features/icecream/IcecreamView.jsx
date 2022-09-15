import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { icecreamSlice } from "./icecreamSlice";

function IcecreamView() {

  const [value,setValue] = useState(10)

  const numOfIcecreams = useSelector((state) => state.icecream.icecream);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>No. of Icecream - {numOfIcecreams}</h2>
      <button
        onClick={() => {
          dispatch(icecreamSlice.actions.ordered());
        }}
      >
        Order Icecream -{" "}
      </button>
      <input type="text" value={value} onChange={(e)=>setValue(e.target.value)} />
      <button
        onClick={() => {
          dispatch(icecreamSlice.actions.restocked(value));
        }}
      >
        Restock Icecream -{" "}
      </button>
    </div>
  );
}

export default IcecreamView;

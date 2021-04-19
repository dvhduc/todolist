import React from "react";
import Search from "./Search";
import Sort from "./Sort";

function Control(props) {
  return (
    <div className="row mt-5">
      <Search onSearch={props.onSearch} />
      <Sort />
    </div>
  );
}
export default Control;

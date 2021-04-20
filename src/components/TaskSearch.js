import React, { useState } from "react";

function TaskSearch(props) {
  const [keyword, setkeyword] = useState("");

  function onChange(event) {
    var target = event.target;

    var value = target.value;
    setkeyword(value);
  }

  function onSearch() {
    props.onSearch(keyword);
    // console.log(keyword);
  }

  return (
    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
      <div className="input-group">
        <input
          name="keyword"
          type="text"
          className="form-control"
          placeholder="Nhập từ khóa..."
          value={keyword}
          onChange={onChange}
        />
        <span className="input-group-btn">
          <button type="button" className="btn btn-primary" onClick={onSearch}>
            <i className="fas fa-search"></i>
            <span className="ml-1">Tìm</span>
          </button>
        </span>
      </div>
    </div>
  );
}
export default TaskSearch;

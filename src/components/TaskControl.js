import React from "react";
import TaskSearch from "./TaskSearch";
import TaskSort from "./TaskSort";

function TaskControl(props) {
  return (
    <div className="row mt-5">
      <TaskSearch onSearch={props.onSearch} />
      <TaskSort
        onSort={props.onSort}
        sortBy={props.sortBy}
        sortValue={props.sortValue}
      />
    </div>
  );
}
export default TaskControl;

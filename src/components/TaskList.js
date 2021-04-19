import React, { useState } from "react";
import TaskItems from "./TaskItems";

function TaskList(props) {
  const { tasks } = props;
  const [filter, setfilter] = useState({
    filterName: "",
    filterStatus: -1, //all: -1, active:1, deactive:0
  });

  var renderTaskItems = tasks.map((task, index) => {
    return (
      <TaskItems
        key={index}
        id={index + 1}
        items={task}
        onUpdateStatus={props.onUpdateStatus}
        onDelete={props.onDelete}
        onUpdate={props.onUpdate}
      />
    );
  });

  function onChange(event) {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    props.onFilter(
      name === "filterName" ? value : filter.filterName,
      name === "filterStatus" ? value : filter.filterStatus
    );
    setfilter({
      ...filter,
      [name]: value,
    });
  }

  return (
    <table className="table table-bordered table-hover mt-5">
      <thead>
        <tr>
          <th className="text-center">STT</th>
          <th className="text-center">Tên</th>
          <th className="text-center">Trạng Thái</th>
          <th className="text-center">Hoạt động</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td>
            <input
              type="text"
              className="form-control"
              name="filterName"
              value={filter.filterName}
              onChange={onChange}
            ></input>
          </td>
          <td>
            <select
              className="form-control"
              name="filterStatus"
              value={filter.filterStatus}
              onChange={onChange}
            >
              <option value={-1}>Tất cả</option>
              <option value={0}>Ẩn</option>
              <option value={1}>Kích hoạt</option>
            </select>
          </td>
          <td></td>
        </tr>
        {renderTaskItems}
      </tbody>
    </table>
  );
}
export default TaskList;

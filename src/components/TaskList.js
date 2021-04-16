import React from 'react';
import TaskItems from './TaskItems';

function TaskList(props) {

    const {tasks} = props;
    var renderTaskItems = tasks.map((task,index) => {
        return <TaskItems key={index} id={index+1} items={task}/>
    });

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
                        ></input>
                    </td>
                    <td>
                        <select
                            className="form-control"
                            name="filterStatus"
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

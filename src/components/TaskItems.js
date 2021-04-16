import React from 'react';


function TaskItems(props) {
    const {items,id} = props;

    function checkStatus(check){
        if(check === true)
            return <span className="label label-danger">Kích hoạt</span>
        else 
            return <span className="label label-success">Ẩn</span>
    }
    return (
        <tr>
            <td>{id}</td>
            <td className="text-left">{items.name}</td>
            <td className="text-center">
                {checkStatus(items.status)}
            </td>
            <td className="text-center">
                <button type="button" className="btn btn-warning"><i className="fas fa-pen-square mr-2"></i>Sửa</button>{' '}
                <button type="button" className="btn btn-danger"><i className="fas fa-trash mr-2"></i>Xóa</button>
            </td>
        </tr>
    );
}
export default TaskItems;

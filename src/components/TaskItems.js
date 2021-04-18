import React from 'react';


function TaskItems(props) {
    const {items,id} = props; 
    function onUpdateStatus(){
        props.onUpdateStatus(props.items.id);
    }   
    function onDelete(){
        props.onDelete(props.items.id);
    }

    function onUpdate(){
        props.onUpdate(props.items.id);
    }

    return (
        <tr>
            <td>{id}</td>
            <td className="text-left">{items.name}</td>
            <td className="text-center">
                <span className={items.status === true ? 'label label-success' : 'label label-danger'}
                    onClick={onUpdateStatus}
                >
                    {items.status === true ? 'Kích hoạt' : 'Ẩn'}
                </span>
            </td>
            <td className="text-center">
                <button type="button" className="btn btn-warning"
                onClick={onUpdate}
                ><i className="fas fa-pen-square mr-2"></i>Sửa</button>{' '}
                <button type="button" className="btn btn-danger"
                onClick={onDelete}
                ><i className="fas fa-trash mr-2"></i>Xóa</button>
            </td>
        </tr>
    );
}
export default TaskItems;

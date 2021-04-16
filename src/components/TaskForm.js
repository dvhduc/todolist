import React from 'react';


function TaskForm(props) {

    function onCloseForm(){
        props.onClose();
    }
    return (
        <div className="panel panel-warning">
            <div className="panel-heading" >
                <h3 className="panel-title">Thêm công việc<span className="fas fa-times-circle pull-right" 
                 onClick={onCloseForm}
                 ></span>
                </h3>
            </div>
            <div className="panel-body">
                <form>
                    <div>
                        <div className="form-group">
                            <label>Tên</label>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                            />
                        </div>
                        <div className="form-group">
                            <label>Trạng thái</label>
                            <select name="status" className="form-control" >
                                <option value={true}>Kích hoạt</option>
                                <option value={false}>Ẩn</option>
                            </select>
                            <br />
                            <div className="text-center">
                                <button type="submit" className="btn btn-warning"><span className="fa fa-plus mr-1"></span> Lưu lại</button>{' '}
                                <button type="button" className="btn btn-danger"><i className="fas fa-times mr-1"></i> Hủy bỏ</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default TaskForm;

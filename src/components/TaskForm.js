import React, { useEffect, useState } from 'react';


function TaskForm(props) {
    const { task } = props;
    const [formData, setformData] = useState({
        id: '',
        name: '',
        status: false
    })

    useEffect(() => {
        if (task) {
            setformData({
                id: task.id,
                name: task.name,
                status: task.status
            })
        } else if (!task) {
            setformData({
                id: '',
                name: '',
                status: false
            });
        }
    }, [task])

    function onCloseForm() {
        props.onClose();
    }

    function onChange(event) {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        if (name === 'status') {
            value = target.value === 'true' ? true : false;
        }
        setformData({
            ...formData,
            [name]: value
        })
    }

    function onSubmit(event) {
        event.preventDefault();
        props.onSubmit(formData);
        onClear();
        onCloseForm();
    }

    function onClear() {
        setformData({
            ...formData,
            name: '',
            status: false
        })
    }

    return (
        <div className="panel panel-warning">
            <div className="panel-heading" >
                <h3 className="panel-title">
                    {formData.id !== '' ? 'Cập nhật công việc' : 'Thêm công việc'}
                    <span className="fas fa-times-circle pull-right"
                        onClick={onCloseForm}
                    ></span>
                </h3>
            </div>
            <div className="panel-body">
                <form onSubmit={onSubmit}>
                    <div>
                        <div className="form-group">
                            <label>Tên</label>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                value={formData.name}
                                onChange={onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Trạng thái</label>
                            <select name="status" className="form-control"
                                value={formData.status}
                                onChange={onChange}
                            >
                                <option value={true}>Kích hoạt</option>
                                <option value={false}>Ẩn</option>
                            </select>
                            <br />
                            <div className="text-center">
                                <button type="submit" className="btn btn-warning"><span className="fa fa-plus mr-1"></span> Lưu lại</button>{' '}
                                <button type="button" className="btn btn-danger" onClick={onClear}><i className="fas fa-times mr-1"></i> Hủy bỏ</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default TaskForm;

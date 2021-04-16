import React from 'react';

function Control() {
    return (

        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div className="input-group">
                <input
                    name="keyword"
                    type="text"
                    className="form-control"
                    placeholder="Nhập từ khóa..."
                />
                <span className="input-group-btn">
                    <button type="button" className="btn btn-primary"><i className="fas fa-search"></i><span className="ml-1">Tìm</span></button>
                </span>
            </div>
        </div>


    );
}
export default Control;

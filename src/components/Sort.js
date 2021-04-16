import React from 'react';

function Control() {
    return (

        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div className="dropdown">
                <button type="button" className="btn btn-primary dropdown-toggle"
                    id="dropdownMenu1" data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="true"><i className="fas fa-caret-circle-down mr-2"></i>Sắp xếp</button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                    <li className="sort_selected">
                        <a href="/#" role="button"><i className="fas fa-sort-alpha-down pr-5"></i> Tên A-Z</a>
                    </li>
                    <li>
                        <a href="/#" role="button"><i className="fas fa-sort-alpha-down-alt pr-5"></i> Tên Z-A</a>
                    </li>
                    <li role="separator" className="divider"></li>
                    <li>
                        <a href="/#" role="button">Trạng Thái Kích Hoạt</a>
                    </li>
                    <li>
                        <a href="/#" role="button">Trạng Thái Ẩn</a>
                    </li>
                </ul>
            </div>
        </div>


    );
}
export default Control;

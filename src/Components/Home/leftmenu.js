import React from "react";
import '../../css/leftmenu.css';

const Leftmenu = () => {
    return(
        <div className="leftmenu_container">
            <h3 className="filter_leftmenu">Filter</h3>
            <h5 className="filter_head">Brands</h5>
                <ul>
                    <li>Rolex</li>
                    <li>Police</li>
                    <li>Rado</li>
                </ul>
            <h5 className="filter_head">Strap Type</h5>
                <ul>
                    <li>Rubber</li>
                    <li>Metal</li>
                </ul>

            <h5 className="filter_head">Suitable For</h5>
            <ul>
                <li>Men</li>
                <li>Women</li>
                <li>Kids</li>
            </ul>
        </div>
    );
};

export default Leftmenu;
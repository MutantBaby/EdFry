import React from "react";
import "./Tabs.css"
import $ from "jquery"
const Tabs = () => {
    $('.tab-link').click( function() {
	
        var tabID = $(this).attr('data-tab');
        
        $(this).addClass('active').siblings().removeClass('active');
        
        $('#tab-'+tabID).addClass('active').siblings().removeClass('active');
      })
  return (
    <div className="wrapper">
      <div className="tab-wrapper">
        <ul className="tabs">
          <li className="tab-link active" data-tab="1">
            HTML
          </li>
          <li className="tab-link" data-tab="2">
            CSS
          </li>
          <li className="tab-link" data-tab="3">
            jQuery
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Tabs;

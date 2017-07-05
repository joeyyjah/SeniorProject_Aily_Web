import React, { Component } from 'react';


import './Menu.css';
import Notifications from './Notifications';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';






class Menu extends Component {
  render() {

    return (

      <div id="wrapper" >
        <div id="sidebar-wrapper">
          <ul className="sidebar-nav">
            <li className="sidebar-brand">
              <a href="#">
                <img src="/aily1.png" style={{ height: '80px', width: '200px' }} />
              </a>
            </li>
            <li>
              <a href="#">หน้าหลัก</a>
            </li>
            <li>
              <a href="#">รายการแจ้งเตือน</a>
            </li>
            <li>
              <a href="#">รายการขอความช่วยเหลือ</a>
            </li>
            <li>
              <a href="#">ข้อมูลส่วนตัว</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>


        <div id="page-content-wrapper" >
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-12">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h1 className="text-center">รายการแจ้งเตือน</h1>
                  </div>
                  <Notifications />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    );
  }

}

export default Menu;

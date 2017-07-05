import React, { Component } from 'react';
import { Table, Icon } from 'antd';


class Notifications extends Component {
  render() {
    const columns = [{
  title: 'ลำดับ',
  dataIndex: 'name',
  width: 100,
}, {
  title: 'ชื่อ-นามสกุล',
  dataIndex: 'age',
  width: 200,
}, {
  title: 'เวลา',
  dataIndex: 'times',
  width: 200,
},{

  title: 'วัน เดือน ปี',
  dataIndex: 'address',
  
}];

const data = [];
for (let i = 1; i < 100; i++) {
  data.push({
    key: i,
    name: `${i}`,
    age: 'พรรณาภา ชูวา',
    address: `London, Park Lane no. ${i}`,
    times:'02.40',
  });
}

    return (
      // <div className="panel panel-default">
      //   <div className="panel-heading">
      //     <h1 className="text-center">รายการแจ้งเตือน</h1>
      //   </div>
      //   <table className="table table-bordered table-hover">
      //     <thead>
      //       <tr>
      //         <th>ลำดับ</th>
      //         <th>ชื่อ-นามสกุล</th>
      //         <th>เวลา</th>
      //         <th>วัน เดือน ปี</th>
      //         <th>สถานะ</th>

      //       </tr>
      //     </thead>
      //     <tbody id="myTable">
      //       <tr>
      //         <td>1</td>
      //         <td>พรรณาภา ชูวา</td>
      //         <td>02.00</td>
      //         <td>15 มิถุนายน 2560</td>
      //         <td>รอเจ้าหน้าที่...</td>
      //       </tr>
      //       <tr>
      //         <td>2</td>
      //         <td>สมชาย ทองดี</td>
      //         <td>02.00</td>
      //         <td>15 มิถุนายน 2560</td>
      //         <td>รอเจ้าหน้าที่...</td>
      //       </tr>
      //       <tr>
      //         <td>3</td>
      //         <td>วิไลวรรณ ตั้งใจ</td>
      //         <td>02.00</td>
      //         <td>15 มิถุนายน 2560</td>
      //         <td>รอเจ้าหน้าที่...</td>
      //       </tr>
      //       <tr>
      //         <td>4</td>
      //         <td>ศิรินภา สมศักดิ์ศรี</td>
      //         <td>02.00</td>
      //         <td>15 มิถุนายน 2560</td>
      //         <td>รอเจ้าหน้าที่...</td>
              
      //       </tr>

      //     </tbody>
      //   </table>

      //   <div className="panel-footer">
      //     <div className="row">
      //       <div className="col col-xs-4">Page 1 of 5</div>
      //       <div className="col col-xs-8">
      //         <ul className="pagination hidden-xs pull-right">
      //           <li><a href="#">1</a></li>
      //           <li><a href="#">2</a></li>
      //           <li><a href="#">3</a></li>
      //           <li><a href="#">4</a></li>
      //           <li><a href="#">5</a></li>
      //         </ul>
      //         <ul className="pagination visible-xs pull-right">
      //           <li><a href="#">«</a></li>
      //           <li><a href="#">»</a></li>
      //         </ul>
      //       </div>
      //     </div>
      //   </div>

      // </div>
      
      <Table columns={columns} dataSource={data} pagination={{ pageSize: 30}} scroll={{ y: 370 }} />
    );
  }
}

export default Notifications;

import React from "react";
import ReactDOM from 'react-dom';
import './LeftMenu.css'

import { Link } from 'react-router-dom';
import "antd/dist/antd.css";
import { Menu } from "antd";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined
} from "@ant-design/icons";

const { SubMenu } = Menu;

const rootSubmenuKeys = ['billing', 'client', 'report'];



const LeftMenu= () => {

  const [openKeys, setOpenKeys] = React.useState(['billing']);

  const onOpenChange = (keys: string[]) => {
    const latestOpenKey = keys.find((key: string) => openKeys.indexOf(key) === -1);
    if(latestOpenKey){
      if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        setOpenKeys(keys);
      } else {
        setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
      }
    }
    console.log(keys)
    console.log(typeof(latestOpenKey));
  };

  // const onOpenChange = keys => {
  //   const latestOpenmenu = keys.find(key => opensubmenu.indexOf(key) === -1);
  //   if (rootSubmenuKeys.indexOf(latestOpenmenu) === -1) {
  //     setOpensubmenu(keys);
  //   } else {
  //     setOpensubmenu(latestOpenmenu ? [latestOpenmenu] : []);
  //   }
  // };

  return(
    
    <div className="leftSidebar">
    <Menu mode="inline" openKeys={openKeys} onOpenChange={onOpenChange}>
      <Menu.Item key="billing" icon={<SettingOutlined />}>Billing        
      <Link to="/billing" />
      </Menu.Item>
      <SubMenu key="people" icon={<SettingOutlined />} title="People">
        <Menu.Item key="client">client
        <Link to="/client" />
        </Menu.Item>
      </SubMenu>
      <Menu.Item key="report" icon={<SettingOutlined />}>Report        
      <Link to="/report" />
      </Menu.Item>
    </Menu>
    Hey
    </div>

  );
}
    // <ul>
    //     <li>
    //     <Link to="/">Home</Link>
    //   </li>
    //   <li>
    //     <Link to="/billing">Billing</Link>
    //   </li>
  
    //   <li>
    //     <Link to="/people">People</Link>
    //   </li>
  
    //   <li>
    //     <Link to="/report">Report</Link>
    //   </li>
    // </ul>

  
  export default LeftMenu;

  // onOpenChange={onOpenChange}
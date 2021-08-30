import React from "react";
import { Link } from "umi";
import { Menu, Button } from "antd";
import { Layout } from "@/components";
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from "@ant-design/icons";
const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;
const index = (props: any) => {
  return (
    <Layout style={{ background: "#030b21" }}>
      <Header>Header</Header>
      <Layout>
        <Sider>
          <Menu
            defaultSelectedKeys={["/about"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
            theme="dark"
          >
            <Menu.Item key="/about" icon={<PieChartOutlined />}>
              <Link to="/about">about</Link>
            </Menu.Item>
            <Menu.Item key="/market" icon={<DesktopOutlined />}>
              <Link to="/market">market</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<ContainerOutlined />}>
              Option 3
            </Menu.Item>
            <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
              <Menu.Item key="5">Option 5</Menu.Item>
              <Menu.Item key="6">Option 6</Menu.Item>
              <Menu.Item key="7">Option 7</Menu.Item>
              <Menu.Item key="8">Option 8</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              icon={<AppstoreOutlined />}
              title="Navigation Two"
            >
              <Menu.Item key="9">Option 9</Menu.Item>
              <Menu.Item key="10">Option 10</Menu.Item>
              <SubMenu key="sub3" title="Submenu">
                <Menu.Item key="11">Option 11</Menu.Item>
                <Menu.Item key="12">Option 12</Menu.Item>
              </SubMenu>
            </SubMenu>
          </Menu>
        </Sider>
        <Content>{props.children}</Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  );
};

export default index;

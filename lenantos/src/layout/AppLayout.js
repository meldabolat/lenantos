import React from "react";
import { Layout, Menu } from "antd";
import {
  DashboardOutlined,
  AppstoreOutlined,
  CloudServerOutlined,
  DatabaseOutlined,
  LockOutlined,
  MonitorOutlined,
  BarsOutlined,
} from "@ant-design/icons";
import { Link, Outlet } from "react-router-dom";
import "./Layout.scss";

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

const AppLayout = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible>
        <div className="logo">My Dashboard</div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          {/* Server */}
          <SubMenu key="server" icon={<CloudServerOutlined />} title="Server">
            <SubMenu key="windows" title="Windows">
            <Menu.Item key="windows-sever">Server Management</Menu.Item>
              <Menu.Item key="windows-user">User Management</Menu.Item>
              <Menu.Item key="windows-service">Service Management</Menu.Item>
            
              <Menu.Item key="windows-group">Group Management</Menu.Item>
              <Menu.Item key="windows-resource">Resource Management</Menu.Item>
              <Menu.Item key="windows-disk">Disk Management</Menu.Item>
            </SubMenu>
            <SubMenu key="linux" title="Linux">
            <Menu.Item key="windows-sever">Server Management</Menu.Item>

              <Menu.Item key="linux-user">User Management</Menu.Item>
              <Menu.Item key="linux-service">Service Management</Menu.Item>
             
              <Menu.Item key="linux-group">Group Management</Menu.Item>
              <Menu.Item key="linux-resource">Resource Management</Menu.Item>
              <Menu.Item key="linux-disk">Disk Management</Menu.Item>
            </SubMenu>
          </SubMenu>

          {/* Virtualization */}
          <SubMenu key="virtualization" icon={<DatabaseOutlined />} title="Virtualization">
            <SubMenu key="hyperv" title="HyperV">
              <Menu.Item key="hyperv-storage">Storage Management</Menu.Item>
              <Menu.Item key="hyperv-resource">Resource Management</Menu.Item>
            </SubMenu>
            <SubMenu key="vmware" title="VMware">
              <Menu.Item key="vmware-storage">Storage Management</Menu.Item>
              <Menu.Item key="vmware-resource">Resource Management</Menu.Item>
            </SubMenu>
          </SubMenu>

          {/* Network */}
          <SubMenu key="network" icon={<AppstoreOutlined />} title="Network">
            <Menu.Item key="network-lan">LAN Setting</Menu.Item>
            <Menu.Item key="network-wan">WAN Setting</Menu.Item>
            <Menu.Item key="network-dns">DNS Setting</Menu.Item>
            <Menu.Item key="network-dhcp">DHCP Setting</Menu.Item>
            <Menu.Item key="network-broadcast">Broadcast Setting</Menu.Item>
            <Menu.Item key="network-protocol">Network Protocol Setting</Menu.Item>
          </SubMenu>

          {/* Security */}
          <SubMenu key="security" icon={<LockOutlined />} title="Security">
            <Menu.Item key="security-firewall">Firewall Setting</Menu.Item>
            <Menu.Item key="security-access">Access Control</Menu.Item>
            <Menu.Item key="security-authentication">Authentication Setting</Menu.Item>
          </SubMenu>

          {/* Load Balancer */}
          <SubMenu key="loadBalancer" icon={<BarsOutlined />} title="Load Balancer">
            <Menu.Item key="lb-server">Server Setting</Menu.Item>
            <Menu.Item key="lb-node">Node Setting</Menu.Item>
            <Menu.Item key="lb-member">Member Setting</Menu.Item>
            <SubMenu key="lb-policy" title="Policy">
              <Menu.Item key="lb-wan-policy">WAN Policy</Menu.Item>
              <Menu.Item key="lb-dns-policy">DNS Policy</Menu.Item>
              <Menu.Item key="lb-other-policy">Other Policy</Menu.Item>
            </SubMenu>
          </SubMenu>

          {/* Monitoring */}
          <Menu.Item key="monitoring" icon={<MonitorOutlined />}>
            Monitoring
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-header">
          <h2>Welcome to My Application</h2>
        </Header>
        <Content className="site-layout-content">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;

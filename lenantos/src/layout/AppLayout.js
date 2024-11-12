import React from "react";
import { Layout, Menu, Input } from "antd";
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
const { Search } = Input;

const AppLayout = () => {
  const onSearch = (value) => {
    console.log('search:', value);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible>
        <div className="logo">Lenantos</div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          {/* Server */}
          <SubMenu key="server" icon={<CloudServerOutlined />} title="Server">
            <SubMenu key="windows" title="Windows">
              <Menu.Item key="windows-server">
                <Link to="/windows/server-management">Server Management</Link>
              </Menu.Item>
              <Menu.Item key="windows-user">
                <Link to="/windows/user-management">User Management</Link>
              </Menu.Item>
              <Menu.Item key="windows-service">
                <Link to="/windows/service-management">Service Management</Link>
              </Menu.Item>
              <Menu.Item key="windows-group">
                <Link to="/windows/group-management">Group Management</Link>
              </Menu.Item>
              <Menu.Item key="windows-storage">
                <Link to="/windows/storage-management">Storage Management</Link>
              </Menu.Item>
              <Menu.Item key="windows-package">
                <Link to="/windows/package-management">Package Management</Link>
              </Menu.Item>
              <Menu.Item key="windows-network">
                <Link to="/windows/network-management">Network Management</Link>
              </Menu.Item>
              <Menu.Item key="maintenance-repair">
                <Link to="/windows/maintenance-repair">Maintenance-Repair</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="linux" title="Linux">
              <Menu.Item key="linux-server">
                <Link to="/linux/server-management">Server Management</Link>
              </Menu.Item>
              <Menu.Item key="linux-user">
                <Link to="/linux/user-management">User Management</Link>
              </Menu.Item>
              <Menu.Item key="linux-service">
                <Link to="/linux/service-management">Service Management</Link>
              </Menu.Item>
              <Menu.Item key="linux-group">
                <Link to="/linux/group-management">Group Management</Link>
              </Menu.Item>
              <Menu.Item key="linux-storage">
                <Link to="/linux/storage-management">Storage Management</Link>
              </Menu.Item>
              <Menu.Item key="linux-package">
                <Link to="/linux/package-management">Package Management</Link>
              </Menu.Item>
              <Menu.Item key="linux-network">
                <Link to="/linux/network-management">Network Management</Link>
              </Menu.Item>
              <Menu.Item key="linux-repair">
                <Link to="/linux/maintenance-repair">Maintenance-Repair</Link>
              </Menu.Item>
            </SubMenu>
          </SubMenu>

          {/* Virtualization */}
          <SubMenu key="virtualization" icon={<DatabaseOutlined />} title="Virtualization">
            <SubMenu key="hyperv" title="HyperV">
              <Menu.Item key="hyperv-storage">
                <Link to="/virtualization/hyperv/vstorage-management">Storage Management</Link>
              </Menu.Item>
              <Menu.Item key="hyperv-resource">
                <Link to="/virtualization/hyperv/vnetwork-management">Network Management</Link>
              </Menu.Item>
              <Menu.Item key="hyperv-virtual">
                <Link to="/virtualization/hyperv/virtual-management">Virtual Machine Management</Link>
              </Menu.Item>
            </SubMenu>

            <SubMenu key="vmware" title="VMware">
              <Menu.Item key="vmware-storage">
                <Link to="/virtualization/vmware/vstorage-management">Storage Management</Link>
              </Menu.Item>
              <Menu.Item key="vmware-network">
                <Link to="/virtualization/vmware/vnetwork-management">Network Management</Link>
              </Menu.Item>
              <Menu.Item key="vmware-virtual">
                <Link to="/virtualization/vmware/virtual-management">Virtual Machine Management</Link>
              </Menu.Item>
            </SubMenu>
          </SubMenu>

          {/* Network */}
          <SubMenu key="network" icon={<AppstoreOutlined />} title="Network">
            <Menu.Item key="network-vpn">
              <Link to="/network/vpn-setting">VPN Setting</Link>
            </Menu.Item>
            <Menu.Item key="network-vlan">
              <Link to="/network/vlan-setting">VLAN Setting</Link>
            </Menu.Item>
            <Menu.Item key="network-port">
              <Link to="/network/port-setting">Port Setting</Link>
            </Menu.Item>
            <Menu.Item key="network-qos">
              <Link to="/network/qos-setting">QOS Setting</Link>
            </Menu.Item>
            <Menu.Item key="network-test">
              <Link to="/network/test-setting">Test Setting</Link>
            </Menu.Item>
            <Menu.Item key="network-protocol">
              <Link to="/network/protocol-setting">Network Protocol Setting</Link>
            </Menu.Item>
          </SubMenu>

          {/* Security */}
          <SubMenu key="security" icon={<LockOutlined />} title="Security">
            <Menu.Item key="security-vlan">
              <Link to="/security/vlan-setting">VLAN Setting</Link>
            </Menu.Item>
            <Menu.Item key="security-port">
              <Link to="/security/port-setting">Port Setting</Link>
            </Menu.Item>
            <Menu.Item key="security-authentication">
              <Link to="/security/content-filtering">Content Filtering</Link>
            </Menu.Item>
            <Menu.Item key="traffic-saping">
              <Link to="/security/traffic-shaping">Traffic Shaping</Link>
            </Menu.Item>
            <Menu.Item key="svpn-setting">
              <Link to="/security/svpn-setting">VPN Setting</Link>
            </Menu.Item>
          </SubMenu>

          {/* Load Balancer */}
          <SubMenu key="loadBalancer" icon={<BarsOutlined />} title="Load Balancer">
            <Menu.Item key="lb-server">
              <Link to="/load-balancer/server-setting">Server Setting</Link>
            </Menu.Item>
            <Menu.Item key="lb-node">
              <Link to="/load-balancer/node-setting">Node Setting</Link>
            </Menu.Item>
            <Menu.Item key="lb-member">
              <Link to="/load-balancer/member-setting">Member Setting</Link>
            </Menu.Item>
            <SubMenu key="lb-policy" title="Policy">
              <Menu.Item key="lb-wan-policy">
                <Link to="/load-balancer/policy/wan-policy">WAN Policy</Link>
              </Menu.Item>
              <Menu.Item key="lb-dns-policy">
                <Link to="/load-balancer/policy/dns-policy">DNS Policy</Link>
              </Menu.Item>
              <Menu.Item key="lb-other-policy">
                <Link to="/load-balancer/policy/other-policy">Other Policy</Link>
              </Menu.Item>
              <Menu.Item key="lb-other-policy">
                <Link to="/load-balancer/policy/hardware-policy">Hardware Policy</Link>
              </Menu.Item>
            </SubMenu>
          </SubMenu>

          {/* Monitoring */}
          <Menu.Item key="monitoring" icon={<MonitorOutlined />}>
            <Link to="/monitoring">Monitoring</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-header">
          <div className="header-right">
            <Search
              placeholder="Search..."
              allowClear
              onSearch={onSearch}
              style={{ width: 300 }}
              className="search-input"
            />
          </div>
        </Header>
        <Content className="site-layout-content">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
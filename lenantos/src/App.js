import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppLayout from "./Layout";
import Dashboard from "./pages/Dashboard";
import UserManagement from "./pages/windows/UserManagement";
import ServiceManagement from "./pages/windows/ServiceManagement";
import ServerManagement from "./pages/windows/ServerManagement";
import GroupManagement from "./pages/windows/GroupManagement";
import ResourceManagement from "./pages/ResourceManagement";
import DiskManagement from "./pages/windows/DiskManagement";

// Virtualization components
import StorageManagement from "./pages/virtualization/StorageManagement";
import ResourceVirtualization from "./pages/virtualization/ResourceVirtualization";

// Network components
import LanSetting from "./pages/network/LanSetting";
import WanSetting from "./pages/network/WanSetting";
import DnsSetting from "./pages/network/DnsSetting";
import DhcpSetting from "./pages/network/DhcpSetting";

// Security components
import FirewallSetting from "./pages/security/FirewallSetting";
import AccessControl from "./pages/security/AccessControl";
import AuthenticationSetting from "./pages/security/AuthenticationSetting";

// Load Balancer components
import ServerSetting from "./pages/loadBalancer/ServerSetting";
import NodeSetting from "./pages/loadBalancer/NodeSetting";
import MemberSetting from "./pages/loadBalancer/MemberSetting";
import WanPolicy from "./pages/loadBalancer/WanPolicy";
import DnsPolicy from "./pages/loadBalancer/DnsPolicy";
import OtherPolicy from "./pages/loadBalancer/OtherPolicy";

// Monitoring component
import Monitoring from "./pages/Monitoring";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          {/* Dashboard */}
          <Route path="dashboard" element={<Dashboard />} />
          
          {/* Server -> Windows */}
          <Route path="windows/user-management" element={<UserManagement />} />
          <Route path="windows/service-management" element={<ServiceManagement />} />
          <Route path="windows/server-management" element={<ServerManagement />} />
          <Route path="windows/group-management" element={<GroupManagement />} />
          <Route path="windows/resource-management" element={<ResourceManagement />} />
          <Route path="windows/disk-management" element={<DiskManagement />} />
          
          {/* Server -> Linux */}
          <Route path="linux/user-management" element={<UserManagement />} />
          <Route path="linux/service-management" element={<ServiceManagement />} />
          <Route path="linux/server-management" element={<ServerManagement />} />
          <Route path="linux/group-management" element={<GroupManagement />} />
          <Route path="linux/resource-management" element={<ResourceManagement />} />
          <Route path="linux/disk-management" element={<DiskManagement />} />
          
          {/* Virtualization */}
          <Route path="virtualization/hyperv/storage-management" element={<StorageManagement />} />
          <Route path="virtualization/hyperv/resource-management" element={<ResourceVirtualization />} />
          <Route path="virtualization/vmware/storage-management" element={<StorageManagement />} />
          <Route path="virtualization/vmware/resource-management" element={<ResourceVirtualization />} />

          {/* Network */}
          <Route path="network/lan-setting" element={<LanSetting />} />
          <Route path="network/wan-setting" element={<WanSetting />} />
          <Route path="network/dns-setting" element={<DnsSetting />} />
          <Route path="network/dhcp-setting" element={<DhcpSetting />} />

          {/* Security */}
          <Route path="security/firewall-setting" element={<FirewallSetting />} />
          <Route path="security/access-control" element={<AccessControl />} />
          <Route path="security/authentication-setting" element={<AuthenticationSetting />} />

          {/* Load Balancer */}
          <Route path="load-balancer/server-setting" element={<ServerSetting />} />
          <Route path="load-balancer/node-setting" element={<NodeSetting />} />
          <Route path="load-balancer/member-setting" element={<MemberSetting />} />
          <Route path="load-balancer/policy/wan-policy" element={<WanPolicy />} />
          <Route path="load-balancer/policy/dns-policy" element={<DnsPolicy />} />
          <Route path="load-balancer/policy/other-policy" element={<OtherPolicy />} />

          {/* Monitoring */}
          <Route path="monitoring" element={<Monitoring />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

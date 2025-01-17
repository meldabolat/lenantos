import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import Dashboard from "./pages/Dashboard";
import UserManagement from "./pages/windows/UserManagement";
import ServiceManagement from "./pages/windows/ServiceManagement";
import ServerManagement from "./pages/windows/ServerManagement";
import GroupManagement from "./pages/windows/GroupManagement";
import StorageManagement from "./pages/windows/StorageManagement";
import PackageManagement from "./pages/windows/PackageManagement";

// Virtualization components
import VStorageManagement from "./pages/virtualization/VStorageManagement";
import VNetworkManagement from "./pages/virtualization/VNetworkManagement";

// Network components
import VpnSetting from "./pages/network/VpnSetting";
import VlanSetting from "./pages/network/VlanSetting";
import PortSetting from "./pages/network/PortSetting";
import QosSetting from "./pages/network/QosSetting";
import TestSetting from "./pages/network/TestSetting";

// Security components
import SVlanSetting from "./pages/security/SVlanSetting";
import SPortSetting from "./pages/security/SPortSetting";
import TrafficShaping from "./pages/security/TrafficShaping";
import ContentFiltering from "./pages/security/ContentFiltering";
import SVpnSetting from "./pages/security/SVpnSetting";

// Load Balancer components
import ServerSetting from "./pages/loadBalancer/ServerSetting";
import NodeSetting from "./pages/loadBalancer/NodeSetting";
import MemberSetting from "./pages/loadBalancer/MemberSetting";
import WanPolicy from "./pages/loadBalancer/WanPolicy";
import DnsPolicy from "./pages/loadBalancer/DnsPolicy";
import OtherPolicy from "./pages/loadBalancer/OtherPolicy";

// Monitoring component
import Monitoring from "./pages/Monitoring";
import NetworkManagement from "./pages/windows/NetworkManagement";
import MaintenanceRepair from "./pages/windows/MaintenanceRepair";
import VirtualManagement from "./pages/virtualization/VirtualManagement";
import NetworkProtocol from "./pages/network/NetworkProtocol";
import HardWare from "./pages/loadBalancer/HardWare";
import CompanyManagement from "./pages/settings/CompanyManagement";
import DeviceManagement from "./pages/settings/DeviceManagement";
import LicanceManagement from "./pages/settings/LicanceManagement";
import Envanter from "./pages/settings/Envanter";
import UserManagementS from "./pages/settings/UserManagementS";


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
          <Route path="windows/storage-management" element={<StorageManagement />} />
          <Route path="windows/package-management" element={<PackageManagement />} />
          <Route path="windows/network-management" element={<NetworkManagement />} />
          <Route path="windows/maintenance-repair" element={<MaintenanceRepair />} />
          {/* Server -> Linux */}
          <Route path="linux/user-management" element={<UserManagement />} />
          <Route path="linux/service-management" element={<ServiceManagement />} />
          <Route path="linux/server-management" element={<ServerManagement />} />
          <Route path="linux/group-management" element={<GroupManagement />} />
          <Route path="linux/storage-management" element={<StorageManagement />} />
          <Route path="linux/package-management" element={<PackageManagement />} />
          <Route path="linux/network-management" element={<NetworkManagement />} />
          <Route path="linux/maintenance-repair" element={<MaintenanceRepair />} />
          {/* Virtualization */}
          <Route path="virtualization/hyperv/vstorage-management" element={<VStorageManagement />} />
          <Route path="virtualization/hyperv/vnetwork-management" element={<VNetworkManagement />} />
          <Route path="virtualization/hyperv/virtual-management" element={<VirtualManagement />} />

          <Route path="virtualization/vmware/vstorage-management" element={<VStorageManagement />} />
          <Route path="virtualization/vmware/vnetwork-management" element={<VNetworkManagement />} />
          <Route path="virtualization/vmware/virtual-management" element={<VirtualManagement />} />
          {/* Network */}
          <Route path="network/vpn-setting" element={<VpnSetting />} />
          <Route path="network/vlan-setting" element={<VlanSetting />} />
          <Route path="network/port-setting" element={<PortSetting />} />
          <Route path="network/qos-setting" element={<QosSetting />} />
          <Route path="network/test-setting" element={<TestSetting />} />
          <Route path="network/network-protocol" element={<NetworkProtocol />} />
          {/* Security */}
          <Route path="security/vlan-setting" element={<SVlanSetting />} />
          <Route path="security/port-setting" element={<SPortSetting />} />
          <Route path="security/content-filtering" element={<ContentFiltering />} />
          <Route path="security/traffic-shaping" element={<TrafficShaping />} />
          <Route path="security/svpn-setting" element={<SVpnSetting />} />

          {/* Load Balancer */}
          <Route path="load-balancer/server-setting" element={<ServerSetting />} />
          <Route path="load-balancer/node-setting" element={<NodeSetting />} />
          <Route path="load-balancer/member-setting" element={<MemberSetting />} />
          <Route path="load-balancer/policy/wan-policy" element={<WanPolicy />} />
          <Route path="load-balancer/policy/dns-policy" element={<DnsPolicy />} />
          <Route path="load-balancer/policy/other-policy" element={<OtherPolicy />} />
          <Route path="load-balancer/policy/hardware-policy" element={<HardWare />} />
          {/* Monitoring */}
          <Route path="monitoring" element={<Monitoring />} />
          {/* Settings */}
          <Route path="settings/company" element={<CompanyManagement />} />
          <Route path="settings/device" element={<DeviceManagement />} />
          <Route path="settings/user" element={<UserManagementS />} />
          <Route path="settings/licance" element={<LicanceManagement />} />
          <Route path="settings/envanter" element={<Envanter />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

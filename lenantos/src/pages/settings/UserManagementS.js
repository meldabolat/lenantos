import React, { useState, useEffect } from "react";
import { Table, Form, Input, Select, Checkbox, Button, Modal } from "antd";
import axios from "axios";
import "../settings/styles/UserManagementS.scss";

const { Option } = Select;

const UserManagementS = () => {
  const [form] = Form.useForm();
  const [users, setUsers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [authorizedDevices, setAuthorizedDevices] = useState([]);
  const [companies, setCompanies] = useState([]);
  const deviceOptions = ["Vcenter", "Windows servers", "Linux servers"];

  useEffect(() => {
    // Veri çekme işlemi
    const fetchData = async () => {
      try {
        const response = await axios.get("/src/db.json"); // Güncel veri yolu
        setUsers(response.data.users); // Veriler users array'ini içeriyor
        setCompanies(response.data.companies); // Şirket bilgilerini al
      } catch (error) {
        console.error("Veri çekme hatası:", error);
      }
    };

    fetchData();
  }, []);

  const addUser = (values) => {
    setUsers((prev) => [
      ...prev,
      { id: prev.length + 1, ...values, authorizedDevices },
    ]);
    form.resetFields();
    setAuthorizedDevices([]);
  };

  const handleDeviceSelect = (selectedDevices) => {
    setAuthorizedDevices(selectedDevices);
  };

  const filterUsersByCompany = (companyId) => {
    if (!companyId) return users; // Eğer şirket seçilmemişse tüm kullanıcıları göster
    return users.filter((user) => user.companyId === companyId);
  };

  return (
    <div className="user-management">
      <h2>User Management</h2>
      <Form layout="vertical" form={form} onFinish={addUser}>
        <Form.Item name="companyId" label="Company" rules={[{ required: true }]}>
          <Select
            placeholder="Select Company"
            onChange={() => form.resetFields(["username"])}
          >
            {companies.map((company) => (
              <Option key={company.id} value={company.id}>
                {company.name}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Table
          dataSource={filterUsersByCompany(form.getFieldValue("companyId"))}
          columns={[
            {
              title: "ID",
              dataIndex: "id",
              key: "id",
            },
            {
              title: "Username",
              dataIndex: "username",
              key: "username",
            },
            {
              title: "Company",
              dataIndex: "companyId",
              key: "companyId",
              render: (companyId) => {
                const company = companies.find((c) => c.id === companyId);
                return company ? company.name : "Unknown";
              },
            },
            {
              title: "Authorized devices",
              dataIndex: "authorizedDevices",
              key: "authorizedDevices",
              render: (devices) => devices.join(", "),
            },
            {
              title: "Actions",
              key: "actions",
              render: (_, record) => (
                <div>
                  <Button type="link">Edit</Button>
                  <Button type="link" danger>
                    Delete
                  </Button>
                </div>
              ),
            },
          ]}
          rowKey="id"
          pagination={false}
        />

        <div className="form-section">
          <h3>Add User</h3>
          <Form.Item
            name="username"
            label="Username"
            rules={[{ required: true, message: "Please enter username" }]}
          >
            <Input placeholder="Enter username" />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true, message: "Please enter password" }]}
          >
            <Input.Password placeholder="Enter password" />
          </Form.Item>
          <Form.Item label="Authorized Devices">
            <Button onClick={() => setIsModalOpen(true)}>Select Devices</Button>
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </div>
      </Form>

      <Modal
        title="Device List"
        visible={isModalOpen}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
      >
        <Checkbox.Group
          options={deviceOptions}
          value={authorizedDevices}
          onChange={handleDeviceSelect}
        />
      </Modal>
    </div>
  );
};

export default UserManagementS;

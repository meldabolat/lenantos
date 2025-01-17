import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles/DeviceManagement.scss";

const DeviceManagement = () => {
  const [deviceManagement, setDeviceManagement] = useState([]);
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [deviceDetails, setDeviceDetails] = useState({});

  useEffect(() => {
    // Veriyi çekme işlemi
    axios.get('/db.json')
      .then(response => {
        const { deviceManagement, users } = response.data;
        setDeviceManagement(deviceManagement);
        setUsers(users);
        setCurrentUser(users[0]); // Default olarak Admin seçiliyor
      })
      .catch(error => console.error('Veri çekme hatası:', error));
  }, []);

  const handleDetailChange = (deviceId, field, value) => {
    setDeviceDetails((prevDetails) => ({
      ...prevDetails,
      [deviceId]: {
        ...prevDetails[deviceId],
        [field]: value,
      },
    }));
  };

  const filteredDevices = deviceManagement.filter((device) =>
    currentUser.licenses.includes(device.license)
  );

  return (
    <div className="device-management">
      <h2>Cihaz Yönetimi</h2>

      {/* User Selection */}
      <div className="user-selection">
        <label htmlFor="user-select">Kullanıcı Seç:</label>
        <select
          id="user-select"
          value={currentUser?.id || ''}
          onChange={(e) =>
            setCurrentUser(users.find((user) => user.id === Number(e.target.value)))
          }
        >
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
      </div>

      {/* Device Management */}
      <div className="devices">
        {filteredDevices.map((device) => (
          <div key={device.id} className="device-card">
            <h3>{device.name}</h3>
            <p>Kategori: {device.category}</p>
            <p>Lisans Türü: {device.license}</p>

            <div className="device-details">
              <label>
                Kullanıcı Adı:
                <input
                  type="text"
                  value={deviceDetails[device.id]?.username || ""}
                  onChange={(e) =>
                    handleDetailChange(device.id, "username", e.target.value)
                  }
                />
              </label>
              <label>
                Şifre:
                <input
                  type="password"
                  value={deviceDetails[device.id]?.password || ""}
                  onChange={(e) =>
                    handleDetailChange(device.id, "password", e.target.value)
                  }
                />
              </label>
              <label>
                IP Adresi:
                <input
                  type="text"
                  value={deviceDetails[device.id]?.ip || ""}
                  onChange={(e) =>
                    handleDetailChange(device.id, "ip", e.target.value)
                  }
                />
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeviceManagement;

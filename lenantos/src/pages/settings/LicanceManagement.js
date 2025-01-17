import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles/LicanceManagement.scss';

const DeviceManagement = () => {
    const [deviceManagement, setDeviceManagement] = useState([]);
    let currentCategory = "";

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:3000/deviceManagement");
                setDeviceManagement(response.data);
            } catch (error) {
                console.error("Veri çekme hatası:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="device-management">
            <h2>Cihaz Yönetimi</h2>
            <table>
                <thead>
                    <tr>
                        <th>Cihazlar</th>
                        <th>Basic</th>
                        <th>Orta</th>
                        <th>Gelişmiş</th>
                    </tr>
                </thead>
                <tbody>
                    {deviceManagement.map((device, index) => {
                        const showCategoryHeader = device.category !== currentCategory;
                        currentCategory = device.category;
                        return (
                            <React.Fragment key={index}>
                                {showCategoryHeader && (
                                    <tr>
                                        <td className="header" colSpan="4">{device.category} Cihazları</td>
                                    </tr>
                                )}
                                <tr>
                                    <td>{device.name}</td>
                                    <td className={device.basic ? "available" : "unavailable"}>{device.basic ? "✔️" : "❌"}</td>
                                    <td className={device.orta ? "available" : "unavailable"}>{device.orta ? "✔️" : "❌"}</td>
                                    <td className={device.gelismis ? "available" : "unavailable"}>{device.gelismis ? "✔️" : "❌"}</td>
                                </tr>
                            </React.Fragment>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default DeviceManagement;

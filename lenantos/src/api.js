// src/services/api.js

// Backend API URL'inizi burada tanımlayın
const API_BASE_URL = 'http://192.168.1.98:8000'; // Django development server portu

export const apiService = {
    // Tüm tabloları getir
    getAllTables: async () => {
        try {
            const response = await fetch(`${API_BASE_URL}/all-tables/`);
            return await response.json();
        } catch (error) {
            console.error('Error fetching all tables:', error);
            throw error;
        }
    },

    // Müşterileri getir
    getCustomers: async () => {
        try {
            const response = await fetch(`${API_BASE_URL}/customers/`);
            return await response.json();
        } catch (error) {
            console.error('Error fetching customers:', error);
            throw error;
        }
    },

    // Cihazları getir
    getDevices: async () => {
        try {
            const response = await fetch(`${API_BASE_URL}/devices/`);
            return await response.json();
        } catch (error) {
            console.error('Error fetching devices:', error);
            throw error;
        }
    },

    // Kullanıcıları getir
    getUsers: async () => {
        try {
            const response = await fetch(`${API_BASE_URL}/users/`);
            return await response.json();
        } catch (error) {
            console.error('Error fetching users:', error);
            throw error;
        }
    },

    // Cihaz tiplerini getir
    getDeviceTypes: async () => {
        try {
            const response = await fetch(`${API_BASE_URL}/device-types/`);
            return await response.json();
        } catch (error) {
            console.error('Error fetching device types:', error);
            throw error;
        }
    },

    // Cihaz alt tiplerini getir
    getDeviceSubtypes: async () => {
        try {
            const response = await fetch(`${API_BASE_URL}/device-subtypes/`);
            return await response.json();
        } catch (error) {
            console.error('Error fetching device subtypes:', error);
            throw error;
        }
    },

    // Lisans tiplerini getir
    getLicenseTypes: async () => {
        try {
            const response = await fetch(`${API_BASE_URL}/license-types/`);
            return await response.json();
        } catch (error) {
            console.error('Error fetching license types:', error);
            throw error;
        }
    },

    // Lisans tipi cihaz erişimlerini getir
    getLicencetypeDeviceAccess: async () => {
        try {
            const response = await fetch(`${API_BASE_URL}/licencetype-device-access/`);
            return await response.json();
        } catch (error) {
            console.error('Error fetching licencetype device access:', error);
            throw error;
        }
    },

    // Kullanıcı cihaz erişimlerini getir
    getUserDeviceAccess: async () => {
        try {
            const response = await fetch(`${API_BASE_URL}/user-device-access/`);
            return await response.json();
        } catch (error) {
            console.error('Error fetching user device access:', error);
            throw error;
        }
    },

    // Müşteri kullanıcı cihaz erişimlerini getir
    getCustomerUserDeviceAccess: async () => {
        try {
            const response = await fetch(`${API_BASE_URL}/customer-user-device-access/`);
            return await response.json();
        } catch (error) {
            console.error('Error fetching customer user device access:', error);
            throw error;
        }
    },

    // Müşteri lisanslarını getir
    getCustomerLicense: async () => {
        try {
            const response = await fetch(`${API_BASE_URL}/customer-license/`);
            return await response.json();
        } catch (error) {
            console.error('Error fetching customer license:', error);
            throw error;
        }
    },

    // Müşteri cihaz erişimlerini getir
    getCustomerDeviceAccess: async () => {
        try {
            const response = await fetch(`${API_BASE_URL}/customer-device-access/`);
            return await response.json();
        } catch (error) {
            console.error('Error fetching customer device access:', error);
            throw error;
        }
    }
};

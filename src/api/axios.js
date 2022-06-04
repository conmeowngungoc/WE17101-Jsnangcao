// Nơi cấu hình base cho axios
import axios from 'axios';

// Khởi tạo cấu hình axios cho toàn bộ project
const apiAxios = axios.create({
    baseURL: 'https://6291d1909d159855f0809615.mockapi.io'
});

export default apiAxios;
const API_BASE_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

const endpoints = {
    send_message: `${API_BASE_URL}/messages/${API_KEY}`,
};

export default endpoints;

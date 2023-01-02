const IP = String(process.env.REACT_APP_BACKEND_IP) || 'localhost'
const HOST =
   `${String(process.env.REACT_APP_BACKEND_HOST)}${IP}` || 'http://localhost'
const PORT = parseInt(process.env.REACT_APP_BACKEND_PORT || '4500')

const API_ENDPOINT = `${HOST}:${PORT}`

export { IP, HOST, PORT, API_ENDPOINT }

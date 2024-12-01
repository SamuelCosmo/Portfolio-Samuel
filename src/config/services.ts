import axios from 'axios'
import endpoints from './endpoints'

export const sendMessage = async (name: string, email: string, message: string) => {
  try {
    const response = await axios.post(endpoints.send_message, {
      full_name: name,
      email_address: email,
      message: message,
    })
    console.log('Response data:', response.data)
  } catch (error) {
    // Opcional: manejar errores HTTP específicos
    if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.response?.data)
    }
  }
}

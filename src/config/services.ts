export const sendMessage = async (name: string, email: string, message: string) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/messages/${process.env.REACT_APP_API_KEY}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        full_name: name,
        email_address: email,
        message,
      }),
    }
  )

  if (!response.ok) {
    throw new Error(`Failed to send message: ${response.status}`)
  }
}

import axios from 'axios';

export const handler = async (event) => {
  const token = 'p6B4JxmnBbP1YkcdS5TdmCC60x2pgj72Gw8rfmLs7KC';
  const url = 'https://notify-api.line.me/api/notify';
  
  try {
    const body = JSON.parse(event.body);
    const message = body.message || 'Default message';

    const data = new URLSearchParams();
    data.append('message', message);

    const response = await axios.post(url, data, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Bearer ${token}`
      }
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, data: response.data })
    };
  } catch (error) {
    console.error('Error sending message:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: error.message })
    };
  }
};

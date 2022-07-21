import axios from 'axios';

export const sendToEmail = async (formData) => {
  try {
    const response = await axios.post('/user?ID=12345', formData, {
      withCredentials: false,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    });
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

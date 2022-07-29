import axios from 'axios';

const url = "https://dev.goodstudio.by/sendMessage.php";

export const sendToEmail = async (data, file) => {

    const formData = new FormData();
    formData.append('brief', data);
    if (file) {
        formData.append('file', file);
    }

  return await axios.post(url, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        },
  }).then(res => res.data)
      .then(async res => { return res})
      .catch((e) => {
        return {ok: false, status: "unreachable"}
      });

};


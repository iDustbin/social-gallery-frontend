const axios = require('axios');

async function makePostRequest() {

    params = {
      
        profile: 'cryzifix'
      
      }

    let res = await axios.post('http://127.0.0.1:5000/api/instagram/update', params);

    console.log(`data: ${res.data}`);
}

makePostRequest();

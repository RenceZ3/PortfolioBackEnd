const express = require('express');
const app = express();
const port = 3000;
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors');


app.use(cors());
app.use(bodyParser.json({ limit: '1000mb' }));


app.use('/experience/list', async(req, res)=> {

    try {
        const response = await axios.get('https://406fbaac-fd11-4c95-8dd8-a8e85b55d8cd-us-east1.apps.astra.datastax.com/api/rest/v2/namespaces/portfolio/collections/experience?page-size=3', {
            headers: {
                'X-Cassandra-Token': 'AstraCS:NvCjXYSlxHZqCElaKkyYYyyr:f66fefc5b28f8762030cbfd0384dc8d2af9903bd0102908f9d922a3f85707f2e'
            }
        });
        res.json(response.data)
    }catch(error) {
        console.log(error);
    }
    
});



app.listen(port, ()=>{
    console.log('Port listening...', port);
})
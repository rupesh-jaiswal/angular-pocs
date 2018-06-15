const express = require('express');
const mock=require('./mock-response');
const app = express();
let offset=0;
app.get('/api/items', (req,res) => {
    if(offset+20 == mock.mockResponse.length) {
      offset=0;
    }    
    res.json(mock.mockResponse.slice(offset, offset+20));
    offset=offset+20;
});

app.listen(3000, () => console.log('listening on port 3000'));

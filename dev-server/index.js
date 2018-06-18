const Joi = require('joi');
const express = require('express');
const mock=require('./mock-response');
const app = express();
app.use(express.json());
app.get('/api/items', (req,res) => {
    const querySchema= {
      startWith: Joi.number().max(mock.mockResponse.length-1).required()
    }
    const result=Joi.validate(req.query, querySchema);
    if(result.error)
      return res.status(404).send(result.error.details[0].message);
    const offset=parseInt(req.query.startWith);
    const response={
      next:true
    }
    if(offset+20 > mock.mockResponse.length) {
      response.next=false
      response.posts= mock.mockResponse.slice(offset, mock.mockResponse.length);
    } else {
      response.posts= mock.mockResponse.slice(offset, offset+20);
    }
    res.send(JSON.stringify(response));
});
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}`));

const express = require('express');
const router = express.Router();
const request = require('request');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3001;

app.use(cors());

app.listen(port, () => {
    console.log('express is running ! ');
})

app.get('/api/hello', (req, res) => {
    res.send({ message: 'Hello Express!' });
});

app.get('/api/translation', (req, res) => {
    const source = req.query.source;
    const target = req.query.target;
    const text = req.query.text;
    console.log(source , target, text);

    var api_url = 'https://openapi.naver.com/v1/papago/n2mt';
    
    var options = {
       url: api_url,
       form: {'source':source, 'target':target, 'text':text},
       headers: {'X-Naver-Client-Id':'g13phI1SNsq633GtyVf1', 'X-Naver-Client-Secret': 'KaOu3jgqLJ'}
    };
    
   request.post(options, function (error, response, body) {
     if (!error && response.statusCode == 200) {
       res.writeHead(200, {'Content-Type': 'text/json;charset=utf-8'});
       res.end(body);
     } else {
       res.status(response.statusCode).end();
       console.log('error = ' + response.statusCode);
     }
   });
})
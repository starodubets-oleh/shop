const express = require('express');
var cors = require('cors')
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())

const port = process.env.PORT || 5555;

let link = 'https://60a61ebdc0c1fd00175f54b0.mockapi.io/products';

app.get('/', (req, res) => {
  const { limit } = req.query;

  const linkToGetProducts = link + `?page=1&limit=${limit}`;

  try {
    axios
      .get(linkToGetProducts)
      .then((list) => {
        res.send(list.data);
      })
      .catch((err) => {
        if (err.response.status >= 500) {
          res.send({
            error: 'mockapi.io is down'
          });
        } else {
          res.send({
            error: err
          });
        }
      });
  } catch (error) {
    res.send({
      error
    });
  }
});

app.listen(port, () => {
  console.log(`Server has been running on http://localhost:${port}`);
});

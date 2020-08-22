const express = require('express');
const app = express();
const axios = require('axios');
const PORT = 3535;
const path = require('path')

app.use(express.static(__dirname + '/../client/dist'));

// app.use(express.json());

app.get('/sidebar/summary', function (req, res) {
  axios.get('http://54.176.46.102:3380/sidebar/summary')
    .then(response => {
      // console.log(response.data);
      res.send(response.data)
    })
    .catch((response) => {console.log('catch', response.data)})
})

app.get('/kix', function (req, res) {
  axios.get('http://ec2-54-176-93-251.us-west-1.compute.amazonaws.com/kix')
    .then(response => {
      // console.log(response.data);
      res.status(200).send(response.data)
    })
    .catch((response) => {console.log('catch', response.data)})
})

app.get('/api/reviews', function (req, res) {
  console.log("hello");
  axios.get('http://52.14.202.194:3001/api/reviews')
    .then(response => {
      console.log(response.data);
      res.status(200).send(response.data)
    })
    .catch((response) => {console.log('catch', response.data)})
})


// app.post('/sidebar/summary', (req, res) => {
  // axios.post(request.body, 'http://54.176.46.102:3380/sidebar/summary')
  //   .then((response) => { callback(response.data); })
  //   .catch((response) => { callback(response); });

// })

app.listen(PORT, () => console.log('Server is listening at port', PORT))


// queryShoeStyle: (request, callback) => {
//   // let options = {
//   //   url: 'http://ec2-54-176-93-251.us-west-1.compute.amazonaws.com/kix',
//   //   method: 'POST',
//   //   data: request.body
//   // };
//   axios.post(request.body, 'http://ec2-54-176-93-251.us-west-1.compute.amazonaws.com/kix')
//     .then((response) => { callback(response.data); })
//     .catch((response) => { callback(response); });
// },
// app.post('/sidebar/summary', (req, res) => {
//   controller.querySidebar(req, (err, data) => {
//     if (err) {
//       res.send(err);
//     } else {
//       console.log('gotit', data);
//       res.send(data);
//     }
//   });
// });
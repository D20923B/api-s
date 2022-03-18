  const http = require('http');

  // Setting the configuration for
  // the request
  const options = {
      hostname: 'ghibliapi.herokuapp.com',
      path: '/films',
      method: 'GET'
  };

  // Sending the request
  const req = http.request(options, (res) => {
      let data = ''

      res.on('data', (chunk) => {
          data += chunk;
      });

      // Ending the response
      res.on('end', () => {
          a=JSON.parse(data)
          for (var b=0;b<a.length;b++){
          console.log(a[b].title)
          console.log(a[b].description+"\n")
          }
      });

  }).end()

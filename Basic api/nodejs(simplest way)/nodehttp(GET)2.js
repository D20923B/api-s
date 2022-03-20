  const http = require('http');

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

      res.on('end', () => {
          a=JSON.parse(data)
        //IMPORTATNT POINT (DESCRIPTION GIVEN BELOW)
          for (var b=0;b<a.length;b++){
          console.log(a[b].title)
          console.log(a[b].description+"\n")
          }
      });

  }).end()

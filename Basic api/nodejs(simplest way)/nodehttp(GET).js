const https = require('https') //importing the https module
const options = {               //making headers and methods for the request
  hostname: 'catfact.ninja',    //the domain name which will turn into the ip address of the server
  port: 443,                    //since we are using https protocol port 443 of the server will be used
  path: '/fact',                //the pathway of the program or the file with which we want to interact with
  method: 'GET'                 //the https method that we are going to use
}

const req = https.request(options, res => {         //adding headers to the request
  console.log(`statusCode: ${res.statusCode}`) // it shows the response code
console.log('a fact about cats')
  res.on('data', d => {                          //receiving the data
    a=JSON.parse(d)                             //we need to convert the received data into an object so that we can work with it
    console.log(a.fact)                         //the output
  })
})

req.on('error', error => {                      // in case of error this will run
  console.error(error)
})

req.end()                                       //to end the request 

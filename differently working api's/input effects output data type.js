const https = require('https')
let name='json'        //the input value change it to json or xml
const options = {
  hostname: 'api.ipify.org',
  port: 443,
  path: '/?format='+name,       //passing the input value using get methods
  method: 'GET'
}

const req = https.request(options, res => {
  //console.log(`statusCode: ${res.statusCode}`)

  res.on('data', d => {
    try {
      console.log(JSON.parse(d))              //condition for JSON
    } catch (e) {
      process.stdout.write(d)                 //condition for xml
    }
  })
})

req.on('error', error => {
  console.error(error)
})

req.end()

const https = require('https')
let name='sonia'        //the input value
const options = {
  hostname: 'api.agify.io',
  port: 443,
  path: '/?name='+name,       //passing the input value using get methods
  method: 'GET'
}

const req = https.request(options, res => {
  //console.log(`statusCode: ${res.statusCode}`)

  res.on('data', d => {
    let a=JSON.parse(d)
    console.log(a.age)
  })
})

req.on('error', error => {
  console.error(error)
})

req.end()

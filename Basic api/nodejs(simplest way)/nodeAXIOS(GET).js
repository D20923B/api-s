//Note axios needs to downloaded externally from NPM it is not present with the default package
const axios = require('axios')  //axious is added in the program

axios //the line below it is under axios object
  .get('https://ghibliapi.herokuapp.com/films')     //get request
  .then(res => {
    var a = res.data;                               //received data
    var size = Object.keys(a).length;
    for(var i=0;i<size;i++)                         //started a loop since the response contains objects in arrays
    {
      console.log(a[i].title)                       //showing title and description
      console.log(a[i].description+"\n")
    }
  })
  .catch(error => {                                 //to handle errors
    console.error(error)
  })

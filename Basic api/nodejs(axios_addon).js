const axios = require('axios')

axios
  .get('https://ghibliapi.herokuapp.com/films')
  .then(res => {
    var a = res.data;
    var size = Object.keys(a).length;
    for(var i=0;i<size;i++)
    {
      console.log(a[i].title)
      console.log(a[i].description+"\n")
    }
  })
  .catch(error => {
    console.error(error)
  })

const app = document.getElementById('root') //object to access the html file
const container = document.createElement('div')//conatiner to hold the data we get from the api get request
const logo =document.createElement('img')       //creating a logo to show at main page
const title = document.createElement('h1')      //to show heading a heading
title.innerText='Welcome to anime land'         //the heading
app.align='center'                              //to show the html data in centre
logo.src ='https://w0.peakpx.com/wallpaper/719/250/HD-wallpaper-flying-scenic-float-beautiful-magic-wing-sweet-fantasy-anime-beauty-scenery-light-blue-wings-cloud-male-lovely-sky-cute-boy-fly-bird-magical-white-scene-landscape.jpg'
                                                //src of the logo file
logo.width="900"                                  
logo.height="600"                                //setting the logo to a specific size
container.append(title)                           //adding title to the conatiner
container.append(logo)                            //adding logo to the container
app.append(container)                              //adding conatianer to the main html file

var request = new XMLHttpRequest()                 //to make a http request by the api

request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)    //made a get request to another api
request.onload = function () {
  var data = JSON.parse(this.response)                                //convert data to json
  data.forEach(a => {
    //conatiner is getting filled with data
    const conatiner = document.createElement('div')
    const heading = document.createElement('h1')
    const des = document.createElement('p')
    des.innerText=a.description
    heading.innerText=a.title+' '+a.original_title
    container.append(heading)
    container.append(des)
    app.append(container)
    console.log(a)
  });
}

request.send()                                                        //sending the request

'use strict';

// var busmalContainer = document.getElementById('busmal-container');
var imageSectionContainer = document.getElementById('clickHere');
// Collect all document element references we need, including ctx for chartjs
var leftImgContainer = document.getElementById('leftImg');
var middleImgContainer = document.getElementById('middleImg');
var rightImgContainer = document.getElementById('rightImg');
var currentLeftImgArrayIndex = 0;
var currentMiddleImgArrayIndex = 1;
var currentRightImgArrayIndex = 2;

// references to the current images on the page
//document.getElementById

var clickCounter = 0; // counter for all of our clicks

var allImages = []; // container for all images

var ProductImage = function (src, name){
  // builds images
  this.src = src;
  this.likes = 0;
  this.appeared = 0;
  this.name = name;
  allImages.push(this);
};

var chooseNewImage = function (){
  // choose 3 new random images that dont repeat from the current images or each other
  do {
    var randomNumberLeft = Math.floor(Math.random() * allImages.length);
    // console.log(randomNumberLeft);
  } while (randomNumberLeft === currentLeftImgArrayIndex || randomNumberLeft === currentMiddleImgArrayIndex || randomNumberLeft === currentRightImgArrayIndex);
  // } while (randomNumberLeft === currentLeftImgArrayIndex || randomNumberLeft === currentMiddleImgArrayIndex || randomNumberLeft === currentRightImgArrayIndex);

  do {
    var randomNumberMiddle = Math.floor(Math.random() * allImages.length);
    // console.log(randomNumberMiddle);
  } while (randomNumberMiddle === currentLeftImgArrayIndex || randomNumberMiddle === currentMiddleImgArrayIndex || randomNumberMiddle === currentRightImgArrayIndex || randomNumberMiddle === randomNumberLeft);

  do {
    var randomNumberRight = Math.floor(Math.random() * allImages.length);
    // console.log(randomNumberRight);
  } while (randomNumberRight === currentLeftImgArrayIndex || randomNumberRight === currentMiddleImgArrayIndex || randomNumberRight === currentRightImgArrayIndex || randomNumberRight === randomNumberLeft || randomNumberRight === randomNumberMiddle);

  // Persisting current pictures
  currentLeftImgArrayIndex = randomNumberLeft;
  currentMiddleImgArrayIndex = randomNumberMiddle;
  currentRightImgArrayIndex = randomNumberRight;

  // change the source of the 3 images on the page currently
  leftImgContainer.src = allImages[randomNumberLeft].src;
  middleImgContainer.src = allImages[randomNumberMiddle].src;
  rightImgContainer.src = allImages[randomNumberRight].src;
};

var handleBusmalClick = function (event) {
// check to make sure we click on the correct thing (image);
  if (event.target.id === 'leftImg' || event.target.id === 'middleImg' || event.target.id === 'rightImg'){
    // increment the correct image's likes
    if (event.target.id === 'leftImg'){
      allImages[currentLeftImgArrayIndex].likes++;
      console.log('Left image was clicked');
    } else if (event.target.id === 'middleImg'){
      allImages[currentMiddleImgArrayIndex].likes++;
      console.log('Middle image was clicked');
    } else {
      allImages[currentRightImgArrayIndex].likes++;
      console.log('Right image was clicked');
    }
    // increment all current images appeared count
    allImages[currentLeftImgArrayIndex].appeared++;
    allImages[currentMiddleImgArrayIndex].appeared++;
    allImages[currentRightImgArrayIndex].appeared++;

    // call choose new image function ()
    chooseNewImage();

    // increment the total clicks on the page
    clickCounter++;

    // test if we have clicked 25 times
    if (clickCounter === 25) {
      renderChart();

      // shut the listener off
      imageSectionContainer.removeEventListener('click', handleBusmalClick);

      // Show images' likes / appearances
      console.log(allImages);
      var imageResults = document.getElementById('imageResults');
      
      for (var i = 0; i < allImages.length; i++) {
        var liEl = document.createElement('li');
        liEl.textContent = allImages[i].name + ': ' + allImages[i].likes;
        imageResults.appendChild(liEl);
      }

      // make chart appear
      // renderChart();
    }
  }
};

imageSectionContainer.addEventListener('click', handleBusmalClick);

// instantiate all new images
// (new Image('cool.jpg))
new ProductImage('../img/bag.jpg', 'Bag');
new ProductImage('../img/banana.jpg', 'Banana');
new ProductImage('../img/bathroom.jpg', 'Bathroom');
new ProductImage('../img/boots.jpg', 'Boots');
new ProductImage('../img/breakfast.jpg', 'Breakfast');
new ProductImage('../img/bubblegum.jpg', 'Bubblegum');
new ProductImage('../img/chair.jpg', 'Chair');
new ProductImage('../img/cthulhu.jpg', 'Cthulhu');
new ProductImage('../img/dog-duck.jpg', 'Dog Duck');
new ProductImage('../img/dragon.jpg', 'Dragon');
new ProductImage('../img/pen.jpg', 'Pen');
new ProductImage('../img/pet-sweep.jpg', 'Pet Sweep');
new ProductImage('../img/scissors.jpg', 'Scissors');
new ProductImage('../img/shark.jpg', 'Shark');
new ProductImage('../img/sweep.png', 'Sweep');
new ProductImage('../img/tauntaun.jpg', 'Tauntaun');
new ProductImage('../img/unicorn.jpg', 'Unicorn');
new ProductImage('../img/usb.gif', 'USB');
new ProductImage('../img/water-can.jpg', 'Water Can');
new ProductImage('../img/wine-glass.jpg', 'Wine Glass');

// ======================================
// Charts
// ======================================

//function to render the chart
var renderChart = function () {
  // chartjs needs ctx

  //=================
  //collect all data
  // we need labels, data values, colors,

  // create a data object that gets passed all our other arrays, based off of the example from chartjs
  //============
  //call a new Chart and pass in ctx and our data
};

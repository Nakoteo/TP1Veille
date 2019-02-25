import {AnimImg} from './AnimImages.js'

let lesImages = document.getElementsByTagName('img');
console.log(lesImages.length);
let animationImages = new AnimImg(lesImages);
import {AnimImg} from './AnimImages.js'
import {AnimLettre} from './AnimLettres.js'

let lesImages = document.getElementsByTagName('img');
let animationImages = new AnimImg(lesImages);
let elmH1 = document.querySelector('h1');
animationLettre();

function animationLettre(){
	const lesLettres = 'Lyon Mountain Fire Tower Trail';
 	let animationLettres = new AnimLettre(lesLettres, elmH1);
}
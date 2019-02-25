export class AnimImg{
    constructor(lesImages){
        this.lesImages = lesImages;
        this.animerImages();
    }
    animerImages(){
        let i = 0;
        for (let uneImage of this.lesImages){
            uneImage.style.animation = "opaciteImages 2s ease-in " + i + "s forwards";
            i += 1;
        }
    }	
}
export class AnimLettre{
    constructor(lesLettres, elmHeader, finAnim){
        this.lesLettres = lesLettres;
        this.elmHeader = elmHeader;
        this.finAnim= finAnim;
        this.animerLettres();
    }
    animerLettres(){
        let elmMot = document.createElement('div');
        elmMot.classList.add('mot');
        this.elmHeader.appendChild(elmMot);
        let i = 0;
        for (let uneLettre of this.lesLettres){
            let conteneurLettre = document.createElement('div');
            conteneurLettre.innerHTML = uneLettre;
            conteneurLettre.style.animationDelay = (i * 0.5) + "s";
            elmMot.appendChild(conteneurLettre);
            i += 0.5;
        }
        this.finAnim();
    }	
}
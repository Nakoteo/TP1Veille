export class AnimLettre{
    constructor(lesLettres, elmH1){
        this.lesLettres = lesLettres;
        this.elmH1 = elmH1;
        this.animerLettres();
    }
    animerLettres(){
        let i = 0;
        for (let uneLettre of this.lesLettres){
            let conteneurLettre = document.createElement('div');
            conteneurLettre.innerHTML = uneLettre;
            conteneurLettre.style.animation = "opacite 0.4s ease-in " + i + "s forwards";
            this.elmH1.appendChild(conteneurLettre);
            i += 0.1;
        }
    }	
}
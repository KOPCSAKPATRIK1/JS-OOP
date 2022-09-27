let adat = [];

class Zene 
{
    #cim;
    #hossz;

    constructor(cim, hossz) 
    {
        this.#cim = cim;
        this.#hossz = hossz;   
    }

    get cim()
    {
        return this.#cim;
    }
    
    get hossz()
    {
        return this.#hossz;
    }
}

function init()
{
    console.log('Loaded')
    document.getElementById("hozzadAd").addEventListener('click', katt)
      
}

function katt()
{
    let cim = document.getElementById('cim').value;
    let hossz = document.getElementById('hossz').value;  
    let zene = new Zene(cim, hossz)
    console.log(zene)


    adat.push(zene);
    let list = document.getElementById('zene-list');

    adat.forEach(element => {
        let li = document.createElement("li");
        li.innerHTML = '';        
        li.innerText = cim + " - " + hossz;        
        list.appendChild(li);      
        li.removeAttribute(li);
       
    });

}


document.addEventListener('DOMContentLoaded', init)



class Allat
{
    #labakSzama;
    #nev;

    constructor(nev, labakSzama)
    {
        this.#nev = nev;
        this.#labakSzama = labakSzama;
    }

    hangotAd()
    {
        throw new Error('A hangotAd fuggveny absztrakt')
    }
}

class Aranyhal extends Allat
{
    constructor(nev)
    {
        super(nev, 0);
    }

    hangotAd()
    {
        console.log('')
    }
}

class Kutyuli extends Allat
{
    constructor(nev)
    {
        super(nev, 4);
    }

    hangotAd()
    {
        console.log('Sup nigga')
    }
}

let kutya = new Kutyuli('Pintér Ádám Jumblebeee')
let hal = new Aranyhal('Valanetin Levente')

kutya.hangotAd();
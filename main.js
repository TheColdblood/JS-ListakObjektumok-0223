import { SZEMELYLISTA } from "./adat.js";
import {kartyaOsszeallit, konzolraIr, listaOsszeallit} from "./fuggvenyek.js";

konzolraIr(SZEMELYLISTA)

const FELSELEM = document.querySelector("#felsorolas")
FELSELEM.innerHTML = "<h1>Ügyesek vagyunk!</h1>"
FELSELEM.innerHTML += listaOsszeallit(SZEMELYLISTA)

const KARTYA = document.querySelector(`#kartyaContainer`)
KARTYA.innerHTML = "<h1>Adatok</h1>"
KARTYA.innerHTML += kartyaOsszeallit(SZEMELYLISTA)


/* const LISTA = ["Géza", "Jenő"] */
/* LISTA = [12, 34, 53] nem lehet a const miatt*/
/* console.log(LISTA[1])

LISTA[10]="Béla" */

/* LISTA.push("Jakab")/* Lista végére egy elemet helyez */
/* LISTA.pop()   Leveszi a lista tolsó elemét */

/* console.log(LISTA)
console.log(LISTA[5]) */

/* egyszerű adatszerkezet esetén Const-al való deklarácótól a változó értéke nem írható felül */
/* összetett adatszerkezet esetén (Lista, Objektum) Const-al való deklaráláskor, a lista (memória) címe nem változtatható meg, értékei változhatnak, hozzá lehet adni, el lehet törölni*/

/* Ismerősök */

/*Objektum: összetett adatszerkezet, amelyben a az összetartozó adatokat együtt tudjuk kezelni */
/* Kulcs értékpárok */
/* JSON objektum  */
/* const SZEMELY1 = {
    nev: "Géza",
    tel: "06-30-123564",
    suly: 80
}

const SZEMELY2 = {
    nev: "Jenő",
    tel: "06-60-235674",
    suly: 75
}

console.log(SZEMELY1.nev)
console.log(SZEMELY2.suly) */

/* const SZEMELYLISTA = {
    {
        nev: "Géza",
        tel: "06-30-123564",
        suly: 80
    },
    {
        nev: "Jenő",
        tel: "06-60-235674",
        suly: 75
    }
}

console.log(SZEMELYLISTA[1].tel) */


export function konzolraIr(lista){
    /* SZEMELYLISTA adatait konzolra */
    for (let index = 0; index < lista.length; index++){
        console.log(`név: ${lista[index].nev}, tel: ${lista[index].tel}`)
    }
}

export function listaOsszeallit(lista){
    let txt = "<ul>"
    for (let index = 0; index < lista.length; index++){
        txt += `<li>Név: ${lista[index].nev},  Tel: ${lista[index].tel}</li>`
    }
    txt +="</ul>"
    console.log(txt)
    return txt
}

export function kartyaOsszeallit(lista){
    let txt = "<ul>"
    for (let index = 0; index < lista.length; index++){
        txt += `<li>Név: ${lista[index].nev}</li>`
        txt += `<li>Tel: ${lista[index].tel}</li>`
        txt += `<li>Súly: ${lista[index].suly}</li>`
        txt += `<br>`
    }
    txt +="</ul>"
    console.log(txt)
    return txt
}
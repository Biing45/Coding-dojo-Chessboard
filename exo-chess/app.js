const getCells = (chessboardlength,chessboardHeight) => {

    const tableauGlocal = []
    const lettreA= 65
    const lettreFin=lettreA+chessboardHeight
    
    for(let i=lettreA; i<lettreFin; i++){
        const ligne= []
        for (let j=1; j <= chessboardlength; j++){
            ligne.push (`${String.fromCharCode(i)}-${j}`) 
        }
        tableauGlocal.push(ligne)
    }
    return tableauGlocal
}

console.log(getCells(8,8))
let cliques = 0;
let mostraHTML = document.getElementById ("mostraHTML");

function contador(){
     cliques++;  

    mostraMTML.innerHTML = `<p> numeros de cliques: ${cliques}<p/>`;
    console.log(cliques);
}
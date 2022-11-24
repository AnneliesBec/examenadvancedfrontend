/*vraag aan de gebruiker*/
let vakjes=Number(prompt("Geef een even aantal vakjes in "));
/*declareren variabelen en array*/
let teller=0;
let resultaat;
let aantalVakjes1=[];
let i=0;
let card=[];
let aantalVakjes2=[];
let totaal=[];


/*while loop om de array te vullen*/
while(teller<=vakjes) {
    aantalVakjes1.push(teller)
    aantalVakjes2.push(teller)
    teller++;

}
/*2 arrays mergen*/
totaal=aantalVakjes1.concat(aantalVakjes2);

/*functie om de numemrs door elkaar te krijgen door middel van de sorteer en random functie*/
    function shuffle(array){
    return array.sort( ()=>Math.random()-0.5);
    }
    card=shuffle(totaal)


/*value methode die ervoor zorgt dat ieder element uit de array weergegeven wordt in een card*/
let waarde = card.values();
    for (let value of waarde) {



        /*het resultaat weergeven in HTML*/
        resultaat = document.getElementById("card");
        resultaat.innerHTML += `
        <div class="col-lg-3 mt-3">
        <div class="flip-card"style="width: 18rem;">
        <div class="card-body flip-card-inner">
        <div class="flip-card-front"></div>
   <div class="flip-card-back"><p class="card-text"> ${value}</p></div>
    </div>
    </div>
    </div>
  </div>
</div>
`
    }





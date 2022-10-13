let Th = 6 ;
let nbcafe  = 0 ;
let totalcafe = 0;
let totaldose = 0;
let empty = true ;

let interval = setInterval(function () {
    time();
    cafetiere(Th, empty);
    conso(); 
}, 1000)

function time() {
    
    Th = Th + 0.25; //Th += 0.25
    if(Th >= 24){
        Th = 0;
    }
    console.log("Heure :" + Th);
}


function cafetiere(Th) {
    
    const ThStart = 8.5;
    const ThEnd = 16.5;
    const Tprepa = 0.25;
    const Tlimit = 15; 
    let smallCup  = 6;
    let smallCofee = 3;
    let bigCup = 12;
    let bigCofee = 5;
    
    function process (cup , cofee){
        console.log(cup,cofee); 
        nbcafe = cup;
        totalcafe += cup;
        totaldose += cofee;
        empty = false; 
    }
    
    function smallProcess (){
        process(smallCup,smallCofee);

    }
    
    function bigProcess(){
         process(bigCup,bigCofee);
    }
    
    if (Th > (ThStart - Tprepa) && Th < (ThEnd - Tprepa)){
        if(empty){
            if (Th < Tlimit) {
                bigProcess();
            } else {
                smallProcess();
            }
        }
    }else if (Th > (ThEnd - Tprepa)){
        console.log("Nombre total de cafés : " + totalcafe + "Nombre total de doses : " + totaldose);
    }
}

//Consommation de cafés
function conso() {
    if(nbcafe > 0){
        nbcafe--;
    }else{
        empty = true;
    }
    console.log("nombre de café :" + nbcafe);
}














// let long :number = 12;
// let court: number = 6;

// function morning(tasse:number=0, dose:number=5){
// while(tasse <= 12 && heure <=13){
//     tasse++;
//     heure++;
// }


// function afternoon(tasse:number=0, dose:number=3){
// while(tasse <= 6 && heure <=16){
//     tasse++;
//     heure++;
//     return tasse
// }

//     12 -> 0

// }


// let heure = 8
// let min = 10

// if(  )
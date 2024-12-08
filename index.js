// convert today date to input format
// le bloc de code suivant permet d'avoir la date du jour
// const datejour = new Date();
const today = new Date().toISOString().split("T")[0];
start_date.value = today;
// cette ligne de code en dessous permet de ne pas reserver une date dans le passé
start_date.min = today;


// Tmorrow day calc
let tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);

// convert to input format
let tomorrowFormat = tomorrow.toISOString().split("T")[0];
end_date.value = tomorrowFormat;
end_date.min = tomorrowFormat;

start_date.addEventListener("change", (e) => {
    let day = new Date(e.target.value);
    if(end_date.value < start_date.value){
        day.setDate(day.getDate() + 1);
        end_date.value = day.toISOString().split("T")[0]
    }
})

end_date.addEventListener("change", (e) => {
    let day = new Date(e.target.value);
    if(end_date.value < start_date.value){
        day.setDate(day.getDate() -1);
        start_date.max = day.toISOString().split("T")[0];
    }
    
    // if(end_date.value < start_date.value){

    // }
})

// calcul du prix de séjour

const bookingCale = () => {
    let diffTime = Math.abs(
        new Date(end_date.value) - new Date(start_date.value)
    );
    console.log(diffTime);
    // le diffTime est donné en milliseconde et donc on le divise par 1000 pour avoir le nombre de seconde.
    let diffDays = Math.ceil(diffTime / (1000*60*60*24));
    console.log(diffDays);

    total.textContent = diffDays * nightPrice.textContent;
}

start_date.addEventListener("change", bookingCale);
end_date.addEventListener("change", bookingCale);

bookingCale();

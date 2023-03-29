function cookies_function(details){
Cookies.set(`button_clicked` , `yes`);
}
let button_press = document.querySelector(`#clkme_b`);
button_press.addEventListener(`click` , cookies_function)

let get_val = Cookies.get (`button_clicked`)
if(get_val === undefined) {
button_press.insertAdjacentHTML(`afterend` , `<h2>please click button </h2>`);
} else {
    button_press.insertAdjacentHTML(`afterend` , `<h2> congrates you clicked the button </h2>`);
}
Cookies.remove(`button_clicked`);
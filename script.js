let width_entry = document.querySelector("#width");

let height_entry = document.querySelector("#height");

let colour_entry = document.querySelector("#colour");

let box = document.querySelector("#box");

document.querySelector("#apply-button").addEventListener("click", alterBoxAttributes);

function alterBoxAttributes(){
    box.setAttribute("style", `width: 100px; width: ${width_entry.value};
                               height: 100px; height: ${height_entry.value};
                               background-color: black; background-color: ${colour_entry.value};`);
    console.log(box);
}
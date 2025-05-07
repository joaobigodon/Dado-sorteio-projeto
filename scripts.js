function generateNumbers() {

const min = Math.ceil(document.querySelector(".input-min").value)
const max = Math.floor( document.querySelector(".input-max").value)


if( max < min ) {
alert("O numero do input E precisa ser maior do q o outro")
}

else { 
const result = Math.floor(Math.random() * (max - min) + min);
alert(result)
}


}
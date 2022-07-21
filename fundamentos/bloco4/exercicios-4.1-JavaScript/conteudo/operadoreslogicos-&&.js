const currentHour = 12
let menssage = ""

if (currentHour >= 22) {
    console.log("Nao deveriamos comer nada, hora de dormir" )
}
else if (currentHour >= 18 && currentHour < 22) {
    console.log("rango da noite")
}
else if (currentHour >= 14 && currentHour < 18) {
    console.log("Vamos fazer um bolo pra tarde")
}
else if (currentHour >=11 && currentHour < 14) {
    console.log("hora do almoco")
}
else if (currentHour >= 4 && currentHour < 11){
    console.log("Cafezin")
}
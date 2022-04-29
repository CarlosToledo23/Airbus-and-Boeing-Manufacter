var avion=[
"717",
"727",
"737",
"747",
"757",
"767",
"777",
"787 Dreamliner"
];
var imagenes=[
"https://aviacionaldia.com/wp-content/uploads/2020/09/Delta-Boeing-717.jpg",
"https://upload.wikimedia.org/wikipedia/commons/5/57/B-727_Iberia_%28cropped%29.jpg",
"https://www.reportur.com/wp-content/uploads/2020/12/Boeing-737-MAX-AM-1024x696.jpeg",
"https://upload.wikimedia.org/wikipedia/commons/a/ab/D-ABYL_Lufthansa_B748_FRA_%2850549824683%29.jpg",
"https://i0.wp.com/www.transponder1200.com/wp-content/uploads/2021/09/UNITED-AIRLINES-BOEING-757-300-N57857.jpg?fit=1023%2C682&ssl=1",
"https://upload.wikimedia.org/wikipedia/commons/4/43/Delta_Air_Lines_B767-332_N130DL.jpg",
"https://i0.wp.com/www.transponder1200.com/wp-content/uploads/2020/05/EMIRATES-BOEING-B777-300ER-A6-EQA-HB.jpg?fit=1600%2C1066&ssl=1",
"https://www.hispaviacion.es/wp-content/uploads/2020/12/greenliner-1024x507.jpg"
];
var i = 0;
function boeing_model() {
if (i==8) {
i=0;
}
document.getElementById("tipo").innerHTML=avion[i];
document.getElementById("Modelo").src=imagenes[i];
i++;
}
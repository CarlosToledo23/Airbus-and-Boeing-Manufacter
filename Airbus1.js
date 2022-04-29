var model=[
"A300",
"Airbus Beluga",
"Airbus Beluga Xl",
"A310",
"A318",
"A319",
"A320",
"A320NEO",
"A321",
"A321NEO",
"A330",
"A330NEO",
"A340",
"A350",
"A380"
];
var imagen=[
"https://upload.wikimedia.org/wikipedia/commons/2/2c/Airbus_A300B4-603%2C_Lufthansa_AN0520385.jpg",
"https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Airbus_Beluga_Airbus_A300B4-608ST_F-GSTA_%2828858044414%29.jpg/1200px-Airbus_Beluga_Airbus_A300B4-608ST_F-GSTA_%2828858044414%29.jpg",
"https://fly-news.es/wp-content/uploads/BelugaXL-decoracion.jpg",
"https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img/https://www.de-aviones.com/wp-content/uploads/2019/02/8126136016_faf2a9c17c_b-1024x683.jpg",
"https://upload.wikimedia.org/wikipedia/commons/0/0f/F-GUGO_Air_France_Airbus_A318-111%2C_landing_at_Schiphol_%28AMS_-_EHAM%29%2C_Netherlands%2C_pic2.JPG",
"https://i.ytimg.com/vi/8S1SUU3fE3g/maxresdefault.jpg",
"https://e00-elmundo.uecdn.es/elmundo/imagenes/2012/01/17/economia/1326799699_0.jpg",
"http://a21.com.mx/sites/default/files/field/image/A320neo_7.jpg",
"https://aircharterservice-globalcontent-live.cphostaccess.com/images/spain/aircraft/group/111526_airbus-a321-large_tcm71-3646.jpg",
"https://www.aircraft24.es/images/aircraftpics/68/pic_133068_1_large.jpg",
"https://upload.wikimedia.org/wikipedia/commons/f/ff/F-WWCB_A330-203_Airbus_Industrie_TLS_27SEP13_%289972134676%29.jpg",
"https://upload.wikimedia.org/wikipedia/commons/c/c8/Airbus_A330neo_F-WTTN_29.jpg",
"https://i0.wp.com/www.transponder1200.com/wp-content/uploads/2020/03/IBERIA-AIRBUS-A340-EC-JFX.jpg?fit=1024%2C579&ssl=1",
"https://upload.wikimedia.org/wikipedia/commons/d/d6/Qatar_Airways_A350-941_%28A7-ALA%29_landing_at_Frankfurt_Airport.jpg",
"https://actualidadaeroespacial.com/wp-content/uploads/2021/11/Qatar-Airways-vuelve-a-volar-18-meses-despues-parte-de-su-flota-de-A380-121121.jpg"
];
var i = 0;
function airbus_model(params) {
if (i==15) {
i=0;
}
document.getElementById("modelo").innerHTML=model[i];
document.getElementById("avion").src=imagen[i];
i++;
}
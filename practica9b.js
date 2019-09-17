var D = "Lunes,Martes,Miercoles,Jueves,Viernes,Sabado,Domingo" ;

var L = "Madrid.Sevilla.Barcelona.Valencia.Zaragoza.Bilbao.Donosti" ;

var dias = D.split(",");

var lugares = L.split(".");


document.write(dias[0] +' '+ lugares[0]+'<br>');
document.write(dias[1] +' '+ lugares[1]+'<br>');
document.write(dias[2] +' '+ lugares[2]+'<br>');
document.write(dias[3] +' '+ lugares[3]+'<br>');
document.write(dias[4] +' '+ lugares[4]+'<br>');
document.write(dias[5] +' '+ lugares[5]+'<br>');
document.write(dias[6] +' '+ lugares[6]+'<br>');


document.write("abajo los otros <br>")

for (var index = 0; index < dias.length; index++) {
    document.write(dias[index] +' '+ lugares[index]+'<br>');
    
}
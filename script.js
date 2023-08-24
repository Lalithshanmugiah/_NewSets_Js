const store = new Set(["greens","fruits","oil"]);

let output ="";
for (let x of  store){
    output  += x + "<br>";
}
document.getElementById("para").innerHTML=output;
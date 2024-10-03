let brutto = prompt("podaj wartość brutto.")
console.log("wartość netto: " + (brutto * 0.8130))

let obuwie = ["Lasocki", "Gino Rossi", "Jenny Fairy", "DeeZee", "adidas", "Puma", "Reebok", "New Balance", "Converse", "Vans"]
console.log("rozmiar tablicy: "+obuwie.length+". przedostatni element: "+obuwie[obuwie.length-2])

let laptopy = ["Apple","Asus","Dell","HP","Lenovo","Microsoft"]
console.log(laptopy[1]+", "+laptopy[3])

let liczba = prompt("podaj liczbe parzystą.")
if(liczba%2==1){
    alert("wpisana liczba jest nieparzysta.")
}

let budynek = prompt("podaj numer budynku na ulicy kolskiej(10 - 15).")
if(budynek < 10 || budynek > 15){
    alert("nie ma takiego budynku na tej ulicy")
}
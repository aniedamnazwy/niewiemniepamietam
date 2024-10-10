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

let produkty = [["ogurek",15.0],["jabko",1500.99],["autko", 2.50],["gravitrax duży zestaw", 392.99],["catan", 150.0]]
let ktoryProd = prompt("którego produkt podać informacje?")
ktoryProd++
if(ktoryProd > produkty.length || ktoryProd <= 0){
    console.log("nie prawidłowe id(zaczynają się na 1 i kończą się ostatnim produktem)")
}else{
    console.log("nazwa: "+(produkty[ktoryProd][0])+". cena: "+(produkty[ktoryProd][1]))
}

let planeta = prompt("podaj numer planety z układu słonecznego")
switch (planeta){
    case "1":
        console.log("Merkury")
        break;
    case "2":
        console.log("Wenus")
        break;
    case "3":
        console.log("Ziemia")
        break;
    case "4":
        console.log("Mars")
        break;
    case "5":
        console.log("Jowisz")
        break;
    case "6":
        console.log("Saturn")
        break;
    case "7":
        console.log("Uran")
        break;
    case "8":
        console.log("Neptun")
        break;
    }

    let biletyNorm = prompt("podaj ilość biletów normalnych")
    let biletyUlg = prompt("podaj ilość biletów ulgowych")
    console.log("kwota do zapłaty: "+ (biletyNorm*3 + biletyUlg*1.5) +"zł")

    let godzina = prompt("podaj godzine")
    if(godzina>24||godzina<0){
        console.log("nie prawidłowa godzina")
    }else{
        if(godzina >= 6 && godzina <= 11){
            console.log("ranek")
        }
        if(godzina == 12){
            console.log("południe")
        }
        if(godzina >= 13 && godzina < 18){
            console.log("popołudnie")
        }
        if(godzina >= 18 && godzina < 21){
            console.log("wieczór")
        }
        if(godzina > 21 || godzina < 6){
            console.log("noc")
        }
    }

    let pogoda = prompt(" \"Jest słonecznie i pochmurnie\"\n\"Jest słonecznie i powyżej 25 stopni\"\n\"Pada\"\npszepisz na dół jeden z warunków by wyświetlić komunikat")
    if(pogoda.toLowerCase() == "jest słonecznie i pochmurnie"){
        console.log("Idę pobiegać")
    }
    if(pogoda.toLowerCase() == "jest słonecznie i powyżej 25 stopni"){
        console.log("Idę się opalać")
    }
    if(pogoda.toLowerCase() == "pada"){
        console.log("Zostaję w domu i czytam książkę")
    }
    
    let punkt = 0;
    let pyt1 = prompt("Pytanie 1: ile to 2 + 2?")
    if(pyt1 == 4){
        punkt++
    }

    let pyt2 = prompt("P2: napisz \"HELLO WORLD!\"")
    if(pyt2 == "HELLO WORLD!"){
        punkt++
    }

    let pyt3 = prompt("P3: czy kaniuka ma za mało cytryny w oczach?(y/n)")
    if(pyt3 == "y"){
        punkt++
    }

    switch (punkt){
        case 0:
            alert("brzuch boli od pładków.")
            break;
        case 1:
            alert("Adept")
            break;
        case 2:
            alert("Mistrz")
            break;
        case 3:
            alert("Czarnoksiężnik")
            break;
    }

    let kot = prompt("podaj wage kota(1-6)")
    if(kot<1||kot>6){
        alert("zła wartość")
    }else{
        switch (kot){
            case 1:
                console.log("20g")
                break;
            case 2:
                console.log("31g")
                break;
            case 3:
                console.log("41g")
                break;
            case 4:
                console.log("50g")
                break;
            case 5:
                console.log("58g")
                break;
            case 6:
                console.log("66g")
                break;
        }
    }

    let sila = prompt("podaj ładowność ciężarówki(w tonach)")
    let ciez1 = 5, ciez2 = 3, ciez3 = 2
    if(sila<(ciez1+ciez2+ciez3)){
        console.log("ciężarówka się połamała")
    }else{
        console.log("ciężarówka wytrzymała")
    }
    alert("quiz!")
    let odpowiedzi = [["3+3",6],["4*2",8],["5^2",25],["(1+1)*3",6],["2*2^2",8],["8+20-4",24],["1+2+3+4+5",15],["faktorial z 4",24],["20*20",400],["czy kaniuka może mieć cytryne w oczach?(y/n)",y]]
    punkt=0
    for(let i=0;i<odpowiedzi.length;i++){
        let odp = prompt(odpowiedzi[i][0])
        if(odp == odpowiedzi[i][1]){
            punkt++
        }
    }
    if(punkt<=4){
        console.log("Spróbuj jeszcze raz")
    }else{
        if(punkt<=8){
            console.log("Całkiem nieźle")
        }else{
            console.log("Jesteś mistrzem")
        }
    }

    let stolice = ["Warszawa","Paryż","Madryt","Moskwa","Lwów"]
    stolice.forEach(element => {
        console.log(element)
    });
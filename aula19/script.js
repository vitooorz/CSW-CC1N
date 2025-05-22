function clicar() {
    var idade = document.getElementById("idade").value
    idade = parseInt(idade)
    
    if (idade < 0) {
        window.alert("idade invaida")
    }
    
    else if (idade == 0) {
        window.alert("é recem nascido")
    }
    else if (idade > 0 && idade < 10) {
        window.alert("é uma criança")
    }
    else if (idade > 9 && idade < 16) {
        window.alert("é um adolescente")
    }
    else if (idade > 15 && idade < 25) {
        window.alert("é um jovem")
    }
    else if (idade > 24 && idade < 60) {
        window.alert("é um adulto")
    }
    else if (idade > 59) {
        window.alert("é um idoso")
    }
    else {
        window.alert("não digitou nada")
    }

}
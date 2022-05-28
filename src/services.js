

export function somar (a, b){
    return a + b;
}

//commit

export function dobro(num) {
    return num * 2;
}

export function temperatura(graus){
    let msg = "";
    
    if (graus > 37 ) {
        msg = "febre";
    } else {
        msg = "sem febre";
    }
    return msg;
}

export function media(n1, n2, n3) {
    return n1 + n2 + n3 / 3;
}

export function tabuada(numero) {
    for (let i = 1; i <= numero; i++) {
        numero *= i;
    }
    return numero;
}
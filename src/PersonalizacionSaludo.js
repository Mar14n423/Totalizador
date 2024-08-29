function saludar(nombre) {
    return nombre;
}

function edadPersona(edad, genero, idioma) {
    if (idioma === "ES") {
        if (edad > 30) {
            return genero === "F" ? "Sra." : "Sr.";
        } else {
            return genero === "F" ? "señorita" : "joven";
        }
    } else if (idioma === "EN") {
        if (edad > 30) {
            return genero === "F" ? "Miss" : "Mister";
        } else {
            return genero === "F" ? "girl" : "boy";
        }
    } else if (idioma === "FR") { 
        if (edad > 30) {
            return genero === "F" ? "Madame" : "Monsieur";
        } else {
            return genero === "F" ? "jeune fille" : "jeune homme"; 
        }
    }else if (idioma === "PT") {
        if (edad > 30) {
            return genero === "F" ? "Senhora" : "Senhor";
        } else {
            return genero === "F" ? "moça" : "moço"; 
        }
    }
}
function Horario(idioma) {
    const hora = new Date().getHours();
    let saludo;
    if (idioma === "ES") {
        if (hora >= 6 && hora < 12) {
            saludo = "Buenos días";
        } else if (hora >= 12 && hora < 19) {
            saludo = "Buenas tardes";
        } else {
            saludo = "Buenas noches";
        }
    } else if (idioma === "EN") {
        if (hora >= 6 && hora < 12) {
            saludo = "Good morning";
        } else if (hora >= 12 && hora < 19) {
            saludo = "Good afternoon";
        } else {
            saludo = "Good night";
        }
    } else if (idioma === "FR") { 
        if (hora >= 6 && hora < 12) {
            saludo = "Bonjour";
        } else if (hora >= 12 && hora < 19) {
            saludo = "Bon après-midi";
        } else {
            saludo = "Bonne nuit";
        }
    } else if (idioma === "PT") {
        if (hora >= 6 && hora < 12) {
            saludo = "Bom dia";
        } else if (hora >= 12 && hora < 19) {
            saludo = "Boa tarde";
        } else {
            saludo = "Boa noite";
        }
    }
    return saludo;
}

export { saludar, edadPersona, Horario };

const checkRegister = (username, email, pass, pass2) => {
    let errors = [];
    if (!username) {
        errors.push("Por favor inclua seu nome de usuário.")
    } else {
        if (username.length > 19) {
            errors.push("Nome de usuário deve ser menor que 20 caracteres.")
        }
        if (username.length < 3) {
            errors.push("Nome de usuário deve ser maior que 3 caracteres.")
        }
        if (/[^A-Za-z0-9]+/g.test(username)) {
            errors.push("Nome de usuário deve conter apenas letras e números")
        }
    }
    if (!email) {
        errors.push("Por favor inclua seu email.")
    } else {
        if (!/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g.test(email)) {
            errors.push("Email inválido.")
        }
        if (email.length > 254) {
            errors.push("Email inválido.")
        }
    }
    if (!pass) {
        errors.push("Por favor inclua sua senha.")
    } else {
        if (pass.length > 20) {
            errors.push("Sua senha deve ter menos de 20 caracteres.");
        }
        if (pass.length < 8) {
            errors.push("Sua senha deve ter mais de 8 caracteres.")
        }
        if (pass !== pass2) {
            errors.push("As senhas inseridas devem ser idênticas.");
        }
    }
    return errors;
}

module.exports = checkRegister;
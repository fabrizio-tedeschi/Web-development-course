function checkEmailManager(email){
    i = email.indexOf("@")
    if(i < 0){
        return "ERROR: invalid email";
    }

    manager = email.slice(i+1);

    if("gmail.com".localeCompare(manager) === 0){
        return "GOOGLE LLC"
    }

    if("outlook.com".localeCompare(manager) === 0){
        return "MICROSOFT CORP."
    }

    if("icloud.com".localeCompare(manager) === 0){
        return "APPLE INC."
    }

    return manager;
}

out = checkEmailManager("john.doe@gmail.com");
console.log(out);
out = checkEmailManager("mary.rose@outlook.com");
console.log(out);
out = checkEmailManager("tim.cook@icloud.com");
console.log(out);
out = checkEmailManager("lebron.james@libero.it");
console.log(out);
out = checkEmailManager("babaATwow.it");
console.log(out);
const email = "king@yahoo.com";


const maskEmail = email => {
    const amper = email.indexOf("@");
    const address = email.slice(amper, amper.length);
    const mask = email.slice(1 ,amper-1);
    const asterisk = email.replace(mask , "*".repeat(mask.length));
    return asterisk;
}

console.log(maskEmail(email));

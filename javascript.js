const email = "killua@google.com";


const maskEmail = email => {
    if(email.includes("@") == false || email.includes("google.com") == false) {
        return `Email should be google and have a "@". Please try again`;
    }
    else {
        const amper = email.indexOf("@");
        const firstIndex = email[0];
        const domain = email.slice(amper);
        const mask = "*".repeat(amper - 1);
        return firstIndex + mask + domain;
    }
}

console.log(maskEmail(email));

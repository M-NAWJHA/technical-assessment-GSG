// handel the valid email
const validEmail = (email: string): boolean => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
};


let emailTestA = "example@domain.com";
let emailTestB = "invalid-email@domain";
let emailTestC = "user.name+tag@sub.domain.org";

console.log(validEmail(emailTestA));
console.log(validEmail(emailTestB));
console.log(validEmail(emailTestC));
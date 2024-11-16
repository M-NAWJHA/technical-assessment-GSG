// handel the valid email
var validEmail = function (email) {
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
};
var emailTestA = "example@domain.com";
var emailTestB = "invalid-email@domain";
var emailTestC = "user.name+tag@sub.domain.org";
console.log(validEmail(emailTestA));
console.log(validEmail(emailTestB));
console.log(validEmail(emailTestC));

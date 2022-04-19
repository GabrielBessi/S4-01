function passBoss(info1, info2) {
    
    return info1 + info2;
}

let password = passBoss("carioca", "89");

console.log("@" + password);



let newpassword = "@carioca89";

let inversion = newpassword.split("").reverse().join("");

console.log(inversion);


let UpCase = newpassword

console.log(UpCase[1].toUpperCase() + UpCase.slice(2).toLowerCase())
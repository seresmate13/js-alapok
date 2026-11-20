// console.log("Sikeres összekötés ✅");

// // Alapvető perátorok

// const now = 2026;
// const eletkorDavid = now - 2009;
// const eletkorTalaber = now - 2009;

// console.log(eletkorDavid);
// console.log(eletkorTalaber);

// console.log(eletkorDavid *2, eletkorTalaber / 10, 2 ** 3);
 
// const vezetekNev = "Bellai";
// const keresztNev = "Talabér";
// console.log(vezetekNev + " " +keresztNev);

// //Érték adás lehetőségei

// let x = 10 + 5;

// // x = x + 10;

// x += 10;
// x *= 4;

// x ++;
// x --;

// console.log(x);

//Összehasonlító operátorok

// console.log(eletkorDavid >= eletkorTalaber);

// const keresztNev = "Balázs";
// const foglalkozasSzeretne = "kezdő programozó";
// const foglalkozasMarad = "kezdő kábeldugdosó";
// const szuletesiEv = 2009;
// const ev = 2026;

// const balazs = keresztNev + " vagyok, " + (ev - szuletesiEv) + " éves, " + foglalkozasSzeretne + " szeretnék lenni!";
// console.log(balazs);

// const balazsUj = `${keresztNev}n vagyok, ${ev-szuletesiEv} éves, ${foglalkozasSzeretne} szeretnék lenni de, ${foglalkozasMarad} maradok`;
// console.log(balazsUj);
// console.log("Talabér vagyok\n\haladó programozó.");
// console.log(`Talabér vagyok
// haladó programozó`);

// const kor = 16;
// const elegIdos = kor >=18;

// if (elegIdos){
//     console.log(`Teofil ihat bort.🍷`);
// }
// else {
//     const evekHatra = 18- kor;
//     console.log(`Teofil nem ❌ ihat bort 🍷, várnia kell ${evekHatra} évet. ⌛`)
// };

// const szuletesiEv = 2002;
// let szazad;

// if(szuletesiEv <= 2000){
//     szazad = 20;
//     console.log(`${szazad} században születtél.`)
// }
// else{
//     szazad = 21;
//     console.log(`${szazad} században születtél.`)
// }

// console.log(szazad)

// const kor = 18;

// if (kor === 18) console.log("Most lettél nagykorú.");

// console.log(18 === 18);
// console.log(18 == 18);
// console.log(18 === "18");
// console.log(18 == "18");

// const kedvenc = Number(prompt("Mi a kedvnec számod?"));
// console.log(kedvenc, typeof kedvenc);

// if (kedvenc === 23){
//     console.log("A 23 egy nagyszerű szám.");
// }
// else if (kedvenc === 7 ){
//     console.log("A 7 id egy jó szám.");
// }
// else if (kedvenc === 27){
//     console.log("A 27 a legjobb szám.")
// }
// else{
//     console.log("Más számot válazstottál.")
// }

// if (kedvenc !== 27){
//     console.log("Nem értem miért nem 27-et választottál")
// }

// const age = 16;
// const a = age >= 20;
// const b = age < 30;

// console.log(a);
// console.log(b);

// Logikai operátorok

// console.log(!a);
// console.log(a && b);
// console.log(a || b);
// console.log(!a && b);
// console.log(a && !b);

const hasDriverLicence = true;
const hasGoodVision = true;
const isTired = false; 

const shouldDrive = hasDriverLicence && hasGoodVision && !isTired;
if (shouldDrive){
    console.log("Te vezethetsz.");
} else{
    console.log("Neked nem kellene vezetned.");
};
/* 1- Bir string array dizisi tanımlayın. */

const fruits_1: string[] = ["elma", "armut", "çilek"];
fruits_1.push("avokado");

/* concat() fonksiyonu mevcut dizi ile parametredeki değer veya dizileri
birleştirip geri dönderir. Mevcut dizide herhangi bir değişiklik olmaz. */
const fruits_2 = fruits_1.concat("portakal");
console.log(">>>  fruits_1:", fruits_1);
console.log(">>>  fruits_2:", fruits_2);

// Aşağıdaki üç ifade de aynı dizinin kopyasını oluşturur.
const fruits_3 = fruits_1.concat();
const fruits_4 = [...fruits_1];
const fruits_5 = fruits_1.map((item) => item);

console.log(">>>  fruits_3:", fruits_3);

// concat() fonksiyonu string'lerde de vardır. İki stringi birleştirip yeni bir
// string dönderir.
console.log("test".concat("123"));

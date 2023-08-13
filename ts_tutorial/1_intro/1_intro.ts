// Önem derecesi: 10

console.log("merhaba typescript");

/* Bir değişkene ilk değer verdiğimizde artık o değişken sadece o TÜRDEN
değerler alabilir. Örneğin aşağıdaki firstname1 değişkenine verdiğimiz
ilk değerin türü string'dir. Bundan dolayı bu değişkene sadece string
türünden değerler verebiliriz. */
let firstname1 = "nurullah";
firstname1 = "ahmet"; // doğru
// firstname1 = 10; // yanlış
console.log(firstname1);

let age1 = 20;
age1 = 30; // doğru
// age1 = "40"; // yanlış
console.log(age1);

/* Yukarıdaki örneklerdel görüldüğü gibi verilen değerin türü typescript
tarafından belirlenir ve sadece o türdeki değerlerin atanabilmesine
müsade eder. Eğer javascript yazıyor olsaydık orada istediğimiz
türden değer verebilirdik ama bu büyük bir problem. Typescriptin
amacı zaten bu tarz problemlerin önüne geçerek yazılımcıya yardımcı
olmaktır. */

const firstname2 = "saadettin";
console.log(`Merhaba ${firstname2}`);

function printHello(firstname) {
  console.log(`Hello ${firstname}`);
}

printHello("mehmet");

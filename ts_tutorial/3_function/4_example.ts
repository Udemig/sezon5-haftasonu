/* Soru: Matematiksel işlemler yapan bir fonksiyon yazılacak. Fonksiyonda
girilen iki adet sayı olacak ve bir de yapılacak işlemin ismi olacak. Yani
toplamda üç adet parametre girilecek. İşlem sonucu da dönderilecek. Bunu
sağlayan fonksiyon türünü ve implementasyonunu yazınız. */

enum Operation {
  Sum = "+",
  Subtract = "-",
  Multiply = "*",
  Division = "/",
}

type BasicCalculationFnType = (
  no1: number,
  no2: number,
  operation: Operation
) => number;

const basicCalculation: BasicCalculationFnType = (no1, no2, operation) => {
  if (operation === Operation.Sum) {
    return no1 + no2;
  } else if (operation === Operation.Subtract) {
    return no1 - no2;
  } else if (operation === Operation.Multiply) {
    return no1 * no2;
  } else if (operation === Operation.Division) {
    if (no2 === 0) {
      throw new Error("no2 can not be zero");
    }
    return no1 / no2;
  }
  return 0;
};

console.log("Sum: ", basicCalculation(10, 20, Operation.Sum));
console.log("Subtract: ", basicCalculation(10, 20, Operation.Subtract));
console.log("Multiply: ", basicCalculation(10, 20, Operation.Multiply));
console.log("Division: ", basicCalculation(10, 0, Operation.Division));

/* Ödev: Öğrenci isimleri listesiyle öğrenci soyisimleri listesi parametre
olarak verilsin. Bir de üçüncü parametre olarak öğrencilerin hangi şehirde
yaşadıkları dizi olarak verilsin. Fonksiyon bu bilgileri birleştirip
obje dizisi halinde döndersin. Örnek:

const names = ["ahmet", "mehmet", "ayşe", "fatma"]
const surnames = ["foo", "bar", "baz", "kuu"]
const cities = ["izmir, "aydın", "muğla", "antalya"]
const result = exampleFn(names, surnames, cities);
result = [
    {name: "ahmet", surname: "foo", city: "izmir"},
    {name: "mehmet", surname: "bar", city: "aydın"},
    {name: "ayşe", surname: "baz", city: "muğla"},
    {name: "fatma", surname: "kuu", city: "antalya"},
]

Not: obje dizisinin türünü ve parametrelerin türlerini de tanımlayınız.

*/

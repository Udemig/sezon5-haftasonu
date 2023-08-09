/* 
En temel haliyle typescriptte bir fonksiyon parametrelerin türü ve dönüş türünü
belirterek tanımlanır. Türleri tanımladıktan sonra geri kalan herşe aynı
javascriptteki gibidir. Aşağıda en temel haliyle bir fonksiyon tanımlanması
için gerekli olan kurallar belirtilmiştir.

- Parametrelerin türlerinin belirlenmesi gereklidir. Eğer belirtmezsek
  typescript derleme esnasında hata verir.
- Dönüş türünü ihtiyaç durumuna göre belirtebiliriz veya belirtmeyebiliriz.
  Fakat eğer bir fonksiyondan hiçbir değer dönmemesi gerekirse o zaman
  mutlaka `void` olarak dönüş türünü belirtmemiz gerekir. Böylece yanlışlıkla
  bir değer döndermekten korunmuş oluruz.

*/

console.log(">>> Örnek 1:");

// Örnekteki fonksiyondan herhangi bir değer dönmez.
function sum_1(num_1: number, num_2: number): void {
  const total = num_1 + num_2;
  console.log("Total: ", total);

  return;
}

sum_1(10, 20);
sum_1(20, 30);

// sum_1 fonksiyonundan void türünde değer döndüğü için (yani aslında
// hiçbir değer dönmediği için) result_1'in türü de void olur.
const result_1 = sum_1(10, 20);

console.log(">>> Örnek 2:");

// Bu örnekte çarpma işleminin sonucunu geri dönderir.
function multiply_1(num_1: number, num_2: number): number {
  return num_1 * num_2;
}

console.log(multiply_1(20, 30));

const result_2 = multiply_1(20, 30);
console.log(result_2);

/* Buraya isimli fonksiyonların tanımlanması ile ilgili açıklamalarda
bulunup birkaç örnek yaptık. Fakat bildiğimiz üzere javascriptte farklı
şekillerde fonksiyonlar tanımlanabilmekte (örn. arrow function ve nameless
(isimsiz) function). Bunlarla ilgili bilgiler sonraki konuda işlenmiştir. */

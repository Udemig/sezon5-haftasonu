/* Dizi tanımlamak için türün sonuna içi boş dizi ifadesi eklenir.
Örneğin aşağıda elemanları sadece string olabilen bir dizi
tanımlanmıştır. Artık bu diziye sadece string atanabilir.
Not: Javascriptte böyle bir kontrol olmadığını unutmayalım. */

const students_1: string[] = [
  "ahmet",
  "mehmet",
  "ayşe",
  "fatma",
  "hüsamettin",
  "abdülcabbar",
];
console.warn("🔥 | students_1:", students_1);

/* Yukarıdaki örnekte ilk değer ataması yapılırken dizi içerisine
elemanlar ekleyebiliriz. Aşağıdaki örnekte de ilk değer ataması
yapılırken dizinin içeriği boş olabilir. Fakat sonradan bu diziye
değer eklemek istenirse yine dizi elemanlarının türüne bağlı olarak
ekleme yapılabilir. */
const attendeds_2: boolean[] = [];
attendeds_2.push(false);
attendeds_2.push(false);
attendeds_2.push(true);
attendeds_2.push(true); // doğru
// attendeds_2.push("test"); // yanlış atama yapıldı çünkü değer boolean olmalı.

attendeds_2.push(true);
attendeds_2.push(true);

/* Javascriptten bildiğimiz tüm dizi fonksiyonları aynen typescriptte de
mevcuttur. Örneğin map(), forEach(), push() vs. Bundan dolayı mevcut
bir diziye sonradan ekleme yapılabilir veya herhangi bir dizi fonksiyonu
çağırılabilir. */

students_1.push("şabaniye");
attendeds_2.push(false);

/* Typescriptte dizi elemanlarına ulaşabilmek için köşeli parantez içerisine
index numarasını yazarak ulaşabiliriz. Bu yöntem javascriptte de mevcuttu
ve aynen typescript içerisinde de kullanılabilir. */
console.log("Üçüncü öğrencinin ismi: ", students_1[3]);
console.log("Üçüncü öğrenci bugün derse katıldı mı: ", attendeds_2[3]);

/* Örnek 1: map() fonksiyonunun kullanılması:
Öğrenci isimlerini ve bugünki derse katılıp katılmadıklarını string olarak
tutan bir dizi oluşturalım.
*/

const attend_results_1: string[] = students_1.map((student_name, index) => {
  if (attendeds_2[index]) {
    return student_name + " derse katılmıştır.";
  } else {
    return student_name + " derse katılmamıştır.";
  }
});
console.warn("🔥 | attend_results_1:", attend_results_1);

/* Önemli not: map() ve forEach() fonksiyonları FONKSİYON alır. Bunu
adınız soyadınız gibi bilin. */
// Aşağıdaki ifade bir fonksiyondur.
//   (item) => item;
//
// Bu da bir fonksiyondur.
//   () => {};
//
// Soru: Yukarıdaki fonksiyonlardan ne döner?

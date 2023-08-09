/* Şimdiye kadar yazdığımız fonksiyonlarda tüm parametreler için
değer girilmesi mecburiydi. Ama bazı durumlarda bazı parametrelerin
değerini yazmak gerekmeyebilir. Örneğin fullname dönderen bir fonksiyonda
ortanca ismi olmayanlar için iki tane, ortanca ismi olanlar için ise
üç tane parametre gerekir. Burada bazı isimler için iki bazıları için
üç parametre girerek aynı fonksiyonu çağırmak gerekiyor. Yani son
parametre opsiyonel olmalı. */

/* Opsiyonel parametre belirtmenin bazı kuralları vardır.

- Opsiyonel olmasını istediğimiz parametrenin sonuna soru işareti koyarız.

- Opsiyonel olacak olan parametreler en sonda olmalı. Yani başta veya ortadaki
  parametreler opsiyonel olamaz. Örnek:
    exampleFn(name?: string, lastname: string)  // Bu hatalıdır çünkü
                                                   name ifadesi opsiyonel olamaz.
    
    exampleFn2(name: string, lastname?: string) // Bu doğru bir tanımlamadır.

- Opsiyonel olan parametrelere bir değer atanmamışsa onların değeri undefined'dır.

*/

type CombineFullnameFnType_2 = (
  name: string,
  middleName?: string,
  lastname?: string
) => string;

const fullnameCreator_1: CombineFullnameFnType_2 = (
  name,
  middleName,
  lastname
) => {
  return name + " " + middleName + " " + lastname;
};

console.log(fullnameCreator_1("ulviye", "yaprak"));
console.log(fullnameCreator_1("ahmet"));

/* Şimdi gelelim hangi değerin hangi parametreye karşılık geleceği konusuna.
Bir fonksiyonu çağırırken gönderilen değerler parametre listesindeki sıraya
göre atanır. Bu durumda yukarıdaki örnekte "ulviye" ifadesi `name` parametresine,
"yaprak" ifadesi de `middleName` parametresine karşılık gelir. Ama biz
biliyoruz ki "yaprak" ifadesi aslında soyisimdir. Fakat "yaprak" ifadesi
`middleName` parametresine karşılık gelmiştir. Bu farklılığı kontrol altında
tutmak için bazı algoritmik işlemler yapmak gerekiyor. */

const fullnameCreator_2: CombineFullnameFnType_2 = (
  name,
  middleName,
  lastname
) => {
  if (!middleName) {
    console.log("middleName yok, sadece name'i dönder.");

    return name.toLowerCase()[0]?.toUpperCase() + name.toLowerCase()?.slice(1);
  } else if (typeof lastname === "undefined") {
    // `if (!lastname)` bu ifade de kullanılabilir

    console.log(
      "middleName var ama lastname yok, o zaman name ve middleName dönder."
    );

    name = name.toLowerCase()[0].toUpperCase() + name.toLowerCase().slice(1);
    middleName =
      middleName.toLowerCase()[0]?.toUpperCase() +
      middleName.toLowerCase()?.slice(1);

    return `${name} ${middleName}`;
  }

  console.log("Tüm parametreler dolu geldi.");

  name = name.toLowerCase()[0].toUpperCase() + name.toLowerCase().slice(1);

  middleName =
    middleName.toLowerCase()[0]?.toUpperCase() +
    middleName.toLowerCase()?.slice(1);

  lastname =
    lastname.toLowerCase()[0]?.toUpperCase() + lastname.toLowerCase()?.slice(1);

  return `${name} ${middleName} ${lastname}`;
};

console.log(fullnameCreator_2("ulviye"));
console.log(fullnameCreator_2("ulviye", "yaprak"));
console.log(fullnameCreator_2("merve", "özbağ", "okumuş"));

//////////////////////
/* Örnek: Bir öğrencinin sınav bilgilerinin girildiği ve bunların
ortalamasının alınarak not bilgisini AA-FF aralığında veren bir
fonksiyon türünü yazıp implement edin. */

type ExamGradeType = "AA" | "BA" | "BB" | "CB" | "CC" | "DC" | "DD" | "FF";

type ExamGradeFinderFnType = (
  vize: number,
  final: number,
  butunleme?: number
) => ExamGradeType;

const examGradeFinder: ExamGradeFinderFnType = (vize, final, butunleme) => {
  let ortalama = vize * 0.4 + final * 0.6;
  console.log(">> Vize-final ortalaması: ", ortalama);

  /* if'leri yapılacak işin durumuna göre belirleriz. Bazen iki tane if
  yazmak gerekirken (yukarıdaki örnekteki gibi) bazen de tek if yeterlidir. */
  if (ortalama < 40 && butunleme) {
    ortalama = vize * 0.4 + butunleme * 0.6;

    console.log(
      ">> Finalden yeterli puan alamadı, vize-büt ortalaması: ",
      ortalama
    );
  }

  if (ortalama < 40) {
    return "FF";
  } else if (ortalama < 50) {
    return "DD";
  } else if (ortalama < 55) {
    return "DC";
  } else if (ortalama < 60) {
    return "CC";
  } else if (ortalama < 65) {
    return "CB";
  } else if (ortalama < 70) {
    return "BB";
  } else if (ortalama < 85) {
    return "BA";
  } else {
    return "AA";
  }
};

//console.log("Ahmetin sınav sonucu: ", examGradeFinder(45, 30));
console.log("Mervenin sınav sonucu: ", examGradeFinder(43, 35, 80));

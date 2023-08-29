/* Object Oriented Programming (OOP)

Bilgisayarlar ilk çıktıkları dönemde yazılan programlar davranış tabanlı
olarak yazılıyordu. Bunun diğer ifadesi fonksiyonel programlama. Fakat
bilgisayarlar güçlendikçe ve ihtiyaçların karmaşıklığı arttıkça bu yöntemin
yetersiz olduğu anlaşıldı. Bundan dolayı yeni programlama yöntemleri
yani paradigmaları bulunmaya çalışıldı.

Bu paradigmalar (yani yöntemler) arasında en çok tercih edilen yöntem
nesne tabanlı programlama yaklaşımıdır. Bu yöntemde gerçek dünyayı
simüle ettiğimiz varsayılır. Yani örneğin vantilatör nesnesini yazılım
içerisinde ifade ederken hem fiziksel özelliklerini (yani data veya property)
hem de davranışsal özelliklerini (yani methodlarını) tutan bir yapı şeklinde
yazabiliriz.

OOP yöntemiyle kodlama yapmak için ihtiyacımız olan iki tane keyword vardır.
Bunlardan birincisi `class` keywordü, ikincisi de `interface` keywordü.
Bugün class'lar üzerinde duracağız. Diğerini ilerleyen derslerde göreceğiz.

*/

/* Typescriptte class nasıl yazılır? Önce `class` keywordü, ardından isim,
ardından süslü parantezler yazılır. */

class AirFan_1 {
  // property'leri tanımlayalım:
  openCloseButton: boolean;
  level: AirFanLevelEnum;
  usageType: AirFanUsageType_1;

  // method'ları tanımlayalım:
  filter() {
    // burası methodun gövdesi (yada implementasyonu)
    console.log("filter() methodu invoke edildi.");
  }

  /* Önceki konuyu */
  forEach(param: (item: any, index: number, originalArr?: any[]) => undefined) {
    // burası methodun gövdesi
    console.log("forEach() methodu invoke edildi.");
  }
}

type AirFanUsageType_1 = "desktop" | "mobile";

// property'lerin türünü tanımlarken kendi oluşturduğumuz türleri de kullanabiliriz.
enum AirFanLevelEnum {
  Level_1,
  Level_2,
  Level_3,
}

/* Önemli not: Özellik veya data bir nesnenin içerisindeyse onun ismi
"property" olur, davranış yani fiil bir nesnenin içerisindeyse onun
ismi de "method" olarak isimlendirilir. */

/* Bir class tanımlandığında sadece tanımlanmış olması bir iş yapmaz.
Bu class'tan faydalanabilmek için veya bu classı faaliyete geçirebilmek
için (veya kullanmak için) bu class'ın çalışan bir kopyasını oluşturmamız
gerekiyor. Bu kopyalara farklı isimler verilebilir. Bu isimler obje ve
instance olarak söylenebilir. */
const airfan_obj_1 = new AirFan_1();
const airfan_obj_2 = airfan_obj_1;
const airfan_obj_3 = new AirFan_1();
const airfan_obj_4 = new AirFan_1();

/* Aşağıdaki satırda AirFan_1 class'ının yeni bir kopyası yani yeni bir
ojbesi oluşturulur. Ama bu objenin referansı "eşittir" ifadesi vasıtasıyla
bir değişkene aktarılmadığı için bu obje hemen ölür. Sonuç olarak aşağıdaki
satır validdir yani geçerlidir ama çoğu durum için mantıksızdır (anlamsızdır). */
new AirFan_1();

/* Class içerisinde tanımlanmış olan method ve property'ler doğrudan
class tarafından kullanılamazlar. Bunları kullanabilmek için önce
o class'ın yeni bir instance'ını (veya bir diğer ifadeyle kopyasını
veya yeni objesini) oluşturmamız gerekir. Bunu oluşturmak için `new`
operatörünü kullanırız.

`new` bir operatördür ve tek taraflı çalışır. Kendisinin sağında bulunan
class'ın yeni bir kopyasını (objesini) oluşturur ve bu kopyanın referansını
"eşittir" ifadesi vasıtasıyla değişkene aktarır.
*/

// class'ta tanımlanan fonksiyonlar class ismi vasıtasıyla çağırılamazlar.
// Bu methodlar sadece yeni bir instance tarafından kullanılabilir olurlar.
//AirFan_1.forEach();

// Aşağıdaki değişken AirFan_1 isimli class'ın bir kopyasıdır. Bu sebepten
// dolayı forEach() fonksiyonuna erişim sağlayabilmekteyiz. Çünkü bu fonksiyon
// aslında AirFan_1 isimli class'ın kopyasının içerisinde yaşamaktadır.
airfan_obj_1.forEach((item, index, originalArr) => undefined);

/* JSON: Javascript Object Notation */

/* TODO: Referans ve değer olaylarını göster. */
const objx = {
  id: 1,
  firstname: "test",
  lastname: "example",
};

const objy = objx;
const obja = objy;
const objb = obja;
const objc = objb;

objb.id = 3;
console.log(objc);

objc.id = 5;
console.log(objx);

let name1 = "ahmet";
let name2 = name1;
console.log(name1);
console.log(name2);

name2 = "mehmet";
console.log(name1);
console.log(name2);

/*
Soru: yukarıdaki konsol çıktısı aşağıdakilerden hangisidir?
A: 1     B: 5     C: Hiçbiri      D: Hepsi      E: Bilmiyorum

Cevap: B

Çünkü bir objeyi bir değişkene aktardığımızda aslında o objeyi aktarmış
olmayız. Objenin referansını aktarmış oluruz. Bu sebepten dolayı `{ id: 1 }`
objesi hafızada tutulur ve referansı objx isimli değişkene aktarılır. Sonraki
satırlardaki tüm eşilikler referans aktarımı şeklinde yapılır. Dolayısıyla tüm
değişkenler aynı objeyi gösterirler (yani `{ id: 1 }` objesini). Sonuç olarak
herhangi bir değişkenin id propertysini set edersek hepsi aynı objeye baktığı
için 5 değeri ekrana yazılır.
*/

let number_x = 10;
let number_y = number_x;
let number_a = number_y;

number_a = 5;
console.log(number_x);

/* Ama primitive türlerde işler farklı. Burada bir referans paylaşımı yok,
doğrudan her değişken için ayrı değerler oluşturulur. Bu yüzden
number_a'nın değeri 5, number_x'in değeri 10 olarak kalır. */

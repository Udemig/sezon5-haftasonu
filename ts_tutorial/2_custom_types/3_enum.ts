/* Bazı verlerin miktarı hiçbir zaman değişmez. Örneğin gün isimleri, ay isimleri gibi.
Bu tarz sayılabilen ama değişmeyen dataları ifade etmek için enum kullanılır. Zaten enum
ismi enumeration (saymak) ifadesinin kısaltılmışıdır.

Enum'ları tanımlarken önce `enum` keywordu yazılır. Ardından data setimizin ismi
yani enum'ın ismi yazılır. Ardından süslü parantezler içerisine datalar yazılır.
Fakat burada dataların kendileri string şeklinde yazılmaz. Fakat bu datalar
aslında arka planda number olarak düşünülebilir. Dolayısıyla ilk ifadenin
karşılığı 0 (sıfır)'dır.
*/

enum Days {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

enum Months {
  January,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December,
}

// enum kullanmadığımızda kendimiz algoritma geliştirmemiz gerekir.
// örneğin aşağıdaki gibi stringler veya numberlar ile gün isimlerini
// tutan değişkenler ve gün isimlerini veren fonksiyonlar yazarark amacımıza
// ulaşmamız gerekir. Fakat bu kadar uğraşmak yerine enum kullanmak
// daha kolaydır.
let today_1: string = "monday";
let today_2: number = 0;
function getDayName(day: number | string) {
  // buraya algoritma yazmak gerekiyor.
}

// enum kullandığımızda datanın türünü belirlemek için algoritma oluşturmamıza
// gerek kalmaz. Doğrudan enum türünü belirleyip set edebiliriz.
const turkeyFirstDay: Days = Days.Monday;

/* Enum türündeki bir değişkeni hem enum'ın herhangi bir değeriyle
karşılaştırabiliriz hem de number türünden bir değerle karşılaştırabiliriz.
Aşağıdaki iki `if` ifadeleri de doğrudur. */
if (turkeyFirstDay === Days.Monday) {
  console.log("Evet, Türkiye'nin ilk günü pazartesidir.");
}
if (turkeyFirstDay === 0) {
  console.log("Evet, Türkiye'nin ilk günü pazartesidir.");
}

// turkeyFirstDay değişkenine Friday datası atandı. Ama bunu konsolda çıktı alırken
// 0 (sıfır) olarak yazıldığını görmekteyiz.
console.log(">>>  turkeyFirstDay number:", turkeyFirstDay);
// Çıktı: 0

// turkeyFirstDay ifadesi 4 olduğuna göre bu sayıya karşılık gelen değerin
// string halini almak için Days isimli enum'ın elemanı gibi kullanmak gerekir.
console.log(">>>  turkeyFirstDay string:", Days[turkeyFirstDay]);
// Çıktı: Monday

// *************************************************************** //

/* Örnek 1: Okulumuza kayıt olan öğrencilerin isimlerini, kaçıncı
sınıfa kayıt olduklarını ve hangi tarihte kayıt olduklarını tutan
bir type oluşturun ve bunu bir değişkende kullanın. */

enum SchoolClass {
  Class_1A,
  Class_2A,
  Class_2B,
  Class_3A,
  Class_3B,
  Class_3C,
}

type StudentType = {
  name: string;
  lastname: string;
  school_class: SchoolClass;
  register_year: number;
  register_month: Months;
  register_day: number;
};

const udemig_ioo_students: StudentType[] = [];

udemig_ioo_students.push({
  name: "nurullah",
  lastname: "bedir",
  school_class: SchoolClass.Class_3B,
  register_day: 1,
  register_month: Months.April,
  register_year: 2023,
});

/* Aslında mantıksal olarak herşeyi (evet herşeyi) stringlerle ifade edebiliriz.
Ama farklı data türlerinin farklı problemleri daha iyi çözebilmesinden dolayı
bu kadar çok miktarda data türü mevcuttur. Bu yüzden bazı problemleri enum ile,
bazılarını union ile, bazılarını array ile, bazılarını da primitive türlerle
çözmek daha uygundur. Burada yazılımcının inisiyatifi devreye girer. O problem
için en uygun türleri belirleyip en az miktarda kod yazarak problemi çözmemiz
gerekir. */
// let my_age: string = "34";
// my_age = "" + (parseInt(my_age) + 3);
// console.log(my_age);
// Çıktı: "37"

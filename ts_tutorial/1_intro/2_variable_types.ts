/* Bir değişkenin türünü belirlemek için değişken isminden sonra
iki nokta üstüste yazılır ve sonra türün ismi yazılır. Standart
türler aşağıda belirtilmiştir. */

let firstname3: string;
firstname3 = "ezgi";
firstname3 = "ismail";
firstname3 = "hakan";
console.warn("🔥 | firstname3:", firstname3);

/* typeof ifadesi hem javascript hem typescript içerisinde mevcuttur.
Orjinaline javascriptten gelmiştir, typescriptin icat ettiği birşey
değildir. Fakat javascript ve typescriptteki davranışları farklıdır.
Normal şartlarda javascript ile bir proje geliştirirken typeof ifadesini
pek kullanmayız (hatta hiç kullanmayız). Ama typescriptte işler değişiyor.

>> Typescript içerisinde typeof kullanımı:

1- Typescriptte typeof ifadesini eğer console.log içerisinde kullanırsak
yaptığı tek iş kendisinden sonraki değeri veya değişkenin primitive türünü
verir ve bu tür ekrana yazılır. Örneğin aşağıdaki kodun çıktısı şu şekildedir:

firstname3 type:  string

*/
console.log("firstname3 type: ", typeof firstname3);

/* 2- `if` içerisinde typeof kullanmak mümkündür. Bu bir değişkenin union
türünden tanımlandığı durumlarda tercih edilir. Örneğin aşağıdaki
değişken string veya number alabilir. Bu değişkenin türüne göre
farklı işlemler uygulanabilir. */

let input_age_1: string | number = "30";

/* if içerisinde typeof kullanılırsa burada typeof ifadesinden sonraki
değerin veya değişkenin türünün string halini verir. Yani "string", "number",
"boolean", "object", "null", "undefined" gibi. */
if (typeof input_age_1 === "string") {
  console.log("yaşınızın yarısı: ", parseInt(input_age_1) / 2);
} else if (typeof input_age_1 === "number") {
  console.log("yaşınızın yarısı: ", input_age_1 / 2);
}

switch (typeof input_age_1) {
  case "string":
    console.log("input_age_1'in türü string'dir.");
    break;

  case "number":
    console.log("input_age_1'in türü number'dır.");
    break;
}

/* Bu değişkene sadece string türden değerler atanabilir. Null veya
undefined veya başka bir türden değer atanamaz. */
// firstname3 = null; // error

let age3: number;
age3 = 10;
age3 = 20;
console.warn("🔥 | age3:", age3);

/* Typescriptte type'lar iki kategoriye ayrılabilir. Birincisi
primitive type'lar, ikincisi de advanced (custom) type'lar. İlk
olarak primitive type'lardan bahsedelim.

- Primitive type:
    Javascript aslında temel type'lara sahip bir dildir. Sadece
biz değişkenleri tanımlarken onların alabileceği type'ları belirtemeyiz.
Bu type'lar o değişkenin sahip olduğu değere göre otomatik olarak
javascript tarafından belirtilir. Aşağıda javascript'te default olarak
gelen type'lar gösterilmektedir. (Yıldız olanlar en çok kullanacağımız
type'lardır.)
    - string *
    - number *
    - boolean *
    - object *
    - null *
    - undefined *
    - bigint
    - symbol

*/

let did_attended_1: boolean = true;
console.warn("🔥 | did_attended_1:", did_attended_1);

let student_1: object = {
  id: 1,
  firstname: "ahmet",
  lastname: "test",
};
console.warn("🔥 | student_1:", student_1);

student_1 = {
  foo: "foo",
  bar: "bar",
};
console.warn("🔥 | student_1:", student_1);

/* Normalde bu derste bir adet tür tanımlamayı gösterdik fakat
aşağıdaki örnekteki gibi birden fazla türü de kullanmak mümkün.
Bu şekildeki pipe işaretiyle birleştirilerek type tanımlama
yöntemine "union type" denir. Bu konuyu ilerleyen derslerde
daha detaylı bir şekilde işleyeceğiz. */
let not_cared_person_1: string | null = "test";
console.warn("🔥 | not_cared_person_1:", not_cared_person_1);

/* Bu değişkenin türü union olduğu için (yani farklı türlerde
değer alabildiği için) null ataması yapabiliriz. */
not_cared_person_1 = null;

/* Interface (arayüz):

Inheritence hiyerarşisinde class'lar sadece bir class'ı extend edebilirler.
Fakat bazı durumlarda birden fazla class'ı extend etmemiz gerekebiliyor.
Typescriptten birden fazla class'ı extend edemeyiz ama birden fazla interface'i
implement edebiliriz. Bu sayede bir classın farklı kapsamdaki özelliklere
sahip olmasını sağlayabiliriz.

Özellikler:
- Interface'leri isimlendirirken sonuna "Interface" takısını veya ön tarafına
  "I" takısını ekleyebiliriz. Bu sayede interface'leri ismine bakarak bunların
  interface olduğunu daha iyi anlarız.
- Interface'lerin property ve methodlarına erişim belirteci yazamayız. Çünkü
  bunların hepsi public olmak zorunda olduğundan erişim belirteci yazmak
  anlamsız olur.
- Birden fazla interface implement edilebilir. Interfaceler yazılırken aralarına
  virgül konur.
- Interface'ler type gibi kullanılabilir. Yani bir değişkenin türü olarak tanımlanıp
  aynı type'larda olduğu gibi süslü parantezle doğrudan atama yapılabilir. Burada
  dikkat edilmesi gereken şey interface'in sahip olduğu tüm elemanların bu değer
  içerisinde tanımlanması gerekiyor.

*/

interface FooInterface {
  // örnek propertyler
  foo: string;
  bar: number;
  baz: boolean;

  // örnek methodlar
  method1(): any;
  method2(param1: string, param2: string): string;
}

interface BarInterface {
  qux: object;

  method3();
}

/* Tüm interface'ler yapıları gereği soyut (abstract) oldukları için class'lar
bunları implement ederler. Ama başka bir class'ı miras almak istediğinde
orada "extends" ifadesini kullanması gerekir. Birden fazla interface
implement ederken interface'ler arasına virgül yazılır.

Önemli not: Classlar başka bir class'ı extend eder, başka interfaceleri implement eder.
*/
class ExampleClass_9 implements FooInterface, BarInterface {
  /* Aslında interface'lerden miras alınmaz. Interface'ler bir class'ın
    iskeleti durumunda oldukları için her interface'in barındırdığı elemanlar
    class'ların içerisinde de yazılmak zorunda. */
  foo: string;
  bar: number;
  baz: boolean;
  qux: object;

  method1() {
    console.log("Method 1 implementasyonu");
  }

  // Methodun dönüş türünü yazmasak bile implement edilen interface vasıtasıyla
  // dönüş türü otomatik tespit edilir.
  method2(param1: string, param2: string) {
    return "test";
  }
  method3() {
    console.log("example class 9 içerisindeki method3");
  }
}

class ExampleClass_10 implements FooInterface, BarInterface {
  foo: string = "example class 10";
  bar: number = 10;
  baz: boolean;
  qux: object = {
    id: 1,
  };

  method1() {
    console.log("Bar değeri: " + this.bar);
    console.log("Test örnek mesela");
  }
  method2(param1: string, param2: string) {
    return param1 + param2;
  }
  method3() {
    console.log("example class 10 içindeki method 3 çalıştı", this.bar);
  }
}

/* Burada FooInterface'i doğrudan bir değişkene type olarak belirtiliyor.
Bu durumda atanan değer bu interface'in tüm elemanlarına sahip olmak
zorunda. */
const foo_4: FooInterface = {
  foo: "test",
  bar: 10,
  baz: true,
  method1() {},
  method2(param1, param2) {
    return "";
  },
};

interface ExampleOptionalInterface_1 {
  // required property
  foo: number;

  // optional property
  bar?: string;
}

class ExampleClass_8 implements ExampleOptionalInterface_1 {
  // Sadece foo property'sini tanımlamak yeterli. bar property'si
  // opsiyonel olduğu için tanımlamak zorunda değiliz.
  foo: number;

  // bar property'sini istersek tanımlayabiliriz. Önemli olan tür
  // bilgisi aynı olmalı.
  //bar: string;
}

/* `instanceof` ifadesinin classlar ile kullanımı:

*/

const obj16 = new ExampleClass_9();
const obj17 = new ExampleClass_10();

console.log(obj16 instanceof ExampleClass_9); // true
console.log(obj16 instanceof ExampleClass_10); // false

console.log(obj17 instanceof ExampleClass_9); // false
console.log(obj17 instanceof ExampleClass_10); // true

console.log(typeof obj16); // Çıktı: object
console.log(typeof obj17); // Çıktı: object

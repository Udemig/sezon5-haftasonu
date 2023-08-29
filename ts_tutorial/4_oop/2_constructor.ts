/* Objelerin özelliklerini yani property'lerini sonradan set edebiliriz.
Fakat çoğu durumda instance oluşturma esnasında bu property'leri belirlemek
gerekir. Yani bir diğer ifadeyle objeyi initialize etmemiz gerekir. Bunu
yapmak için özelleştirilmiş bir fonksiyon yazmamız gerekir. Bu fonksiyonun
ismi `constructor()` fonksiyonudur.

Özellikler:

- Constructor özel bir isimdir ve sadece `new` operatörü kullanıldığı
  anda otomatik olarak bir kez çağırılır ve sonra çağırılamaz.

- Constructorın parametresine gelen değeri objenin property'sine set
  etmek istiyorsak türlerinin aynı olması gerekiyor.

- 

- 

*/

class ExampleClass_1 {
  foo: string;
  bar: number;
  baz: boolean;

  constructor(foo: string) {
    console.log("ExampleClass_1 classının constructor() methodu çağırıldı.");

    /* Parametreden gelen `foo`'yu `this.foo` property'sine gönderiyoruz. Bu
    sayede objenin property'sini initialize etmiş oluruz. */
    this.foo = foo;

    /* Yeni oluşturulacak olan objenin property'lerini set etmek için
    constructor parametresinden değer gelmesine gerek yoktur. Property'lere
    isteğe bağlı olarak uygun değerler verip initialize edebiliriz. */
    this.bar = 0;
    this.baz = true;
  }

  printFoo() {
    console.log("foo: ", this.foo);
  }
  printBar() {
    console.log("bar: ", this.bar);
  }
  printBaz() {
    console.log("foo: ", this.baz);
  }
}

console.log("Yeni bir ExampleClass_1 objesi oluşturuluyor.");

// Burada yeni bir instance oluşturma esnasında property'yi set ediyoruz.
const obj5 = new ExampleClass_1("test");
console.log("Yeni bir ExampleClass_1 objesi oluşturuldu, obj5:", obj5);

// Normalde property'leri sonradan set edebiliriz.
//obj5.foo = "foo";

obj5.printFoo();

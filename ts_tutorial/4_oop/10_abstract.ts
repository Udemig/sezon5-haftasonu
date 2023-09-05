// Önem derecesi: 8

/* Abstract class:

Önceki konulardan hatırlarsak extend edilen class'ların methodları
override edilebiliyordu. Bunu yaparken override edilen methodun
prototipine bağlı kalınarak bu işlem yapılıyordu. Abstract class'larda
da aynı durum mevcut sadece bazı methodların implementasyonu (veya
başka bir ifadeyle override edilmesi) extend eden class tarafından
yapılması mecbur edilir.

Özellikler:

- Bir class'ın abstract olduğunu belirtmek için `abstract class` şeklinde
  tanımlanmaya başlanır.
- Abstract olarak tanımlanmış classlarda bir methodun abstract olması için
  erişim belirtecinden sonra `abstract` yazılır. Yani `public abstract`
  şeklinde yazılmalı, `abstract public` şeklinde yazılamaz.
- Bir abstract class'ı extend eden child class mutlaka tüm abstract methodları
  implement etmek zorundadır.
- Abstract class'ler tek başlarına yeni obje oluşturmak için kullanılamazlar.
  Mutlaka bunların child class'larını yazıp o child class'lardan obje
  oluşturulmalı. Çünkü abstract class'ların içerisinde henüz gövdesi implement
  edilmemiş olan methodlar mevcut olabilir.
- Abstract class'lar birbirini extend edebilir. Bu durumda parent class'taki
  tüm abstract methodların implement edilmesi zorunlu değildir.
- Abstract methodlar private olamaz, çünkü o zaman extend eden classlar
  tarafından erişilemez. Böyle bir problem olmaması için protected veya
  public olarak tanımlanmalıdırlar.
*/

// Önemli not: abstract methodlar ile fonksiyon type'ları birbirine
// benzerler ama aynı şey değildir. Bu yüzden bunların her biri aslında
// farklı sintaksa sahip olan kod bloklarıdır.
type ExampleFnType = () => void;
const exampleFn: ExampleFnType = (): void => {};

abstract class ExampleAbstractClass_1 {
  // Bu method bu class içerisinde implement edilmedi. Bundan dolayı
  // bu class'ı extend eden class'lar bu methodu implement etmek zorunda.
  // Abstract methodun dönüş türünü belirtmek için ikinokta kullanılır.
  abstract method1(param1: number, param2: string): string;

  public method2() {
    // Bu methodun implementasyonunu bu class içerisinde yapabilirim.
    console.log("ExampleAbstractClass_1 içerisindeki method2 çağırıldı.");

    /* abstract methodlar başka methodlar tarafından çağırılabilir. Her
    ne kadar abstract methodun implementasyonu child class'lar tarafından
    yapılıyor olsa bile parametre ve dönüş türleri belli olduğu için
    algoritmada bir problem oluşturmaz. */
    const result = this.method1(10, "test");
    console.log("Result: ", result);
  }
}

// Bu satır hata verir çünkü abstract class'lardan obje oluşturulamaz.
//const obj13 = new ExampleAbstractClass_1();

class ExampleClass_5 extends ExampleAbstractClass_1 {
  method1(param1: number, param2: string): string {
    // örneğin aşağıdaki gibi bir implementasyon yapalım:
    return param1 + param2;
  }
}

class ExampleClass_6 extends ExampleAbstractClass_1 {
  method1(param1: number, param2: string): string {
    // Her class için bu abstract methodun implementasyonu farklı olabilir.
    // Bu farklılığı göstermek amacıyla aşağıdaki kod yazıldı.

    if (param1 < 0) {
      return "negatif";
    } else if (param1 > 0) {
      return "pozitif";
    } else {
      return param2;
    }
  }
}

const obj14 = new ExampleClass_5();
const obj15 = new ExampleClass_6();

console.log("obj14.method1: ", obj14.method1(10, "foo"));
console.log("obj15.method1: ", obj15.method1(-1, "bar"));
console.log("obj15.method1: ", obj15.method1(0, "baz"));
console.log("obj15.method1: ", obj15.method1(1, "qux"));

obj14.method2();
obj15.method2();

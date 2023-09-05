// Önem derecesi: 8

/* Static property & method:

Bir class içerisindeki elemana normal şartlarda doğrudan erişemeyiz.
Yani class'ın ismini yazıp ardından nokta koyarak o elemana ulaşmak
mümkün değildir. Çünkü bu elemanlar yeni bir obje oluşturulduktan
sonra sadece o obje tarafından kullanılabilir. Fakat OOP yaparken
doğrudan class ismi ile ulaşılması gereken property ve methodlara
ihtiyaç duyulabilmekte. Bunu yapabilmek için ilgili elemanın ön tarafına
`static` ifadesi eklemek yeterlidir. Bundan sonra bu static elemana
doğrudan class ismi ile ulaşılabilir.

Özellikler:
- static ifadesi access modifier'lardan sonra kullanılmalı. Yani örneğin
  `static public prop1: string` yerine `public static prop1: string`
  demek gerekiyor. Aynı durum methodlar için de geçerli.
- static methodlarda `this` ifadesi kullanılamaz. Çünkü this ifadesi
  şuanki objeye işaret eder, static methodları objesiz kullandığımız
  için this ifadesi tanımlı değildir.
- Bir static method sadece static olan diğer elemanlara erişebilir. Static
  olmayan elemanlara erişemez. Çünkü static olmayan elemanlar obje var
  olmadığı için onlar da var değildir.
- Static property'ler genelde ilk değeri verilmiş olarak kullanılırlar.
- Static methodlar genelde sabit değerler üretmek için veya parametreden
  gönderilen değerleri işleyip sonucu doğrudan geri döndermek amacıyla
  oluşturulurlar.

*/

class ExampleClass_3 {
  public prop1: string = "";

  public method1() {
    console.log(
      "ExampleClass_3 ile oluşturulan objenin içerisindeki method1 invoke edildi"
    );

    // Static olmayan bir method static olan bir methodu çağırabilir. Bunu
    // yapabilmek için class ismiyle birlikte static methodu çağırmak
    // gerekir. Ama static method tarafından static olmayan bir method
    // çağırılamaz.
    ExampleClass_3.method2();
  }

  public static method2() {
    console.log("ExampleClass_3 içerisindeki method2 invoke edildi.");
  }
}

const obj12 = new ExampleClass_3();
obj12.method1();

ExampleClass_3.method2();

class MathOperations {
  public static PI = 3.14159;

  public static sum(no1: number, no2: number): number {
    return no1 + no2;
  }

  public static multiply(no1: number, no2: number): number {
    return no1 * no2;
  }

  // Bir static method başka bir static elemanı classi ismiyle kullanabilir.
  public static circleCircumference(radius: number): number {
    return 2 * MathOperations.PI * radius;
  }

  public static circleArea(radius: number): number {
    return MathOperations.PI * radius * radius;
  }

  public static squareArea(a: number): number {
    // Static bir method static olan başka bir methodu çağırabilir.
    return MathOperations.rectangleArea(a, a);
  }

  public static rectangleArea(a: number, b: number): number {
    return a * b;
  }
}

console.log("squareArea: ", MathOperations.squareArea(15));
console.log("rectangleArea: ", MathOperations.rectangleArea(15, 40));

/* Static methodlara örnek olarak daha önceden kullandığımız `Math` isimli
class'ı verebiliriz. Bu class'taki tüm method ve propertyler statictir ve
bu sayede bunları kullanabilmek için yeni bir obje oluşturmamız gerekmez. */

// Mesela aşağıdaki gibi bir kullanıma gerek yoktur:
//   const math = new Math();
//   math.cos()

// Bunun yerine ihtiyaç duyduğumuz elemanı doğrudan class ismiyle birlikte
// çağırırız ve kullanırız.
console.log(Math.cos(10));
console.log(Math.PI);
console.log(Math.E);

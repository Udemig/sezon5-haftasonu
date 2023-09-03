/* Constructor'larda durum biraz farklı. Nihayetinde bu da bir method
ama özel bir method olduğu için bazı kurallara göre override edebiliriz.
Bu kurallar şunlardır:

- Child class'taki constructorın prototipi (yani parametre listesi) farklı olabilir.
- Parent class'ta constructor varsa o constructor child constructor tarafından
  invoke edilmeli. Bunu yapabilmek için de `super()` fonksiyonunu çağırırız.
- super() fonksiyonu sadece bir class'ı extend eden class'ın constructor'ında
  çağırılabilen bir fonksiyondur.
- super() fonksiyonu child class'ın constructor'ında en üst kısımda çağırılmalı.
  Çünkü bunu çağırmadan `this` operatörünü kullanmamıza izin verilmez.
- Parent class'a ait bir methodu invoke etmek için de yine `super` ifadesini
  kullanırız. Örneğin `super.method1()` dediğimizde parent class'ta tanımlı
  olan method1() fonksiyonunu invoke etmiş oluruz.
*/

class ParentClass_3 {
  public prop1: string;
  public prop2: number;

  constructor(prop1: string, prop2: number) {
    this.prop1 = prop1;
    this.prop2 = prop2;

    console.log("ParentClass_3'ün constructor methodu invoke edildi.");
  }

  method1() {
    console.log("ParentClass_3'ün method1 methodu invoke edildi.");
  }
}

class ChildClass_4 extends ParentClass_3 {
  public prop3: string;

  constructor() {
    // Burada yani child class'ın constructor'ında üst classın constructor'ını
    // invoke etmek için super() fonksiyonunu çağırıyoruz.
    super("prop1 değeri", 123);

    this.prop3 = "foo";

    console.log("ChildClass_4'ün constructor methodu invoke edildi.");

    // this ifadesi şuanki objeye işaret ederken super ifadesi üst classa
    // işaret eder. Bundan dolayı parent class'a ait bir methodu çağırmak için
    // yine super ifadesini kullanabiliriz.
    this.method1();
    super.method1();
  }

  method1() {
    console.log("ChildClass_4'ün method1 methodu invoke edildi.");

    // Burada da parent class'a ait method1() fonksiyonunu invoke etmemiz mümkün.
    super.method1();
  }
}

/* Hangi class'ı çağırıyorsak onun constructor'ının parametrelerine göre
değerleri göndermeliyiz. Örneğin aşağıdaki ParentClass_3'ün constructor'ına
iki adet parametre göndermemiz gerekirken ChildClass_4'ün constructor'ına
hiç parametre göndermiyoruz. */
const obj10 = new ParentClass_3("obj10 prop1", 234);
const obj11 = new ChildClass_4();

// Önem derecesi: 7.5

/* Önceki derste kalıtım konusuna giriş yapmıştık. Şimdi bu dersin biraz daha
detaylı konularına geçelim. Bir class'ı extend ettiğimizde üst class'ın elemanları
aynen extend eden class'a kopyalanır. Fakat bazen extend eden class'ta extend
edilen class'ın aynı isimde elemanlara sahip olabilir. Örneğin parentta
prop1 varken child'da da prop1 tanımlanabilir. Bu durumda son tanımlanan geçerlidir.


>> Property'lerin override edilmesi kuralları:
- Parenttan gelen property'lerin türleri ve erişim belirteçleri aynı olmalı ama
  ilk değerleri farklı olabilir.

>> Methodların override edilmesi kuralları:
- Erişim belirteci ve prototipi aynı olmak koşuluyla aynı isimde fakat farklı
  implementasyona sahip method yazılabilir.

*/

class ParentClass_2 {
  public prop1: number = 1;
  protected prop2: number = 2;
  private prop3: number = 3;
}

//////////////

class ChildClass_2 extends ParentClass_2 {
  // prop1 parent class'ta da mevcut. Erişim belirteci ve türü aynı
  // olmak koşuluyla ilk değerini farklı verebiliriz.
  public prop1: number = 0;

  public prop4: number = 4;
  protected prop5: number = 5;
  private prop6: number = 6;

  method1() {
    console.log("ChildClass_2 içerisindeki method1 invoke edildi.");

    console.log("prop1: ", this.prop1);
    console.log("prop2: ", this.prop2);
  }
}

class SecondChildClass_2 extends ChildClass_2 {
  /* method1 ChildClass_2'de mevcut olmasına rağmen erişim belirteci, parametre
  listesi ve dönüş türü aynı olmak koşuluyla tekrar implement edebilirim. */
  public method1() {
    console.log("SecondChildClass_2 içerisindeki method1 invoke edildi.");
  }

  method2() {
    console.log("prop1: ", this.prop1);
    console.log("prop2: ", this.prop2);
    console.log("prop4: ", this.prop4);
    console.log("prop5: ", this.prop5);
  }
}

//////////////

class ChildClass_3 extends ParentClass_2 {
  public prop4: number = 4;
  protected prop5: number = 5;
  private prop6: number = 6;

  method1() {
    console.log("prop1: ", this.prop1);
    console.log("prop2: ", this.prop2);
  }
}

class SecondChildClass_3 extends ChildClass_2 {
  method2() {
    console.log("prop1: ", this.prop1);
    console.log("prop2: ", this.prop2);
    console.log("prop4: ", this.prop4);
    console.log("prop5: ", this.prop5);
  }
}

const obj7 = new ChildClass_2();
const obj8 = new ChildClass_3();
const obj9 = new SecondChildClass_2();

console.log("obj7.prop1: ", obj7.prop1);
console.log("obj8.prop1: ", obj8.prop1);

obj7.method1();
obj9.method1();

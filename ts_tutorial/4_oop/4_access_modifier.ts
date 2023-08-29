/* OOP'de property ve methodların erişim belirteçleri vardır. Üç adet erişim
belirteci vardır. Bunlar public, protected ve private'dır.

- public: Bir class'ın elemanlarına hem classın dışında hem extend eden
  classta hem de kendi içerisinde erişilmesi istenen durumlar için kullanılır.

- protected: O classın içerisinde ve o classı extend eden classlar tarafından
  erişilmesi istendiği durumda kullanılır.

- private: Sadece tanımlandığı class içerisinde erişilebilir olması için kullanılır.

Notlar:

- Property veya methodlara herhangi bir erişim belirteci yazılmamışsa hepsi
  public olarak işlem görür.

- Access modifier'lar sadece typescript tarafında iş görürler. Javascripte derleyip
  Nodejs veya tarayıcı üzerinde çalıştırdığımızda tüm access modifier'lar otomatik
  olarak public' dönüşürler.

*/

class CreditCardInfo_1 {
  /* Sadece constructor esnasında set edilmesi gereken ve sonra asla set edilmemesi
  gereken property'ler için `readonly` access modifier'ını kullanabiliriz. Bu durumda
  bu property'yi okuyabiliriz ama constructor dışındaki herhangi bir methodda set edemeyiz. */
  protected readonly cardNumber: string;
  protected expireMonth: number;
  protected expireYear: number;
  protected securityNumber: string;
  private examplePrivateProperty: number;

  public examplePublicProperty: string;

  constructor(cardNumber: string, cvc: string) {
    this.cardNumber = cardNumber;
    this.securityNumber = cvc;

    this.expireMonth = 0;
    this.examplePrivateProperty = 0;
    this.examplePublicProperty = "";
  }

  public getCardNumber() {
    return "XXXX XXXX XXXX " + this.cardNumber.slice(-4);
  }

  public setSecurityNumber() {
    // Örneğin farzedelim ki yanlışlıkla aşağıdaki atamayı yaptık. Burada typescript bize
    // bu property'nin readonly olarak belirlendiğini bize söyler ve bu yanlışı görmemizi sağlar.
    //this.cardNumber = "test";

    this.securityNumber = "111";
  }
}

const customer_cc_1: CreditCardInfo_1 = new CreditCardInfo_1(
  "1234 2345 3456 4567",
  "234"
);
//console.log(">> Kart numarası: ", customer_cc_1.cardNumber);
console.log(">> Kart numarası: ", customer_cc_1.getCardNumber());

console.log(">> customer_cc_1:", customer_cc_1);

//customer_cc_1.cardNumber = "foo";
//customer_cc_1.cvc;

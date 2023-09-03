// Önem derecesi: 7.5

/* Getter ve Setter:

Normalde class'ların property'lerini public olarak belirtirsek heryerden
erişip set etme veya read etme (okuma) işlemlerini doğrudan yapabiliriz.
Fakat bu property'ler genelde önemli bilgiler tutarlar ve bunların kontrolsüz
şekilde erişilmeleri istenmeyen bir durumdur. İşte bu kontrolü sağlamak için
bazı özelleştirilmiş fonksiyonlar kullanılır. Bu fonksiyonların genel ismi
getter/setter fonksiyonlardır.

Getter-setter oluşturmak için iki yöntem vardır. Birincisi normal methodlar
yazarak, ikincisi de typescript'in get/set sintaksını kullanarak. Burada
mantıksal olarak yapılan işlemler arasında bir fark yoktur. Sadece
sintaks olarak fark vardır. Sonuçta yapılan iş bir property'yi kontrol
altında tutmaktır.

*/

// Yöntem 1: Normal methodlar kullanarak getter/setter işleminin yapılması.
class Student_1 {
  private id: number;
  private firstname: string;
  private lastname: string;
  private register_date: Date;
  private birth_date: Date;

  public setId(id: number) {
    this.id = id;
  }

  public getId() {
    return this.id;
  }

  /* Aşağıdaki fonksiyonlar sintaks olarak validdir. Ama dünya çapında kullanılan
  mühendislik yöntemlerine uymamaktadır. Çünkü bir fonksiyonun amacı bir
  property'yi okumaksa o fonksiyonun "get" ile başlaması, property'ye yazmaksa
  "set" ile başlaması daha uygundur. Bu yöntemi kullandığımızda o fonksiyonun
  ne iş yaptığını sadece ismine bakarak anlayabiliriz. Tekrardan içeriğine
  bakmamıza gerek kalmaz. */
  //   public readID() {
  //     return this.id;
  //   }
  //   public idyiDegistir(id: number) {
  //     this.id = id;
  //   }

  public setFirstname(firstname: string) {
    if (this.firstname) {
      return;
    }

    this.firstname = firstname;
  }

  public setLastname(lastname: string) {
    this.lastname = lastname;
  }

  public getFullname() {
    return this.firstname + " " + this.lastname;
  }
}

const emre_bilici = new Student_1();

emre_bilici.setId(10);
console.log("Emre'nin id'si: " + emre_bilici.getId());

emre_bilici.setFirstname("emre");
emre_bilici.setLastname("bilici");
console.log("Tam isim: ", emre_bilici.getFullname());

emre_bilici.setFirstname("ahmet");
console.log("Tam isim: ", emre_bilici.getFullname());

//emre_bilici.id = 10;
//emre_bilici.firstname = "emre";
//emre_bilici.lastname = "bilici";
//
////////////...
//emre_bilici.firstname = "ahmet";
//

/////////////////////////////////////
// Yöntem 2: `get` ve `set` sintakslarını kullanarak getter-setter methodları oluşturmak.

type GenderType_5 = "male" | "female";

class Citizen_1 {
  private _id: number;
  private _national_id: string;
  private _firstname: string;
  private _middlename: string;
  private _lastname: string;
  private _birth_date: Date;
  private _gender: GenderType_5;

  /* Burada oluşturduğumuz method farklı bir sintaks ile oluşturuluyor. Burada önce erişim
  belirteci (public), sonra methodun görevi (get veya set) sonra da fonksiyonun ismi yazılır.
  Aşağıdaki örnekte bir setter oluşturduk. Buradaki parametreye gelecek olan değer eşittirin
  sağ tarafındaki değerdir. */
  public set id(id: number) {
    console.log("set id fonksiyonu çalıştı.");

    if (id <= 0) {
      return;
    }

    // Burada set edilen property'nin `_id` olduğuna dikkat edelim.
    this._id = id;
  }

  /* Class'ın içerisinde gizli olan bir property'ye erişmek için (okuma yapmak için)
  getter fonksiyon yazmak için aşağıdaki sintaks kullanılır. Burada return edilen
  property'nin `id` değil `_id` olduğuna dikkat edelim. */
  public get id() {
    console.log("id için get fonksiyonu çalıştı.");

    return this._id;
  }

  // Sadece örnek olsun diye bir setter fonksiyon yazalım:
  public set ornekMethod(param1: string) {
    console.log("ornekMethod çalıştı, param1: ", param1);
  }

  public set firstname(firstname: string) {
    this._firstname = firstname;
  }

  public set lastname(lastname: string) {
    this._lastname = lastname;
  }

  public get fullname() {
    return this._firstname + " " + this._lastname;
  }
}

const humeyra = new Citizen_1();

console.log("id property'si set ediliyor");

/* Burada bir atama işlemi yapılıyor. Ama arka planda yukarıda oluşturduğumuz setter
fonksiyonu çağırılır. Eşittirin sağ tarafındaki ifade yukarıdaki setter fonksiyonunun
parametresi olur. Bu yöntemde doğrudan method invoke edilmemiş olur. Normal şekilde
atama yaparız ama arkaplanda setter fonksiyon çalışır. */
humeyra.id = 1;
console.log(">> Hümeyranın bilgileri:", humeyra);

humeyra.ornekMethod = "test";

humeyra.id = 0;
console.log(">> Hümeyranın bilgileri:", humeyra);

console.log("Hümeyranın idsi: ", humeyra.id);

humeyra.firstname = "hümeyra";
humeyra.lastname = "test";
console.log("Fullname: ", humeyra.fullname);

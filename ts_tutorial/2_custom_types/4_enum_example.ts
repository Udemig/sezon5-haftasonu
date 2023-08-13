/* Ödev: Bir CRM projesinde görev aldığımızı düşünelim. Projemizde farklı
kullanıcı türleri (roller) mevcut. Bunlar admin, manager, assistant manager,
accountant, customer support, customer. Kullanıcıların isim, soyisim, rol,
kayıt tarihi, kayıt eden kişi, yöneticisi bilgilerini tutan bir type
yazın. Ve bu bu type'ı dizi şeklinde kullanarak bir değişken içerisinde
kullanın. */

////////////////////////////

/* Soru: Bir göz hastahanesine proje yaptığımızı düşünelim. Buraya
kayıt olan hastaların kişisel bilgilerini ve ön muayene bilgilerinin
girildiği ekranları yapıyoruz (sayfalar). Bu bilgileri tutan değişkenlerin
türlerini yazın. */

enum Gender {
  Male,
  Female,
  Other,
}

type PatientType = {
  name: string;
  lastname: string;
  birth_date: Date;
  gender: Gender;
  national_id: string;
};

/*
muayene tarihi
şikayet
kronik rahatsızlık var mı, varsa nedir
barcode numarası (muayenemizin benzersiz id'si)
sol goz miyop derecesi
sağ göz miyop derecesi
sol göz hipermetrop derecesi
sağ göz hipermetrop derecesi
sol göz astigmat derecesi
sağ göz astigmat derecesi
*/

/* Gözlerin derece bilgilerini iki şekilde de tutmak mümkündür.
Bunlar tuple ve obje. */

type EyeDegreeTupleType = [number, number];
type EyeDegreeObjectType = {
  left: number;
  right: number;
};

type MedicalExamType = {
  date: Date;
  reason: string;
  chronic_illness: null | string;
  barcode: string;

  // Yöntem 1: Her göz için ayrı property tanımlamak.
  left_myopic_degree: number;
  right_myopic_degree: number;

  left_hypermetropic_degree: number;
  right_hypermetropic_degree: number;

  left_astigmatism_degree: number;
  right_astigmatism_degree: number;

  // Yöntem 2: Her hastalık türünü tuple kullanarak tanımlamak.
  myopic_tuple: EyeDegreeTupleType;
  hypermetropic_tuple: EyeDegreeTupleType;
  astigmatism_tuple: EyeDegreeTupleType;

  // Yöntem 3: Her hasdtalık türünü obje kullanarak tanımlamak.
  myopic_object: EyeDegreeObjectType;
  hypermetropic_object: EyeDegreeObjectType;
  astigmatism_object: EyeDegreeObjectType;
};

const emir: PatientType = {
  gender: Gender.Male,
  birth_date: new Date(),
  name: "emir",
  lastname: "boşver",
  national_id: "11223344556",
};

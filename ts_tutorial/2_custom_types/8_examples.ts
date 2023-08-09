let isim: string = "ahmet";
isim = "mehmet";

let dogum_tarihi: number = 1993;

/* Soru 1: Sınıftaki öğrencileri tutan bir değişken tanımlayın.
Ad, soyad, cinsiyet, yaşadığı şehir, yaş bilgileri olsun. */

/* enum'lar javascript tarafında number'lar üzerinde işlem görür.
Çünkü normalde javascriptte enum diye birşey yoktur. Fakat typescriptte
kod yazarken yazılımcının işi kolaylaşsın diye enum'lar geliştirilmiştir.
En nihayetinde enumlar number olarak javascripte derlenir. */
enum GenderEnum {
  Male,
  Female,
  PreferNotToSay,
  Other,
}

type GenderType = "male" | "female";

const genderEnum: GenderEnum = GenderEnum.Female;
const genderType: GenderType = "female";
console.log("typeof genderEnum", typeof genderEnum);
console.log("typeof genderType", typeof genderType);

/* typeof ifadesini console.log içerisinde kullanırsam javascriptteki
primitive karşılığını ekrana yazar. */

type StudentType = {
  name: string;
  middle_name: null | string;
  surname: string;
  age: number;
  city: string;
  gender: GenderType;
};

let students: StudentType[] = [
  {
    name: "ahmet",
    surname: "test",
    gender: "male",
    age: 30,
    city: "manisa",
    middle_name: null,
  },
];

/* Bilindiği üzere typescriptte (ve javascriptte) üç şekilde fonksiyon
tanımlanabilmekte. Birincisi normal isimli fonksiyondur ve bunda
fonksiyon ismi, parametreler, parametrelerin türleri ve son olarak da
dönüş türünü belirtiriz. İkinci ve üçüncü yöntemde ise isimsiz fonksiyon
tanımlayıp bunları bir değişkene atarız. */

// Birinci yöntem:
function sum_fn_1(num_1: number, num_2: number): number {
  return num_1 + num_2;
}

// İkinci yöntem:
const sum_fn_2 = function (no1: number, no2: number): number {
  return no1 + no2;
};

// Üçüncü yöntem:
const sum_fn_3 = (no1: number, no2: number): number => {
  return no1 + no2;
};

// Dördüncü yöntem aslında üçüncü yöntemin amca oğlusu gibidir:
const sum_fn_4 = (no1: number, no2: number): number => no1 + no2;

console.log("sum fn 2 sonucu: ", sum_fn_2(10, 20));
console.log("sum fn 2 türü: ", typeof sum_fn_2);

/* Bir fonksiyon türü nasıl yazılır? Bunu yazmak için parantez
içerisine parametre listesini ve bunların türleri ayrı ayrı
yazılır. Sonra "eşittir büyüktür =>" işareti eklenir ve sonra
dönüş türü yazılır. Burada dikkat edilmesi gereken şey fonksiyon
type'ı yazarken eşittir büyüktür kullanılır ama fonksiyonun
kendisi yazılırken iki nokta üst üste kullanılarak dönüş türü
yazılır. Bu ikisi arasındaki fark genellikle birbirine karıştırıldığı
için dikkat edilmesi gereken bir husustur.
*/

// Burada bir fonksiyon prototipi (türü) tanımladık.
type SumFnType = (no1: number, no2: number) => number;

// Önemli not: Bir type parantez ile başlıyorsa bu bir fonksiyon türüdür.
// Çünkü diğer typeların hiçbiri parantez ile başlamaz.
type ExampleStringArrayType = string[];
type ExampleObjectType = { id: number; name: string };
type ExampleTupleType = [number, string];

// Yukarıda tanımladığımız türe bağlı kalmak koşuluyla bir değer atadık.
// Buradaki değerden kasıt aslında fonksiyon implementasyonudur.
const sum_fn_5: SumFnType = (no1: number, no2: number): number => {
  console.log("sum_fn_5 fonksiyonu çağırıldı.");
  return no1 + no2;
};

// Burası da tek satırlı isimsiz fonksiyon örneği. Yukarıdaki fonksiyonla
// aynı işlemi görür.
const sum_fn_6: SumFnType = (no1: number, no2: number): number => no1 + no2;

// Değişkenin türü set edilmiş olduğundan dolayı bu değişkene atanan fonksiyonun
// parametrelerinin ve dönüş türünün yazılması şart değildir.
const sum_fn_7: SumFnType = (no1, no2) => {
  return no1 + no2;
};

const sum_fn_8: SumFnType = (no1, no2) => no1 + no2;

console.log("sum_fn_5 result: ", sum_fn_5(10, 20));
console.log("sum_fn_6 result: ", sum_fn_6(10, 20));
console.log("sum_fn_7 result: ", sum_fn_7(10, 20));
console.log("sum_fn_8 result: ", sum_fn_8(10, 20));

////////////////////////////////////////////

/* Örnek: Ad, orta ad ve soyad bilgileri girilen ve bunların
arada bir boşluk olacak şekilde birleştirilerek geri dönderen
fonksiyonun type'ını ve implementasyonunu yazın.
Örneğin: exampleFn("merve", "özbağ", "okumuş")
Çıktı: "merve özbağ okumuş"
*/

type CombineNameFnType = (
  name: string,
  middleName: string,
  surname: string
) => string;

// Dursun başkanın doğru cevabı:
//type kimlikbilgi = (ad: string, ortaad: string, soyad: string) => string;

// Fonksiyonun type'ını tanımladık. Şimdi bu type'a uygun şekilde
// bir implementasyon yazıyoruz. Not: implementasyonlar farklı olabilir.
// Detay için aşağıdaki fonksiyonları inceleyiniz.

const combineName: CombineNameFnType = (name, middleName, surname) => {
  return `${name} ${middleName} ${surname}`;
};

// Edit: Parametrelerin sadece ilk harfilerini büyük yapan fonksiyonu yazın.
const capitalizeFullname: CombineNameFnType = (name, middleName, surname) => {
  name = name.toLowerCase()[0].toUpperCase() + name.toLowerCase().slice(1);

  if (middleName.length > 0) {
    middleName =
      middleName.toLowerCase()[0]?.toUpperCase() +
      middleName.toLowerCase()?.slice(1);
  }

  if (surname.length > 0) {
    surname =
      surname.toLowerCase()[0]?.toUpperCase() + surname.toLowerCase()?.slice(1);
  }

  return `${name} ${middleName} ${surname}`;
};

// Edit: İsimlerin baş ve sonlarındaki boşlukları temizleyerek kullanın.
const cleanFullname: CombineNameFnType = (name, middleName, surname) => {
  return capitalizeFullname(name.trim(), middleName.trim(), surname.trim());
};

console.log(combineName("merve", "özbağ", "okumuş"));
console.log(capitalizeFullname("ökKeş", "Nizamettin", "NİYAzi"));
console.log(capitalizeFullname("dursuN", "", "AYDIN"));
console.log(cleanFullname("  seçiL    ", "     ", "  x yz  "));
console.log(capitalizeFullname("emre", "", "dikici"));
console.log(capitalizeFullname("EMİNE", "güçlüER", ""));

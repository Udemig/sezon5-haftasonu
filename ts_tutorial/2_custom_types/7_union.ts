/*
`union` type

union ifadesinin kelime anlamı birlik, birleşmek anlamına gelir.
Buradan da anlaşılacağı üzere birden fazla türü birleştirmek için
kullanılır. Örneğin bir değişken bazen number bazen de string alması
gerekirse bunu union olarak ifade ederiz. Veya örneğin obje veya
null. Başka bir örnek olarak da string veya string dizisi.

- union type belirtmek için iki type arasına pipe işareti yazılır.

- Bir type'ın union olması için en az iki adet type kullanılmalı.
    Yani ikiden fazla type birleştirilebilir.

- Sadece type'lar için kullanılmaz, değerler için de union kullanılabilir.

*/


// Sadece spesifik bir değişken için union type tanımlamak:
let age_1: number | string;

age_1 = 15;
age_1 = "teenager";

age_1 = 47;
age_1 = "middle age";

age_1 = "ahmet"
age_1 = 3.14159;


// union type'ları ayrı bir type olarak tanımlamak:
type NumberOrStringType = number | string;

let age_2: NumberOrStringType;
age_2 = 84;
age_2 = "old people";


// Çok miktardaki type'larla beraber kullanılması:
type NullableStringOrNumber = null | number | string;

let birthday_1: NullableStringOrNumber = null;
birthday_1 = 1989;
birthday_1 = "01.01.2000"
birthday_1 = "1989/06/23"


// Değerleri unionlarla birleştirerek kullanalım.
type GenderUnionType = "male" | "female" | "unknown" | "not selected"

let example_patient_gender_1: GenderUnionType = "male"

// Buradaki çıktı "string" olacaktır. Çünkü kod çalışırken javascripte
// dönüştürülerek çalıştırılır. Bu yüzden bunun türü JS'deki uygun bir
// tür olarak gösterilir.
console.log("typeof example_patient_gender_1: ", typeof example_patient_gender_1);


type IrrationalNumberType = "Pi Number" | "Euler Number" | "Square 2" | 3.14159 | 2.718281828 | 1.41;

let irrational_number_1: IrrationalNumberType = "Square 2"
console.log(">>> typeof irrational_number_1:", typeof irrational_number_1);

irrational_number_1 = 3.14159;
console.log(">>> typeof irrational_number_1:", typeof irrational_number_1);


/* Normalde her değişkenin type'ını belirtmek lazım. Ama eğer belirtmezsek
o değişkenin türü atanan değerin türü olmuş olur. Örneğin aşağıdaki
değişkenin türü belirtilmemiş olmasına rağmen atanan değerin türü number
olduğu için değişkenin türü de numberdır. Bu neden gerekli? Mesela
sonradan bu değişkene tekrar değer atanacağı zaman türe bağlı kalınır. */
let example_variable = 10 | 20;
//example_variable = 10 % 20;

console.log(">>>  example_variable:", typeof example_variable);
console.log(">>>  example_variable:", example_variable);

// example_variable = "test"; // hata
example_variable = 20;



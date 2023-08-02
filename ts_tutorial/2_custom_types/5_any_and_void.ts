/*
>> `any` type <<

Değişkenin tutacağı değerin tam olarak nasıl bir değere (dolayısıyla type'a)
sahip olacağını bilmediğimiz durumlarda kullanılır. `any` türünden tanımlanmış
olan değişkenlerin davranışı aynı javascriptteki değişkenlerin davranışı gibidir.

Nice to have: Normal şartlarda her değerin bir type'ı vardır.
Fakat bazen bu type'ı belirlemek zor olabilir veya sonradan belirlenmesi
gerekebilir. Bu durumda `any` kullanılıp problem çözülür ama mutlaka ilerleyen
zamanlarda bu değişkenin type'ını doğru şekilde belirtmek gerekir.

Örnek senaryo: Mesela bir hastahane programı yapıyoruz. Hastahaneye yeni bir
cihaz geldi ve acilen bu cihazla entegrasyon yapmamız gerekiyor. Bu entegrasyon
sırasında gelen-giden dataların türlerini tanımlayacak fırsatımız olmayabilir.
Bu durumda bu task içerisinde kullanılan tüm değişkenlerin türünü `any` olarak
belirtebiliriz. Ama aciliyet geçtikten sonra mutlaka tüm `any`lerin gerçek
türlerini belirtmemiz gerekir. Aksi halde uzun vadede proje kontrol edilemez
hale gelebilir.

*/


let name_3: any = "test";

name_3 = true;

name_3 = {
    firstname: "test",
    lastname: "foo"
}


///////////////////////////////////////////////////////
/*
>> `void` type <<

Typescriptte aynı değişkenlerde olduğu gibi fonksiyonların dönüş türlerini de
belirtmemiz gerekir. Ama eğer bir fonksiyon herhangi bir değer döndermeyecekse
o zaman o fonksiyonun dönüş türünü `void` olarak tanımlarız.

void'in kelime anlamı geçersiz, hükümsüz, boşluk anlamlarına gelir.

*/

function printHello_1(name: string): void {
    console.log("Merhaba " + name);
}

function helloText_1(name: string): string {
    return "Merhaba " + name
}

printHello_1("emre");
printHello_1("nurullah");
printHello_1("emine");
printHello_1("yaren");
printHello_1("dünya");



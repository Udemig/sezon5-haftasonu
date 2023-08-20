/* Soru: Bir fonksiyona isim, mail ve şifre bilgileri parametre
olarak gönderilsin. Dönüş olarak da bu parametrelerin property'lere
eklenmiş hali obje olarak dönderilsin. */

type UserType_1 = {
  name: string;
  mail: string;
  password: string;
};

type UserCreator_1 = (
  name: string,
  mail: string,
  password: string
) => UserType_1;

const newUser_1: UserCreator_1 = (name, mail, password) => {
  return {
    name,
    mail,
    password,
  };
};

console.log("---------------------------------");
console.log(newUser_1("    ahmet mehmet test  ", "foobar", ""));
console.log(newUser_1("ahmet   mehmet   test", "foobar", ""));
console.log(newUser_1("ahmet   mehmet   test foo   bar baz", "foobar", ""));
console.log(newUser_1("ahmet     test", "foobar", ""));
console.log(newUser_1("ahmet", "foobar", ""));
console.log(newUser_1("", "foobar", ""));
console.log(newUser_1("       ", "foobar", ""));

/* Patron geldi ve kontrol etti. Dediki isimlerin ilk harfi büyük diğer
harfler küçük olmalı, mail içerisinde "@" karakteri bulunmalı ve
şifre en az 6 karakter olmalı dedi. Şimdi bu revizeler için yeni
bir fonksiyon yazalım. */

// Buraya yorum yaz.
// "ahmetmehmetayşefatmamehmethüseyinmehmethümeyramehmetseçilmehmetulviye".split(
//   "mehmet"
// );

const newUser_2: UserCreator_1 = (name, mail, password) => {
  if (name.trim().length === 0) {
    throw new Error("Please fill name.");
  }

  // split() fonksiyonundan `string[]` şeklinde type döner bu sebepten dolayı
  // parsedNames değişkeninin türü otomatik olarak `string[]` olur.
  let parsedNames = name.trim().split(" ");

  /* Örneğin `"a  b    c".split(" ")` ifadesinden dönen değer şu şekildedir:
  ["a", "", "", "b", "", "", "", "", "c"]
  Sadece içi dolu olan stringleri filtrelememiz gerekiyor.
  */
  parsedNames = parsedNames.filter((str) => str.length > 0);
  const formattedNames: string[] = parsedNames.map((currentName) => {
    currentName = currentName.toLowerCase();

    if (currentName.length === 1) {
      return currentName[0].toUpperCase();
    } else {
      return currentName[0].toUpperCase() + currentName.slice(1);
    }
  });
  name = formattedNames.join(" ");

  console.log(">> formattedNames", formattedNames, name);

  return {
    name,
    mail,
    password,
  };
};

console.log("---------------------------------");
console.log(newUser_2("    ahmet mehmet test  ", "foobar", ""));

/* Ödev: Geri kalan işlemler ödevdir. */

// Önem derecesi: 3

/* Default parameter: Bir fonksiyonun parametrelerine standart bir değer
atayabiliriz. Bu durumda o parametrenin değerini vermeden çağırdığımızda
bu atadığımız ilk değer geçerli olur. */

function printTitle(name: string, title = "Sayın") {
  console.log(name + " " + title);
}

printTitle("Merve");
printTitle("Dursun", "Bey");

/* Default parameter kuralları:

1- Her tür hem ilk değer vermek mümkündür.
2- İlk değer ataması yapılan parametreden sonraki parametreler
   required olabilir.
3- İlk değer ataması yapılan parametre otomatik olarak `undefined``
   türü ile union hale getirilir.
4- Herhangi bir parametreye ilk değer ataması yapmak mümkündür. Yani
   optional params'taki gibi değildir.
*/

function exampleFn_5(
  param1: string,
  param2: number,

  // 1 ve 3. kurallar burada gerçekleşir. Yani aslında bu parametrenin
  // gerçek türü tam olarak şudur: param3: string | undefined
  param3: string | number = "foo",

  // 2. kural
  param4?: string,
  param5?: number
) {
  console.log(">>>  param1:", param1, typeof param1);
  console.log(">>>  param2:", param2, typeof param2);
  console.log(">>>  param3:", param3, typeof param3);
  console.log(">>>  param4:", param4, typeof param4);
  console.log(">>>  param5:", param5, typeof param5);
}

exampleFn_5("test", 10, undefined);

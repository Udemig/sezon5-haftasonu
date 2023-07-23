/* 
Tuple: Genişliği veya boyutu asla değişmeyecek olan dataları göstermek
veya ifade etmek için kullanılan bir türdür. Tuple'lar dizilere çok
benzerler fakat dizilerden farklı olarak boyutları değişmez. Tuple
türünü belirtmek için köşeli parantez yazılır ve içerisine her bir
itemin türü ayrı ayrı belirtilir.

Dizi ile tuple arasında iki tane temel farkı vardır.
Birincisi dizi boyutu asla değişmeyecek
olan türler için tuple kullanılır. İkincisi de dizinin her bir elemanının
türü ayrı ayrı belirtilir. Bu sayede tüm elemanların aynı türden
olmasına gerek kalmamış olur.
*/

let color_1: [number, number, number, number];

color_1 = [255, 100, 50, 128];

let arr1: string[] = ["test", "example", "foo"];
arr1.push("ahmet");

/* Örnek 2: Tuple kullanarak IP adreslerini tanımlayın. */
/* Bilindiği üzere IP adresleri dört adet 0-255 arasındaki
sayılardan oluşan bir kümedir. Ve bunun sayısı değişmez.
Bu değişmezlikten faydalanarak IP adreslerini saklayabilmek için
tuple türü kullanılabilir. */

type IpAddressType = [number, number, number, number];

const google_ip: IpAddressType = [142, 250, 191, 46];
const instructor_ip: IpAddressType = [212, 133, 232, 129];
const google_public_dns: IpAddressType = [8, 8, 8, 8];

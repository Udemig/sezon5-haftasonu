/* Generic:

Bir türün bir fonksiyon veya veri yapısı içerisinde (class veya
başka bir type) dinamik bir şekilde tür değişimini sağlayan
yöntemdir.

Örneğin useState hook'una gönderdiğimiz değerin türü otomatik
olarak state değişkenimizin türü olarak atanır. Bu işlem
generic'ler vasıtasıyla otomatik olarak yapılır. Aşağıdaki
ilk satırda counter'ın türü number olarak belirleniz çünkü
useState'in parametresine gönderdiğimiz değerin türü
otomatik olarak state değişkeninin türü olarak belirlenir.

const [counter, setCounter] = useState(0)
const [firstname, setFirstname] = useState("")
const [isAttend, setIsAttend] = useState(false)

Kurallar ve özellikler:
- Generic type'lar küçüktür (<) ve büyüktür (>) işaretleri arasına
  yazılır. Sonra bulundukları bölge içerisinde aktif olurlar ve
  bu bölge içerisinde heryerde kullanılabilirler.

- Generic type'lar sadece bulundukları bölge içerisinde geçerlidirler.

- Değişken isimlendirme kurallarına göre isimlendirilirler. Ama yazılım
  camiasında genel olarak tek karakter ve büyük harf olarak yazılırlar.
  Bunun sebebi generic typeların nasıl bir type alacağının belli olmadığı
  için nasıl bir isimlendirme yapılacağı da bilinemez. Bu yüzden genel
  olarak amacı yansıtan bir isimlendirme yöntemi kullanılır. Örneğin T,
  K, V, Z gibi. Bunların açılımı kabaca şu şekildedir:

  T: Type
  R: Herhangi bir type
  E: Error/Exception type
  K: Key
  V: Value
  Z: Herhangi bir type

  Bunların doğrudan çözdüğü problemlerle ilgili örnekler yaparak daha
  net anlaşılacaktır.

- 

- 

*/

/* Fonksiyonlarda generic kullanımı:

Bir fonksiyonda kullanılmak üzere generic type yazmak için fonksiyon
isminden sonra küçük-büyük işaretleri yazılır. Sonra arasında
generic type'ımızın ismi yazılır. Ardında ihtiyaç duyduğumuz
yerlerde (parametre listesi, dönüş türü veya fonksiyonun
implementasyonunda) kullanırız.

Özellikler ve kurallar:
- Fonksiyon içerisinde birden fazla generic type tanımlanabilir. Bunların
  arasına virgül koyularak ayrım yapılır.

- Generic typelar fonksiyon ismiyle parantez arasındaki bölgede yazılır.
  Yine küçüktür ve büyüktür (<, >) işaretlerini kullanırız.

*/

function exampleGenericFn_1<ExampleGenericType>(
  param1: ExampleGenericType
): ExampleGenericType {
  // Yukarıda tanımladığımız generic type bu blok içerisinde
  // heryerde geçerlidir.
  const param1_copy: ExampleGenericType = param1;

  if (typeof param1 === "string") {
    console.log("param1'in türü string");
  } else if (typeof param1 === "number") {
    console.log("param1'in türü number");
  } else {
    console.log("param1'in ne number ne stringdir.");
  }

  return param1;
}

const result1 = exampleGenericFn_1("test");
const result2 = exampleGenericFn_1(10);

/* Birden fazla generic type tanımlandığında virgül ile ayrılır.
Bu genericler genelde parametre türlerini belirtmek için kullanılır.
İhtiyaca göre dönüş türünde de kullanmak mümkündür ama mecburi değildir. */
function exampleGenericFn_2<Param1Type, Param2Type>(
  param1: Param1Type,
  param2: Param2Type
): void {
  //
}

/* Veri türlerinde generic oluşturmak:

Class, interface veya type tanımlarken de generic kullanmak mümkündür.
Burada yine amaç dinamik şekilde bir type'a ait olan datayı tutabilmektir.

Örnek: Şu linkteki login işleminin sonucunu generic kullanarak oluşturun.
https://github.com/emirbugra/react-api-tutorial/tree/main/docs/api#login-olmak

type ApiResult<LoginType> = {
    data: LoginType,
    status: 'success' | 'error'
}

type LoginType = {
    token: string,
    userData: {
        id: number, 
        role_id: number,
        // ....
    }
}

const authResult = await axios.post<ApiResult<LoginType>>("auth/login")
// authResult'ın type'ı otomatik olarak `ApiResult<LoginType>`
// olarak set edilir.

*/

// 1- type keywordü içerisinde generic kullanmak:

// T isminde bir generic type tanımladık ve prop1'in türü olarak belirttik.
type ExampleObjectType_1<T> = {
  prop1: T;
  prop2: number;
  prop3: string;
};

type ExampleObjectType_2<K, V> = {
  key: K;
  value: V;
};

type ExampleObjectType_3<T, E> = {
  data: T;
  error?: E;
};

type ExampleTupleType_4<T> = [T, T, T];

// Burada tanımlanan generic typelardan herhangi biri değer
// olarak kullanılabilir. Bununla birlikte "unknown" ifadesi ve
// undefined ifadeleri de bu type türünden tanımlanan değişkene
// atanabilir.
type ExampleUnionType_1<T, X, Z> = T | X | Z | "unknown" | undefined;

// Yukarıda ilgili yerde T'nin yerine number gelir.
const example1: ExampleObjectType_1<number> = {
  prop1: 10,
  prop2: 20,
  prop3: "test",
};

// Yukarıda ilgili yerde T'nin yerine string gelir.
const example2: ExampleObjectType_1<string> = {
  prop1: "test",
  prop2: 223344,
  prop3: "foo bar baz",
};

const example3: ExampleObjectType_1<object> = {
  prop1: {},
  prop2: 4455,
  prop3: "hello world",
};

const example4: ExampleObjectType_2<string, number> = {
  key: "test",
  value: 10,
};

const example5: ExampleObjectType_2<object, object> = {
  key: {},
  value: {},
};

const example6: ExampleObjectType_2<null | number, object> = {
  key: 10,
  value: {},
};

example6.key = null;
example6.key = 90;

const example7: ExampleObjectType_2<Date, Array<number>> = {
  key: new Date(),

  // Kolay yazılışı:
  //value:[],

  // Doğru yazılışı:
  value: new Array<number>(),
};
example7.value.push(10);
example7.value.push(20);

// ExampleObjectType_2'nin dizisini oluşturmak için yine generic
// typeları belirledikten sonra köşeli parantez ekliyoruz.
const example8: ExampleObjectType_2<Date, Array<number>>[] = [];
example8.push({
  key: new Date(),
  value: [1, 2, 4],
});

const example10 = {
  foo: "foo1",
  bar: "bar1",
  baz: "baz1",
  example_prop_1: "foo",

  // Property'lerde özel karakter varsa (örneğin boşluk, yıldız, tire,
  // artı, asterisk, slaş, ters slaş, parantez vs) mecburen string gibi
  // (yani tırnak içerisinde) yazmalıyız.
  "dursun aydın": "samsun",

  "https://falanfilan.com/falan/filan": "foobarbaz",
};

console.log(example10.foo);
console.log(example10["foo"]);
console.log(example10["dursun aydın"]);

const example11 = [1, 2, 3];
example11[0];

const example12: ExampleTupleType_4<number> = [100, 100, 100];
const example13: ExampleTupleType_4<string> = ["aa", "bb", "cc"];
const example14: ExampleTupleType_4<object> = [
  {},
  {
    id: 10,
  },
  {
    firstname: "foo",
    lastname: "bar",
  },
];

const example15: ExampleUnionType_1<string, number, boolean> = "test";

let example16: ExampleUnionType_1<
  ExampleTupleType_4<number>, // T'ye karşılık gelen tür
  ExampleObjectType_2<Date, Array<string>>, // X'e karşılık gelen tür
  number // Z'ye karşılık gelen tür
> = 10;
example16 = [10, 20, 30];
example16 = {
  key: new Date(),
  value: ["foo", "bar"],
};

example16 = {
  key: new Date(),
  value: new Array(),
};
example16.value.push("test");

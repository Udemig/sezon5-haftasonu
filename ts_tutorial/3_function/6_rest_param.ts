// Önem derecesi: 6.7

/* Rest param: Bazı fonksiyonların parametrelerine sınırsız miktarda değer
gönderebilmekteyiz. Bu tarz parametre tanımlama şeklinde rest param denir.
Örneğin console.log() fonksiyonunun parametre listesine istediğimiz
kadar değer gönderebilmekteyiz. */

// örnek:
console.log(
  "foo",
  "bar",
  "baz",
  {
    id: 10,
    name: "test",
  },
  new Date()
);

/* */
type ExampleRestParamFnType_1 = (...params: string[]) => void;

/* Önemli not: Bir type'a bağlı olarak yazılan fonksiyonda parametrelerin
türlerini tanımlamamız gerekmez. Çünkü typescript bu türleri otomatik olarak
tanımlı olan type'tan alır. Ama rest param için bu böyle olmuyor. Typescript
rest parametrelerin type'larını otomatik bulmuyor. Bu sebepten dolayı
rest parametrelerin typelarını ve sol tarafındaki üç noktayı mutlaka yazmalıyız. */
const exampleRestParamFn_1: ExampleRestParamFnType_1 = (
  ...params: string[]
): void => {
  console.log(params, typeof params);
};

exampleRestParamFn_1("foo", "bar", "baz");
exampleRestParamFn_1("test");
exampleRestParamFn_1();

////////////////////////////////////////////////

type ExampleRestParamFnType_2 = (
  param1: string,
  param2: number,
  ...param3: boolean[]
) => void;

const exampleFn_2: ExampleRestParamFnType_2 = (
  // param1 ve param2'nin türleri typescript tarafından otomatik olarak bulunur.
  // bu yüzden bunların türlerini belirtmeye gerek yoktur.
  param1,
  param2,

  // Typescript, rest parametrelerin türünü otomatik tespit edemiyor bu yüzden
  // mutlaka fonksiyonu yazarken türünü yukardaki tanıma uygun şekilde belirtmeliyiz.
  ...param3: boolean[]
): void => {
  console.log(">>>  param1:", param1, typeof param1);
  console.log(">>>  param2:", param2, typeof param2);
  console.log(">>>  param3:", param3, typeof param3);
};

exampleFn_2("param1 value", 234, false, true, false, false, true);
exampleFn_2("param1 value", 234);

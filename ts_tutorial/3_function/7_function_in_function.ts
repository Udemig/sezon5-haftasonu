// Önem derecesi: 10

/* Fonksiyon içerisinde fonksiyon tanımlamak:

Bunu iki şekilde yapabiliriz. Birincisi fonksiyonun parametresi olarak
fonksiyon gelmesini sağlamak, ikincisi de fonksiyonun dönüş türü olarak
fonksiyon olmasını sağlamak.
*/

// - Birinci yöntem: Bir fonksiyonun parametresine fonksiyon gelmesini sağlamak.
type ExampleFnType_4 = (
  // Aşağıdaki parametreye bir fonksiyon gönderilmeli. Ve bu fonksiyonun tek
  // parametresi var ve bunun türü number. Ayrıca bu fonksiyondan da yine
  // number dönmeli.
  param1: (item: number) => number
) => string;

const exampleFn_4: ExampleFnType_4 = (
  param1: (item: number) => number
): string => {
  const param1_result = param1(10);
  console.log(">> exampleFn_4 çağırıldı, param1_result: ", param1_result);

  if (param1_result === 0) {
    return "Sonuç sıfır.";
  } else if (param1_result < 0) {
    return "Sonuç negatif, " + param1_result;
  } else {
    return "Sonuç pozitif, " + param1_result;
  }
};

const result_5 = exampleFn_4((item: number): number => {
  console.log("result_5 içerisindeki fonksiyon çağırıldı, item: ", item);
  return item * 2;
});
console.log(">>>  result_5:", result_5);

const result_6 = exampleFn_4((item: number): number => {
  console.log("result_6 içerisindeki fonksiyon çağırıldı, item: ", item);
  return item * item;
});
console.log(">>>  result_6:", result_6);

const result_7 = exampleFn_4((item: number): number => {
  console.log("result_7 içerisindeki fonksiyon çağırıldı, item: ", item);
  return -item;
});
console.log(">>>  result_7:", result_7);

const result_8 = exampleFn_4((item: number): number => {
  console.log("result_8 içerisindeki fonksiyon çağırıldı, item: ", item);
  return item - item;
});
console.log(">>>  result_8:", result_8);

/* Örnek: Arraylerdeki map() fonksiyonuna benzer bir fonksiyon türü
tanımlayıp implement ediniz. */

type MapFnType_1 = (
  // Her item için bu fonksiyonu çağıracağız ve buradan dönen değeri
  // bir dizi içerisinde toplayıp geri döndereceğiz.
  callbackFn: (item: any, index: number, original_arr: any[]) => any,

  // Dizi değeri bu değişkene gelecek.
  arr: any[]
) => any[];

const mapFn_1: MapFnType_1 = (
  callbackFn: (item: any, index: number, original_arr: any[]) => any,
  arr: any[]
): any[] => {
  console.log("mapFn_1 çağırıldı");

  const returnArr: any[] = [];

  for (let i = 0; i < arr.length; i++) {
    const callbackResult = callbackFn(arr[i], i, arr);
    console.log(">>>  callbackResult:", callbackResult);

    returnArr.push(callbackResult);
  }

  return returnArr;
};

console.log(
  mapFn_1(
    (item, index) => {
      console.log(
        "parametredeki fonksiyon çağırıldı, item: ",
        item,
        "index: ",
        index
      );

      return item * 2;
    },
    [1, 2, 3, 4, 5]
  )
);

//const example_arr_1 = ["foo", "bar", "baz"];
//example_arr_1.map((item, index, original_arr) => {
//  return item * 2;
//});
//
//const dispatch = useDispatch();
//
//dispatch(setCategory(payload));
//dispatch({
//  type: "foo",
//  payload: "bar",
//});
//
//useSelector((state) => state.authState);
//

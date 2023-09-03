// Önem derecesi: 10

/* Fonksiyon dönderen fonkisyonlar:
Bazı durumlarda fonksiyonlardan fonksiyon dönderilmesi gerekebilir.
Bu ihtiyaç genellikle bir kütüphane yazdığımızda veya dışarıdan erişilmemesi
gereken dataları kontrollü bir şekilde yönetebilmek için fonksiyonlardan
fonksiyon döndermemiz gerekebilir. Mesela useState()
ve useDispatch() fonksiyonlarını örnek olarak gösterebiliriz.

*/

// Bu değişkeni bizim yazdığımız library'deki gizli değişken olduğunu düşünelim.
const privateStore_1: any = {};

type UseDispatchFnType_1 = () => (action: {
  type: string;
  payload: any;
}) => void;

const useDispatch: UseDispatchFnType_1 = () => {
  console.log("useDispatch fonksiyonu invoke edildi.");

  return (action) => {
    console.log("useDispatch'ten dönen fonksiyon invoke edildi.");
    console.log(">>>  action:", action);

    /* Senaryo gereği privateStore_1 değişkenine dışarıdan değiştirilemez,
    sadece kütüphanenin içerisinden değiştirilebilir. Bu değişimi de
    dönderilen fonksiyon içerisinde yapmamız mümkündür. */
    privateStore_1[action.type] = action.payload;
  };
};

const dispatch = useDispatch();

console.log(">>>  dispatch:", dispatch);
dispatch({
  type: "foo",
  payload: {
    id: 1,
  },
});

//type UseStateReturnType_1 = [any, (newValue: any) => void];
//
//const [counter, setCounter] = useState(0);
//const result = useState(0);
//
//setCounter(counter + 1);
//console.log("foo bar");
//
//const result = examplefn();
//
//result();
//

/////////////////////////////////////////
/* Genel tekrar:

- Soru: Genel olarak bir fonksiyon türü nasıl tanımlanır.
- Cevap: Fonksiyonun parametrelerini ve dönüş türünü tanımlayarak fonksiyon
türü tanımlanmış olur. Örneğin:
*/
type ExampleFnType_3 = (
  param1: string,
  param2: number,
  param3?: string
) => object;

/* Soru: Parametre almayan ama geriye bir fonksiyon dönderen ve bu
dönen fonksiyona da parametre olarak bir string ifade girilen ve dönüş
türünün de number olduğu bir fonksiyon türü tanımlayın. */
// cevap:
type ExampleFnType_5 = () => (param1: string) => number;

///////////////////////////////////////////////
console.log("----------------------- useState ---------------------");

/* Soru: useState() fonksiyonunun türünü yazıp olası şekilde implement edin.
Cevap: Öncelikle useState() fonksiyonunun nasıl kullanıldığını hatırlayalım.
*/

type UseStateParamType_1 = any | (() => any);
type UseStateReturnType_1 = [
  any,
  (newValue: any | ((prevState: any) => any)) => void
];
type UseStateFnType_1 = (
  initialState?: UseStateParamType_1
) => UseStateReturnType_1;

// Burası gizli bir değişken olsun ve dışarıdan erişilemesin.
// Bu değişkenin amacı useState fonksiyonuna gönderilen
// state değerlerini saklamak olsun.
const reactAppState: any = {};

// Object.keys() ifadesi bir objenin property'lerini verir.
//const reactAppState:any = {foo: "test", bar: "test", baz: "test"}
//console.log(Object.keys(reactAppState))
// [ "foo", "bar", "baz"]

/* useState() fonksiyonunun çalışma mekanizmasının en önemli noktası
`caller` bilgisine erişebiliyor olmasıdır. Yani useState() fonksiyonunu
çağıran fonksiyona erişilmiş oluyor. Bu sayede setter fonksiyon çağırıldığında
componenti yani caller fonksiyonunu tekrar render etmek (veya diğer bir ifadeyle
invoke etmek) mümkün olabiliyor. */
function foo() {
  console.log("foo fonksiyonunu çağıran fn: ", foo.caller);
}
function bar() {
  foo();
}
console.log(bar());

// useState fonksiyonunu implement ediyoruz:
const useState: UseStateFnType_1 = (initialState) => {
  const caller = useState.caller;
  console.log(">>> useState fonksiyonunu çağıran fonksiyon:", caller);

  console.log("useState fonksiyon çağırıldı, initialState:", initialState);

  let calculatedState;
  /* initialState parametresine üç farklı türde değer gelebilir. Birincisi
  fonksiyon, ikincisi normal değer, üçüncüsü hiçbirşey gönderilmemiş olabilir.
  Birinci durum için fonksiyonun sonucu bizim stateimiz olur, diğer durumlar
  için de initialState'i doğrudan kullanırız. */
  if (typeof initialState === "function") {
    calculatedState = initialState();
  } else {
    calculatedState = initialState;
  }
  console.log(">>>  calculatedState:", calculatedState);

  const keys = Object.keys(reactAppState);
  const newIndex = keys.length + 1;
  console.log(">>> Oluşturulan yeni index: newIndex:", newIndex);

  reactAppState[newIndex] = calculatedState;
  console.log(">>>  reactAppState'in yeni değeri:", reactAppState);

  return [
    calculatedState,
    (newValue) => {
      if (typeof newValue === "function") {
        //const fnResult = ()
      } else {
        console.log("newValue bir değerdir: ", newValue);
      }

      caller();

      return;
    },
  ];
};

function ExampleComponent() {
  useState();

  const foo = 10;
  const bar = 20;

  const [baz, setBaz] = useState([]);
  baz.push("test");
  setBaz([...baz]);

  const [counter1, setCounter1] = useState(() => {
    return foo + bar;
  });
  console.log("-------------------------------------------");

  const [counter2, setCounter2] = useState(() => {
    return foo + bar + "";
  });
  console.log("-------------------------------------------");

  const [counter3, setCounter3] = useState(30);
  console.log("-------------------------------------------");

  const [counter4, setCounter4] = useState("30");
  console.log("-------------------------------------------");

  setCounter3(counter3 + 1);
  setCounter3((previousState: any) => {
    return previousState + 1;
  });
}

ExampleComponent();

/* Ödev: useCallback() hookunun türünü ve kabaca implementasyonunu yazın. 
Döküman linki: https://react.dev/reference/react/useCallback */

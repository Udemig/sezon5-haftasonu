/* Soru: Bir fonksiyon yazacağız ve ilk parametresi string olacak
ama sonraki parametreler sınırsız sayıda number olacak. */

type ExampleFnType_10 = (param1: string, ...param2: number[]) => void;
const exampleFn_10: ExampleFnType_10 = (
  param1: string,
  ...param2: number[] // Rest parameter tanımladık.
) => {
  console.log("Param1: ", param1);
  console.log("Param2: ", param2);
};

exampleFn_10("test");
exampleFn_10("test", 2);
exampleFn_10("test", 2, 4, 5, 6, 7, 8);

const obj20 = {
  foo: "foo",
  bar: "bar",
};
const obj21 = {
  ...obj20, // spread operator
  bar: "merhaba dünya",
  baz: "test",
};
console.log("obj20: ", obj20);
console.log("obj21: ", obj21);

console.log();
console.log("foo");
console.log("bar", 10, true);

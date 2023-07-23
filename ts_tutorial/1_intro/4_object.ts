let student_2: {
  id: number;
  firstname: string;
  lastname: string;
  birth_year: number;
  birth_place: string;
} = {
  id: 1,
  firstname: "murat",
  lastname: "göğebakan",
  birth_year: 1956,
  birth_place: "İzmir",
};

student_2 = {
  id: 2,
  firstname: "haluk",
  lastname: "levent",
  birth_year: 1973,
  birth_place: "istanbul",
};

console.log("Student 2'nin ismi: ", student_2.lastname);

let example_array_1: {
  id: number;
  firstname: string;
}[];

example_array_1 = [
  { id: 1, firstname: "test" },
  { id: 2, firstname: "test 2" },
];

/* Örnek: Aşağıdaki json objesinin typescript içerisinde kullanılabilecek
olan türünü yazın. */
let category_1: {
  data: {
    id: number;
    parent_id: null | number;
    name: string;
    slug: string;
    description: string;
    image: string;
    status: string;
    created_at: string;
    updated_at: string;
  }[];
  draw: number;
  recordsTotal: number;
  recordsFiltered: number;
  status: string;
};

category_1 = {
  data: [
    {
      id: 52,
      parent_id: null,
      name: "Do It Yourself (DIY)",
      slug: "52-do-it-yourself-diy",
      description: "Do It Yourself (DIY) category description.",
      image: "https://api.adoptez1artisan.com/assets/images/no-image.png",
      status: "active",
      created_at: "2021-04-24 18:49:30",
      updated_at: "2021-07-05 20:32:59",
    },
    {
      id: 49,
      parent_id: null,
      name: "Ebénisterie",
      slug: "49-ebenisterie",
      description: "Cabinetmaking category description.",
      image: "https://api.adoptez1artisan.com/assets/images/no-image.png",
      status: "active",
      created_at: "2021-04-24 18:49:30",
      updated_at: "2021-10-19 17:39:42",
    },
    {
      id: 46,
      parent_id: null,
      name: "Ascenseurs",
      slug: "46-ascenseurs",
      description: "Elevators category description.",
      image: "https://api.adoptez1artisan.com/assets/images/no-image.png",
      status: "active",
      created_at: "2021-04-24 18:49:30",
      updated_at: "2021-10-19 17:47:32",
    },
  ],
  draw: 0,
  recordsTotal: 22,
  recordsFiltered: 22,
  status: "success",
};

/* 
Aşağıdaki değişkenin türünü belirtirken aynı category_1'in türü gibi
olduğunu görüyoruz. Bu şekilde yaptığımızda kod tekrarı olmuş olur.
Bundan kaçınabilmek için typeları değişkenin dışında belirtmek gerekir.

Type'ları sadece değişkenden sonra tanımlamamız gerekmez. Değişken
dışında da ayrıca tanımlamak mümkündür. Konuyla ilgili 5_custom_types.ts
dosyasına bakınız. */
let category_2: {
  data: {
    id: number;
    parent_id: null | number;
    name: string;
    slug: string;
    description: string;
    image: string;
    status: string;
    created_at: string;
    updated_at: string;
  }[];
  draw: number;
  recordsTotal: number;
  recordsFiltered: number;
  status: string;
};

/* Daha önceden hep primitive type'ları yani zaten mevcut olan
typeları kullanıyorduk. Gerekli olduğu durumlarda yeni typelar
tanımlayabiliriz. Bir type tanımlamak için `type` ifadesi kullanılır,
sonra type'ın ismini yazarız.

Not: Custom type'ları değişkenlerden ayırt edebilmek için
pascal case kullanırız ve sonuna da "Type" ekini ekleriz. Örneğin:
CategoryType, StudentType gibi. */

type StudentType = {
  name: string;
  lastname: string;
  school_no: number;
};

// Aynı const ifadelerinde olduğu gibi custom type'ları da export edebiliriz.
// Başka dosyalardan import ederken const import eder gibi import ediyoruz
// yani süslü parantez içerisinde. Örn:
// import { CategoryType_1 } from "./5_custom_type"

export type CategoryType_1 = {
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

const category_3: CategoryType_1 = {
  data: [],
  draw: 1,
  recordsFiltered: 10,
  recordsTotal: 10,
  status: "success",
};
console.warn("🔥 | category_3:", category_3);

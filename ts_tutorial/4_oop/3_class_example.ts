class Car_1 {
  vehicle_type: "station" | "suv" | "hatchback" | "sedan" | "pickup";
  fuel_type: "electric" | "diesel" | "gasoline" | "gas";
  door_count: number;
  multimedia: boolean;
  carplay: boolean;
  seat_count: number;
  gear_type: "manual" | "automatic";
  brand: string;
  model: string;

  constructor(brand: string, model: string) {
    this.brand = brand;
    this.model = model;
  }

  start() {
    console.log("Araba çalıştı.");
  }

  stop() {
    console.log("Araba durdu.");
  }

  lock() {
    console.log("Araba kilitlendi.");
  }

  unlock() {
    console.log("Arabanın kilidi açıldı.");
  }

  go(meter: number) {
    console.log("Şu kadar metre git: ", meter);
  }

  turn(direction: "left" | "right") {
    console.log("Araç şu yöne dönüyor: ", direction);
  }

  printBasicInfo() {
    // Bu fonksiyon bu arabanın önemli özelliklerini anlamlı şekilde
    // ekrana yazsın.
    console.log(`Marka: ${this.brand}
Model: ${this.model}
Vites: ${this.gear_type}
Tür: ${this.vehicle_type}
Yakıt: ${this.fuel_type}
Unlock dönüş türü: ${this.unlock()}`);

    this.unlock();

    /* Bir obje kendi kendine erişmek istediğinde `this` ifadesini kullanırız. */
  }
}

const dursunun_arabasi = new Car_1("Audi", "Q7");
//dursunun_arabasi.brand = "Audi";
//dursunun_arabasi.model = "Q7";
console.log(">>>  initialized dursunun_arabasi:", dursunun_arabasi);

dursunun_arabasi.gear_type = "automatic";
dursunun_arabasi.door_count = 5;
dursunun_arabasi.multimedia = true;
dursunun_arabasi.vehicle_type = "suv";
dursunun_arabasi.fuel_type = "gasoline";

/* Not: Bir class'ın instance'ını konsola yazdırdığımızda o class'ın ismi de
konsolda görülür. JSON objelerinin isimleri olmadığı için isim yazılmaz. */
console.log(">>>  dursunun_arabasi:", dursunun_arabasi);

// Aşağıdaki objenin bir ismi olmadığı için ve herhangi bir class'ın kopyası
// olmadığı için burada class ismi konsolda yazılmaz.
console.log(">>> örnek araç:", {
  type: "sedan",
  fuel_type: "electric",
  door_count: 5,
  multimedia: true,
  carplay: true,
  brand: "mercedes",
  model: "e250",
});

/* Methodları da yine objeler üzerinden çağırabiliriz. Aşağıda birkaç method
çağırılması örneğini görmekteyiz. */
dursunun_arabasi.unlock();
dursunun_arabasi.start();

dursunun_arabasi.go(100);
dursunun_arabasi.turn("left");
dursunun_arabasi.go(500);

dursunun_arabasi.stop();
dursunun_arabasi.lock();

console.log("-------");

dursunun_arabasi.printBasicInfo();

console.log(">> Dursunun araba markası:", dursunun_arabasi.brand);

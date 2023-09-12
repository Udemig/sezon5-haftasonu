/* Örnek: Farklı veritabanı sistemleri üzerinde CRUD işlemleri yapan
(Create, Read, Update, Delete) class'lar yazalım. Bu class'ların methodları
abstract class tarafından belirlensin. */

abstract class AbstractDatabaseOperation {
  abstract create(data: object): object;
  abstract read(id: number): object | null;
  abstract update(id: number, newData: object): object | null;
  abstract delete(id: number): boolean;

  public findOrCreate(id: number, data: object): object {
    const foundResult = this.read(id);

    // eğer yoksa oluştur, varsa mevcut datayı dönder.
    if (foundResult === null) {
      return this.create(data);
    } else {
      return foundResult;
    }
  }

  public multiDelete(ids: number[]) {
    ids.forEach((id) => this.delete(id));
  }
}

class MysqlOperation extends AbstractDatabaseOperation {
  /* Aşağıdaki static property'yi algoritma gereği tanımladık.
  Şuan örnek yaptığımız için gerçekten de mysql'e bağlanıp
  işlemler yapmaya gerek yok.
  
  Bu static bir property olduğu için bütün objeler buna erişebilir.
  Bundan dolayı bir nevi ortak bir property gibi düşünebiliriz. */
  private static MYSQL_DB: object = {};

  /* Her obje için ayrı oluşturulan property. */
  private tableName: string;

  constructor(tableName: string) {
    super();

    // objenin property'si init ediliyor.
    this.tableName = tableName;

    // veritabanının tablosu eğer mevcut değilse init ediliyor.
    if (!MysqlOperation.MYSQL_DB[this.tableName]) {
      MysqlOperation.MYSQL_DB[this.tableName] = [];
    }
  }

  create(data: object): object {
    // Static olmayan bir methoddan static olan bir elemana erişebiliriz.
    data["id"] = MysqlOperation.MYSQL_DB[this.tableName].length + 1;

    MysqlOperation.MYSQL_DB[this.tableName].push(data);
    console.log(MysqlOperation.MYSQL_DB);
    console.log("----------------------------");

    return data;
  }

  read(id: number): object {
    throw new Error("Method not implemented.");
  }

  update(id: number, newData: object): object {
    throw new Error("Method not implemented.");
  }

  delete(id: number): boolean {
    throw new Error("Method not implemented.");
  }
}

const usersMysqlTable1 = new MysqlOperation("users");
usersMysqlTable1.create({ name: "foo1", lastname: "bar" });
usersMysqlTable1.create({ name: "foo2", lastname: "bar" });

const usersMysqlTable2 = new MysqlOperation("users");
usersMysqlTable2.create({ name: "foo3", lastname: "bar" });
usersMysqlTable2.create({ name: "foo4", lastname: "bar" });

class FileBasedOperation extends AbstractDatabaseOperation {
  /* Ödev: Dosyalara gerçekten yazılacak şekilde bu class'ın
    methodlarını implement ediniz. */

  private dbPath: string;

  constructor(tableName: string) {
    super();
    this.dbPath = "db/" + tableName;
  }

  create(data: object): object {
    throw new Error("Method not implemented.");
  }
  read(id: number): object {
    throw new Error("Method not implemented.");
  }
  update(id: number, newData: object): object {
    throw new Error("Method not implemented.");
  }
  delete(id: number): boolean {
    throw new Error("Method not implemented.");
  }
}

abstract class Cell_1 {
  public id: string;
  public type: string;

  public abstract move();
}

class TerliksiHayvan extends Cell_1 {
  public move() {
    console.log("Anten vasıtasıyla hareket ediyorum.");
  }

  public swim() {
    console.log("TErliksi hayvan yüzüyor.");
  }
}

class Akyuvar extends Cell_1 {
  public move() {
    console.log("Uzayıp kısalarak solucan gibi hareket ediyorum.");
  }

  public eat_enemy() {
    console.log("Düşmanı yiyor.");
  }
}

const terliksi_hayvan_1 = new TerliksiHayvan();
terliksi_hayvan_1.move();
terliksi_hayvan_1.move();

const akyuvar_1 = new Akyuvar();
akyuvar_1.move();

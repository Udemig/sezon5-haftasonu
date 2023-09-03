// Önem derecesi: 7.5

/* Inheritence (Kalıtım veya miras almak):

Nesnelerin yeni versiyonları oluşturulduğunda öncekinin özelliklerini devralırlar.
Bu işlemi yazılım içerisinde yapmak için classların `extends` ifadesiyle
bir üst class'tan property ve methodları miras alır. Bu işleme inheritence
işlemi denir.

*/

class EniacComputer_1 {
  energy: number;
  size: [number, number, number];
  weight: number;
  processor_speed: number;
  name: string;
  manufactur_date: Date;

  start() {
    console.log("eniac computer starting, name: " + this.name);
  }

  shutdown() {
    console.log("eniac computer shutting down, name: " + this.name);
  }

  process(customFunction: () => number) {
    const result = customFunction();
    console.log("Eniac işlemi tamamladı, sonuç: ", result);
  }
}

const ulviyes_eniac_computer = new EniacComputer_1();
ulviyes_eniac_computer.name = "Ulviyenin gözbebeği";

ulviyes_eniac_computer.start();

ulviyes_eniac_computer.process(() => {
  return 4 + 10;
});

ulviyes_eniac_computer.process(() => {
  return Math.tan(10);
});

ulviyes_eniac_computer.process(() => {
  return Math.pow(10, 9);
});

ulviyes_eniac_computer.shutdown();

/* Inheritence olayı tam olarak burada başlıyor. Nesnelerin doğası gereği yeni
özelliklere sahip olan üst versiyonları üretilebiliyor. Burada yapılan işin
tam açıklaması eski özellikleri ve davranışları (property ve method) aynen alıp
yeni özelliklere sahip olan bir class oluşturmak. */
type IBMComputerKeyboardLayoutType_1 = "butterfly" | "iso" | "other";

type IBMComputerMonitorType_1 = "monochrome_green" | "monochrome_white";

class IBMComputer_1 extends EniacComputer_1 {
  keyboard_layout: IBMComputerKeyboardLayoutType_1;
  monitor: IBMComputerMonitorType_1;
  floppy_disk: "3.5" | "5.5";
  operating_system: "dos" | "unix" | "linux" | "other";

  mountKeyboard(keyboard: IBMComputerKeyboardLayoutType_1) {
    this.keyboard_layout = keyboard;
    console.log("Klavye değişimi yapıldı, yeni klavye: ", keyboard);
  }

  mountMonitor(monitor: IBMComputerMonitorType_1) {
    this.monitor = monitor;
    console.log("Monitör değişimi yapıldı, yeni monitör: ", monitor);
  }
}

const secils_ibm_computer = new IBMComputer_1();
secils_ibm_computer.name = "Seçilin uçağı";
secils_ibm_computer.size = [50, 15, 40];
secils_ibm_computer.processor_speed = 4.77;
secils_ibm_computer.operating_system = "unix";

secils_ibm_computer.mountKeyboard("iso");
secils_ibm_computer.mountMonitor("monochrome_green");
secils_ibm_computer.start();

secils_ibm_computer.process(() => {
  return 5 * 5;
});

secils_ibm_computer.shutdown();

/* Inheritence özellikleri:
- Aynı anda bir adet class extend edilebilir, birden fazla extend yapılamaz.
- Child class (extend eden), parent class'ın (extend edilen) protected ve public
  olan elemanlarına erişebilir. Private olanlara erişemez. Örneğin:
*/

class ParentClass_1 {
  // bu iki property'ye aşağıdaki class tarafından erişilebilir.
  public prop1: number = 1;
  protected prop2: number = 2;

  // burası "private" olarak belirtildiği için aşağıdaki class tarafından erişilemez.
  private prop3: number = 3;
}

class ChildClass_1 extends ParentClass_1 {
  public prop4: number = 4;
  protected prop5: number = 5;
  private prop6: number = 6;

  method1() {
    // prop1 ve prop2'ye ChildClass tarafından erişilebilmektedir.
    console.log("prop1: ", this.prop1);
    console.log("prop2: ", this.prop2);

    // prop3'e erişilemez ve aşağıdaki satır hata verir.
    // console.log("prop3: ", this.prop3);
  }
}

class SecondChildClass_1 extends ChildClass_1 {
  method2() {
    // en üst class dahil yukarıdaki tüm class'ların public ve protected olan
    // elemanlarına erişebiliyoruz.
    console.log("prop1: ", this.prop1);
    console.log("prop2: ", this.prop2);
    console.log("prop4: ", this.prop4);
    console.log("prop5: ", this.prop5);
  }
}

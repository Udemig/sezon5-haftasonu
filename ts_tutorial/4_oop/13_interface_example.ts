/* Örnek: Hem interface hem class hem de abstract class'lar kullanılarak
bir hiyerarşik class yapısı oluşturalım ve bunu `instanceof` ifadesiyle
birlikte kullanalım. */

type PhoneLineType = {
  phoneNumber: string;
  owner: string;
  operator: string;
};

interface PhoneInterface {
  phoneLine: PhoneLineType;
  manufactureYear: number;
  price: number;
  handsetConnectionType: "wired" | "wireless";

  makeCall(targetPhoneNumber: string);
  receiveCall();
}

interface CellPhoneInterface {
  owner: string;
  brand: string;
  manufactureYear: number;
  price: number;

  callFromMobile(targetPhoneNumber: string);
  callFromInternet(targetPhoneNumber: string);

  receiveCall();

  sendSms(targetPhoneNumber: string, message: string);

  lock();
  unlock();

  open();
  shutdown();
}

class PanasonicPhone implements PhoneInterface {
  phoneLine: PhoneLineType;
  manufactureYear: number;
  price: number;
  handsetConnectionType: "wired" | "wireless";

  makeCall(targetPhoneNumber: string) {
    console.log("Şu numara aranıyor: ", targetPhoneNumber);
  }
  receiveCall() {
    console.log("Arayanı cevaplıyoruz.");
  }
}

class ZekiMureninTelefonu implements PhoneInterface {
  phoneLine: PhoneLineType;
  manufactureYear: number;
  price: number;
  handsetConnectionType: "wired" | "wireless";

  makeCall(targetPhoneNumber: string) {
    console.log("Zeki müren şu numarayı arıyor: ", targetPhoneNumber);
  }
  receiveCall() {
    console.log("Zeki müren arayanı cevaplıyor.");
  }
}

class EricssonCellphone implements CellPhoneInterface {
  owner: string;
  brand: string;
  manufactureYear: number;
  price: number;

  callFromMobile(targetPhoneNumber: string) {
    console.log("Şu numara cepten aranıyor: ", targetPhoneNumber);
  }

  callFromInternet(targetPhoneNumber: string) {
    console.log("Şu numara internetten aranıyor: ", targetPhoneNumber);
  }

  receiveCall() {
    console.log("Cepten arayanı cevaplıyoruz.");
  }

  sendSms(targetPhoneNumber: string, message: string) {
    console.log("Şu numaraya sms gönderiliyor:", targetPhoneNumber, message);
  }

  lock() {
    console.log("Şu işlem yapıldı: lock");
  }
  unlock() {
    console.log("Şu işlem yapıldı: unlock");
  }
  open() {
    console.log("Şu işlem yapıldı: open");
  }
  shutdown() {
    console.log("Şu işlem yapıldı: shutdown");
  }
}

class NokiaCellphone implements CellPhoneInterface {
  owner: string;
  brand: string = "Nokia";
  manufactureYear: number = 2003;
  price: number = 3000;

  callFromMobile(targetPhoneNumber: string) {
    console.log(
      "Nokia telefondan şu numara cepten aranıyor: ",
      targetPhoneNumber
    );
  }

  callFromInternet(targetPhoneNumber: string) {
    console.log(
      "Nokia telefondan şu numara internetten aranıyor: ",
      targetPhoneNumber
    );
  }

  receiveCall() {
    console.log("Nokia telefondan arayanı cevaplıyoruz.");
  }

  sendSms(targetPhoneNumber: string, message: string) {
    console.log(
      "Nokia telefondan sms gönderiliyor:",
      targetPhoneNumber,
      message
    );
  }

  lock() {
    console.log("Nokia telefonda şu işlem yapıldı: lock");
  }
  unlock() {
    console.log("Nokia telefonda şu işlem yapıldı: unlock");
  }
  open() {
    console.log("Nokia telefonda şu işlem yapıldı: open");
  }
  shutdown() {
    console.log("Nokia telefonda şu işlem yapıldı: shutdown");
  }
}

function call(
  caller: PhoneInterface | CellPhoneInterface,
  targetPhoneNumber: string
) {
  if (caller instanceof NokiaCellphone) {
    console.log("Cepten arıyoruz:");
    caller.callFromMobile(targetPhoneNumber);
  } else if (caller instanceof EricssonCellphone) {
    console.log("Ericcson marka telefondan arıyoruz");
    caller.callFromMobile(targetPhoneNumber);
  } else if (caller instanceof PanasonicPhone) {
    console.log("Panasonic telefondan yani sabit hattan arıyoruz");
    caller.makeCall(targetPhoneNumber);
  } else if (caller instanceof ZekiMureninTelefonu) {
    console.log("Zeki mürenden yani sabit hattan arıyoruz");
    caller.makeCall(targetPhoneNumber);
  }
}

function callFromMobile(caller: CellPhoneInterface, targetPhoneNumber: string) {
  caller.callFromMobile(targetPhoneNumber);
}

const obj_1 = new NokiaCellphone();
const obj_2 = new EricssonCellphone();
const obj_3 = new PanasonicPhone();
const obj_4 = new ZekiMureninTelefonu();

call(obj_1, "5321234567");
call(obj_2, "5321234567");
call(obj_3, "5321234567");
call(obj_4, "5321234567");

callFromMobile(obj_1, "54444444");
callFromMobile(obj_2, "54444444");

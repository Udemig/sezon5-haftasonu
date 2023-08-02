/*
>> never type <<

Bir fonksiyondan bir hata fırlatılıyorsa o zaman dönüş türü
olarak `never` kullanılır.

*/

/* Exception handling: Yüksek seviyeli dillerde hata oluştuğunda bunu yakalamak
gerekir. İşte bu yakalama işlemine exception handling denir. Genelde senaryo
şu şekildedir. Exception (veya error) oluşabilecek bir kod bloğunu try-catch
içerisine alırız. Eğer try içerisinde bir exception fırlatılırsa bunu catch
bloğunda yakalayıp işleriz. İşlemekten kasıt bu hata durumunu sms olarak
göndermek veya log tutmak veya veritabanındaki bir kaydı güncellemek olabilir
veya kullanıcıya anlamlı bir hata mesajı gösterebiliriz. */

try {
    // api.get() fonksiyonundan hata fırlatılma ihtimali var. Bu durumda
    // ne olur? Bu durumda bu satırda çalışma kesilir ve hata catch'e düşer.

    //const response = await axios.get("ornek/api/adresi");
    //console.log(">>>  response:", response);
} catch (e) {
    // try bloğu içerisinde oluşan hata bu bölgede yakalanmıştır.

    console.log("Bir hata oluştu: ", e)
}


function calculate_1(x: number, y: number): number | never {
    if (x <= 0 || y <= 0) {
        throw new Error("x ve y sıfırdan büyük olmalı.");
    }

    // Not: return ifadesinin bulunduğu satırda noktalı virgül yoksa alt satırdaki
    // ifadeler de çalıştırılır.
    return x // Alt satıra geçmek
        + //    için yorum satırı kullanıldı.
        y;
}

try {
    const x = 10;
    const y = 20;
    const total = calculate_1(x, y);
    console.log(">>>  total:", total);
} catch (e: any) {
    //alert("Bir hata oluştu, lütfen formu kontrol ediniz.");
    //setErrorMessage("Bir hata oluştu, lütfen tekrar deneyin.");
    console.log("!! Bir hata oluştu:", e.message);
}


/* `never` türünün kullanımıyla ilgili farklı senaryolar üretilebilir. Ama
genel olarak nerede kullanılır diye soracak olursak bir fonksiyondan hata
fırlatılması ihtimali varsa o zaman bu fonksiyonun dönüş türü olarak
kullanmak gerekir. */


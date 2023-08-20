/* Object Oriented Programming (OOP)

Bilgisayarlar ilk çıktıkları dönemde yazılan programlar davranış tabanlı
olarak yazılıyordu. Bunun diğer ifadesi fonksiyonel programlama. Fakat
bilgisayarlar güçlendikçe ve ihtiyaçların karmaşıklığı arttıkça bu yöntemin
yetersiz olduğu anlaşıldı. Bundan dolayı yeni programlama yöntemleri
yani paradigmaları bulunmaya çalışıldı.

Bu paradigmalar (yani yöntemler) arasında en çok tercih edilen yöntem
nesne tabanlı programlama yaklaşımıdır. Bu yöntemde gerçek dünyayı
simüle ettiğimiz varsayılır. Yani örneğin vantilatör nesnesini yazılım
içerisinde ifade ederken hem fiziksel özelliklerini (yani data veya property)
hem de davranışsal özelliklerini (yani methodlarını) tutan bir yapı şeklinde
yazabiliriz.

OOP yöntemiyle kodlama yapmak için ihtiyacımız olan iki tane keyword vardır.
Bunlardan birincisi `class` keywordü, ikincisi de `interface` keywordü.
Bugün class'lar üzerinde duracağız. Diğerini ilerleyen derslerde göreceğiz.

*/

/* Typescriptte class nasıl yazılır? Önce `class` keywordü, ardından isim,
ardından süslü parantezler yazılır. */

class AirFan_1 {
  // property'leri tanımlayalım:
  openCloseButton: boolean;
  level: AirFanLevelEnum;
  usageType: AirFanUsageType_1;
}

type AirFanUsageType_1 = "desktop" | "mobile";

// property'lerin türünü tanımlarken kendi oluşturduğumuz türleri de kullanabiliriz.
enum AirFanLevelEnum {
  Level_1,
  Level_2,
  Level_3,
}

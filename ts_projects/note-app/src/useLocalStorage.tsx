// custom hook
// react hooklarına benzer görev yapan
// ama proje gereksinimlerine göre kendi
// oluştrudğumuz hooklar'a denir

import { useEffect, useState } from 'react';

// göndeirlen veriyi local'storage'a ekler

export function useLocaleStorage<T>(key: string, initialValue: T) {
  // state'i tanımlarız
  const [value, setValue] = useState(() => {
    // lokal'den verileri alma
    const jsonValue = localStorage.getItem(key);

    if (jsonValue === null) {
      // lokale ekleyiceğimiz elemanın başlangıç değerini belirleriz
      return initialValue;
    } else {
      // local'de bulunursa bu değeri geri döndürür
      return JSON.parse(jsonValue);
    }
  });

  // useEffect kullanarak value her değitiğinde local'i güncelle
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  // bileşenleri döndürülecek değerleri belirleme
  return [value, setValue] as [T, typeof setValue];
}

import axios from "axios";

export default function useApi() {
    // yeni bir axios objesi oluştur ve bu objeyi `api` isimli değişkene gönder.
    const api = axios.create()

    // api değişkeninin baseURL property'sini ayarla
    api.defaults.baseURL = "https://api.adoptez1artisan.com"

    // API dökümanında belirtildiği üzere content-type bilgisini ayarlıyoruz.
    api.defaults.headers["content-type"] = "application/json; charset=UTF-8"

    // Konfigürasyon işlemi tamamlandı, api objesini dönder.
    return api
}

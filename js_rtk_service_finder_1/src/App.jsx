import { Routes, Route } from "react-router-dom";

/**
 * Eğer klasör ismini yazarsak o klasör altındaki index.js veya index.jsx
 * dosyalarını arar, eğer bulursa import eder, bulamazsa hata verir.
 */
import Header from "./components/header";
import Footer from "./components/footer";
import MainPage from "./pages/main-page";
import CategoryDetailPage from "./pages/category-detail-page";
import ServiceDetailPage from "./pages/service-detail-page";
import BlogDetailPage from "./pages/blog-detail-page";
import useApi from "./hooks/useApi";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setCategories } from "./redux/categorySlice";
import LoginPage from "./pages/login-page";

function App() {
  const api = useApi();
  const dispatch = useDispatch();

  // useEffect hookuna async function gönderemeyiz. Bunu yaparsak aşağıdaki hatayı alırız:
  // It looks like you wrote useEffect(async () => ...) or returned a Promise.
  // Instead, write the async function inside your effect and call it immediately:
  useEffect(() => {
    // immediate call function yani kendi kendini çağıran fonksiyonlar
    // Bunun callback function ile bağlantısı yoktur.

    /**
     * Immedia call function'ın amacı ve özellikleri:
     *
     * 1- Amacımız öyle bir fonksiyon yazacağız ki bu fonksiyon tanımlandığı
     *    yerde derhal kendi kendini çağıracak ve sonra tekrar çağırmayacağız.
     * 2- Klasik yöntemlerle oluşturduğumuz fonksiyonları birden fazla kez
     *    çağırabiliriz bu yüzden bunlar immediate call function değillerdir.
     * 3- Immediate call function'ların ismi yoktur.
     */

    (async () => {
      // burası immedia call async function

      // axios'tan gelen AxiosResponse objesini alıyoruz. AxiosResponse objesinin
      // içerisinde şu propertyler mevcuttur: data, status, statusText, headers, config
      const categoryResp = await api.get(
        "public/categories/listMainCategories"
      );

      // Bu bilgiler örnek olması amacıyla yazıldı, diğer sayfalar içerisinde uygun şekilde
      // tekrar yazılacak.
      //const jobResp = await api.get(
      //  "public/clientProjects/latestJobs?status=pending"
      //);
      //const blogResp = await api.get(
      //  "public/blogs/list?status=active&length=6"
      //);
      //const ornekResp = await api.get(
      //  "public/blogs/ornek?status=active&length=6"
      //);

      // API'den gelen JSON datasını ekrana basıyoruz.
      console.log(">> RESP", categoryResp.data);

      /**
       * categoryResp objesi AxiosResponse türünden bir objedir. Bu objenin içerisinde
       * data property'si vardır ve bu property axios tarafından oluşturulur. Bu property
       * içerisindeki bilgi API'den gelen json objesidir. Bu json objesinin içerisindeki
       * `data` property'si de kategori listesini tutar. Bu yüzden data.data şeklinde
       * yazarak kategori listesini alırız.
       */
      dispatch(setCategories(categoryResp.data.data));
    })();
  }, []);

  /*
  Projemizin route yapısı şu şekilde olsun:
  
  Anasayfa linki, burada kategori listesi gösteriliyor:
  /

  Kategori detay linki, burada kategori bilgisi, servis listesi ve blog listesi olacak:
  /category/:slug

  Servis detay linki, burada servis bilgisi ve o servise ait olan blog listesi olacak:
  /service/:slug

  Blog detay linki, burada blog bilgileri görünsün:
  /blog/:slug
  
  */

  return (
    <>
      <Header />

      <Routes>
        <Route index element={<MainPage />} />
        <Route path="category/:slug" element={<CategoryDetailPage />} />
        <Route path="service/:slug" element={<ServiceDetailPage />} />
        <Route path="blog/:slug" element={<BlogDetailPage />} />
        <Route path="login" element={<LoginPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;

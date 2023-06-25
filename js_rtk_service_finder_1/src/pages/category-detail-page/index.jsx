import { Link, useParams } from "react-router-dom";
import useApi from "../../hooks/useApi";
import { useEffect, useState } from "react";
import axios from "axios";

export default function CategoryDetailPage() {
  // Öncelikle bize bir api lazım (yani konfigüre edilmiş axios objesi).
  const api = useApi();

  // react-router-dom tarafından sağlanan dinamik parametreleri alalım.
  // App.jsx dosyasında bu parametreler `:slug` şeklinde tanımlı olduğuna dikkat ediniz.
  const params = useParams();

  /**
   * categoryDetail state'inin ilk değeri null ise loading ekranı göstereceğiz, aksi
   * halde dataları göstereceğiz.
   */
  const [categoryDetail, setCategoryDetail] = useState(null);

  useEffect(() => {
    // useEffect içerisinde asenkron bölgeye ulaşabilmek için immediate call function oluşturuyoruz:
    (async () => {
      // şuan asenkron bölgedeyiz, bu sayede await kullanabiliriz.
      const categoryDetailResponse = await api.get(
        "public/categories/getBySlug/" + params.slug
      );

      console.log(">> kategori detay bilgisi:", categoryDetailResponse);
      setCategoryDetail(categoryDetailResponse.data.data);
    })();
  }, []);

  if (categoryDetail === null) {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="page-content">
                <h1>Page Loading...</h1>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="page-content">
              <div className="main-banner">
                <div className="row">
                  <div className="col-lg-7">
                    <div className="header-text">
                      <h3>Kategori Başlığı Buraya gelsin</h3>
                      <p className="text-white">
                        Burası kategori açıklaması...
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="most-popular">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="heading-section">
                      <h4>
                        <em>Services</em>
                      </h4>
                    </div>
                    <div className="row">
                      {}
                      <div className="col-lg-3 col-sm-6">
                        <div className="item">
                          <Link to={"category/" + "test"}>
                            <img src={""} alt="" />
                            <h4>{"test"}</h4>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

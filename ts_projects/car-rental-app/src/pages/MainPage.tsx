import { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import { fetchCars } from '../utils';
import { ICarProps } from '../types';
import Card from '../components/Card';
import ShowMore from '../components/ShowMore';
import { useSearchParams } from 'react-router-dom';
import SearchBar from '../components/Filters/SearchBar';
import CustomFilter from '../components/Filters/CustomFilter';
import { fuels, years } from '../constants';

const MainPage = () => {
  // arama parametrelerine erişim sağlar
  const [params, setParams] = useSearchParams();
  const [cars, setCars] = useState<ICarProps[]>([]);

  // varsa urlden limiti al yoksa 5 olarak belirle
  const limit = Number(params.get('limit')) || 5;

  // parametreler her değiştiğinde yeniden api isteği at
  useEffect(() => {
    //  url'deki bütün parametreli bir objeye aktar
    const paramsObj = Object.fromEntries(params.entries());

    fetchCars(paramsObj)
      .then((data: ICarProps[]) => setCars(data))
      .catch(() => alert('Verileri çekerken bir hata oluştu'));
  }, [params]);

  // veriniin geldiğini kontrol etme
  const isDataEmpty: boolean =
    !Array.isArray(cars) || cars.length < 1 || !cars;

  return (
    <div>
      {/* üst kısım */}
      <Hero />

      {/* katalog */}
      <div className="mt-12 padding-x padding-y max-width">
        {/* başlık */}
        <section className="home__text-container">
          <h1 className="text-4xl font-extrabold">Araba Kataloğu</h1>
          <p>Beğenebileceğin arabaları keşfet</p>
        </section>

        {/* filtreler */}
        <section className="home__filters">
          <SearchBar />

          <div className="home__filter-container">
            <CustomFilter title="Yakıt Tipi" options={fuels} />
            <CustomFilter title="Üretim Yılı" options={years} />
          </div>
        </section>

        {/* araba listesi */}
        {isDataEmpty ? (
          <div className="home__error-container">
            <h2>Üzgünüz Herhangi Bir Sonuç Bulunamadı</h2>
          </div>
        ) : (
          <>
            <section>
              <div className="home__cars-wrapper">
                {cars.map((car, i) => (
                  <Card key={i} car={car} />
                ))}
              </div>
            </section>
          </>
        )}

        {/* dah fazla yükle butonu */}
        <ShowMore limit={limit} isNext={limit < 30} />
      </div>
    </div>
  );
};

export default MainPage;

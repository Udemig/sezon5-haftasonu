import Select from 'react-select';
import { makes } from '../../constants';
import { useMemo, useState } from 'react';
import { IOption } from '../../types';
import SearchButton from './SearchButton';
import { useSearchParams } from 'react-router-dom';

const SearchBar = () => {
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [params, setParams] = useSearchParams();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (make && model === '') {
      // marka var model yoksa
      setParams({ make: make.toLowerCase() });
    } else if (make && model) {
      // her ikisi de varsa
      setParams({
        make: make.toLowerCase(),
        model: model.toLowerCase(),
      });
    } else {
      alert('lütfen marka seçiniz');
    }
  };

  // useMemo hook'u bir değeri hespalamak ve bu değeri
  // bir sonraki render sırasında hesaplamadan önce
  // önbellekte saklamak için kullanılır
  // bu performans artttırmada yardımcı olur
  // smaliyetli işlemler yapılıyorsa tercih edilir
  // gereksiz hesaplamaların önüne geçer
  // string dizisini option dizisine çevirdik
  const newMakes = useMemo(
    () =>
      makes.map((item) => ({
        value: item,
        label: item,
      })),
    [makes]
  );

  return (
    <form onSubmit={handleSubmit} className="searchbar gap-3">
      {/* marke seçme select'i */}
      <div className="searchbar__item text-black">
        <Select
          className="w-full"
          options={newMakes}
          onChange={(e: IOption | null) => e && setMake(e.value)}
        />
        <SearchButton styling="sm:hidden" />
      </div>
      {/* model seçme inp */}
      <div className="searchbar__item">
        <img
          width={25}
          className="absolute ml-4"
          src="/model-icon.png"
          alt=""
        />
        <input
          className="searchbar__input text-black rounded"
          placeholder="Civic"
          type="text"
          onChange={(e) => setModel(e.target.value)}
        />
        <SearchButton styling="sm:hidden" />
      </div>

      <SearchButton styling="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;

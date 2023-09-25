import { colors } from '../constants';
import { ICarProps } from '../types';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key':
      '75dc092df0msh3c03138e5cc1ea2p19035ejsn916bcc592247',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
  },
};

interface fetchParams {
  make?: string;
  model?: string;
  limit?: string;
  year?: string;
  fuel?: string;
}

export async function fetchCars(filters: fetchParams) {
  // url'den alaının parametrelere erişme
  // marka ve limmit yoksa defayult değerler belirledik
  const {
    make = 'bmw',
    model = '',
    limit = '5',
    year = '',
    fuel = '',
  } = filters;

  const res = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?limit=${limit}&make=${make}&model=${model}&year=${year}&fuel_type=${fuel}`,
    options
  );

  const data = await res.json();

  return data;
}

// resim oluşturur
export const generateImage = (
  car: ICarProps,
  angle?: string
): string => {
  // js url objesi oluşturma
  const url = new URL('https://cdn.imagin.studio/getimage');

  // url'e gerekli arama parametreleri ekleme
  url.searchParams.append('customer', 'hrjavascript-mastery');
  url.searchParams.append('make', car.make);
  url.searchParams.append(
    'modelFamily',
    // birden fazla kelimeyse ilk kelimeyi al
    // ilk kelimede / varsa /'tan öncesini al
    car.model.split(' ')[0].split('/')[0]
  );

  url.searchParams.append('zoomType', 'fullscreen');

  // diziden rastgele  renk id 'si seçme
  const i = Math.round(Math.random() * colors.length);
  url.searchParams.append('paintId', colors[i]);

  if (angle) {
    url.searchParams.append('angle', angle);
  }

  // arabaının fotoğrafın url'ini döndür
  return url.href;
};

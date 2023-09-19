import { useState } from 'react';
import { ICarProps } from '../../types';
import CustomButton from '../CustomButton';
import CarInfo from './CarInfo';
import DetailModal from './DetailModal';

type CardProps = {
  car: ICarProps;
};

const Card = ({ car }: CardProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="car-card group">
      {/* başlık */}
      <h2 className="car-card__content-title">
        {car.make} {car.model}
      </h2>

      {/* fiyat */}
      <p className="flex mt-6 text-[32px]">
        <span className="self-start text-[14px] font-semibold">
          TL
        </span>
        {Math.round(Math.random() * 2000) + 500}
        <span className="self-end text-[14px] font-medium">/gün</span>
      </p>
      {/* resim */}

      <div className="w-full h-40 my-3 object-contain">
        <img
          src="/hero.png"
          className="w-full h-full object-contain"
        />
      </div>

      {/* bilgiler */}
      <div className="relative w-full mt-2">
        <div className="group-hover:invisible mt-2 flex justify-between text-gray w-full ">
          <CarInfo
            title={car.transmission === 'a' ? 'Otomatik' : 'Manuel'}
            icon="/steering-wheel.svg"
          />
          <CarInfo
            title={car.drive.toUpperCase()}
            icon="/steering-wheel.svg"
          />
          <CarInfo
            title={car.city_mpg + 'MPG'}
            icon="/steering-wheel.svg"
          />
        </div>

        <div className="car-card__btn-container">
          <CustomButton
            handleClick={() => setIsOpen(true)}
            title="Daha Fazla"
            designs="w-full py-[16px] rounded-full bg-primary-blue text-white transition hover:bg-blue-800"
            rIcon="/right-arrow.svg"
          />
        </div>
      </div>

      {/* detay modalı */}
      <DetailModal
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        car={car}
      />
    </div>
  );
};

export default Card;

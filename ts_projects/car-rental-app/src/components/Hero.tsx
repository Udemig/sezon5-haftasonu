import CustomButton from './CustomButton';

const Hero = () => {
  // TODO Daha sonra implent et
  const flyTo = () => {
    alert('Aşşağıya kayıyor');
  };

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x max-h-[920px]">
        <h1 className="hero__title">
          Özgürlüğü Hisset, Yolculuğa Başla!
        </h1>
        <p className="hero__subtitle text-gray-200">
          Altın standartta hizmetle unutulmaz bir yolculuğa hazır
          mısın? Araç kiralama deneyimini Altın Seçenekleri ile
          taçlandırarak her anını özel kılabilirsin.
        </p>

        <CustomButton
          handleClick={flyTo}
          title="Arabaları Keşfet"
          designs="bg-primary-blue rounded-full mt-10"
        />
      </div>

      <div className="w-100 flex justify-center">
        <img src="/hero.png" className="img-fluid object-contain" />
      </div>
    </div>
  );
};

export default Hero;

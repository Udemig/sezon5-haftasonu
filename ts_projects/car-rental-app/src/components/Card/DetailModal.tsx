import { ICarProps } from '../../types';

interface DeailModalProps {
  isOpen: boolean;
  closeModal: () => void;
  car: ICarProps;
}

const DetailModal = ({
  isOpen,
  closeModal,
  car,
}: DeailModalProps) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-25 z-20 flex items-center justify-center p-4">
          <div className="p-6 relative bg-white w-full max-w-lg max-h-[90vh] rounded-2xl flex flex-col gap-5 shadow-xl overflow-auto">
            {/* kapatma butonu */}
            <button
              onClick={closeModal}
              className="cursor-pointer p-1 absolute end-1 top-1 z-10 bg-white rounded-full"
            >
              <img src="/close.svg" />
            </button>

            {/* resimler */}
            <div className="flex-1 flex flex-col gap-3">
              {/* büyük */}
              <div className="relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg">
                <img
                  src="/hero.png"
                  className="h-full mx-auto object-contain"
                />
              </div>
              {/* küçükler */}
              <div className="flex gap-3">
                <div className="relative w-full h-24 bg-primary-blue-100 rounded-lg">
                  <img
                    className="h-full mx-auto object-contain"
                    src="/hero.png"
                  />
                </div>
                <div className="relative w-full h-24 bg-primary-blue-100 rounded-lg">
                  <img
                    className="h-full mx-auto object-contain"
                    src="/hero.png"
                  />
                </div>
                <div className="relative w-full h-24 bg-primary-blue-100 rounded-lg">
                  <img
                    className="h-full mx-auto object-contain"
                    src="/hero.png"
                  />
                </div>
              </div>
            </div>

            {/* bilgiler */}
            <div className="mt-3 flex flex-wrap gap-4">
              {Object.entries(car).map(([key, value]) => (
                // Objeye önce diziye çevirdik
                // Daha sonra diziyi dönüp ekrana bastık
                <div className="flex justify-between w-full text-right">
                  <h4 className="text-gray capitalize">
                    {key.split('_').join(' ')}
                  </h4>
                  <p className="font-semibold"> {value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DetailModal;

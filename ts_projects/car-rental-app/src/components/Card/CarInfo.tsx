type InfoProps = {
  icon: string;
  title: string;
};

const CarInfo = ({ icon, title }: InfoProps) => {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <img src={icon} width={20} />
      <p className="text-[14px]">{title}</p>
    </div>
  );
};

export default CarInfo;

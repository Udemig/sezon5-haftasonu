import { Link } from 'react-router-dom';
import CustomButton from './CustomButton';

const Header = () => {
  return (
    <header className="absolute w-full z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center px-6 sm:px-16 py-4">
        <Link to={'/'}>
          <img width={50} src="/bmw.png" />
        </Link>

        <CustomButton
          title="Kaydol"
          designs="bg-primary-blue rounded-full min-w-[130px] transition duration-500  hover:bg-blue-800"
        />
      </nav>
    </header>
  );
};

export default Header;

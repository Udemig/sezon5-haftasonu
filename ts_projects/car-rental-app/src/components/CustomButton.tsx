import { IButtonProps } from '../types';

const CustomButton = ({
  title,
  designs,
  btnType,
  handleClick,
  rIcon,
}: IButtonProps) => {
  return (
    <button
      onClick={handleClick}
      disabled={false}
      type="button"
      className={`custom-btn ${designs}`}
    >
      <span className="flex-1">{title}</span>

      {rIcon && (
        <div className="relative w-6 h-6">
          <img src={rIcon} />
        </div>
      )}
    </button>
  );
};

export default CustomButton;

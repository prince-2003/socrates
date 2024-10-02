interface ButtonPrimaryProps {
  type?: 'button' | 'submit' | 'reset';
  innerHtml: string;
  bgColor?: 'black' | 'white' | 'transparent';
  className?: string;
  onClick?: () => void; 
}

function ButtonPrimary({ type = 'button', innerHtml, className, bgColor = 'transparent', onClick = () => {} }: ButtonPrimaryProps) {
  const textColor = bgColor === 'black' ? 'text-white' : 'text-black';
  const borderColor = bgColor === 'black' || bgColor === 'transparent' ? 'border-black' : 'border-white';

  return (
    <button
      type={type} // Ensure the type is set correctly
      className={`flex ${className} justify-center items-center ${textColor} ${borderColor} text-[.7rem] md:text-[1rem] px-5 py-2 border rounded-lg transition duration-300 overflow-hidden relative group`}
      style={{ backgroundColor: bgColor }}
      onClick={onClick}
    >
      <div className="relative overflow-hidden">
        <div className="relative inset-0 transition-transform duration-300 transform group-hover:-translate-y-full">
          {innerHtml}
        </div>
        <div className="absolute inset-0 transition-transform duration-300 transform translate-y-full group-hover:translate-y-0">
          {innerHtml}
        </div>
      </div>
    </button>
  );
}

export default ButtonPrimary;
interface ButtonPrimaryProps {
    innerHtml: string;
    bgColor?: 'black' | 'white' | 'transparent';
  }
  
  function ButtonPrimary({ innerHtml, bgColor = 'transparent' }: ButtonPrimaryProps) {
    const textColor = bgColor === 'black' ? 'text-white' : 'text-black';
  
    return (
      <button
        className={`flex justify-center items-center ${textColor} md:text-[.7rem] lg:text-[1rem] px-5 py-2 border border-black rounded-lg transition duration-300 overflow-hidden relative group`}
        style={{ backgroundColor: bgColor }}
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
  
import React from 'react';

const Header = () => {
  return (
    <div className="border-2 border-blue-400 flex items-center justify-between p-8 w-full h-20  bg-oasis fixed">
      <div className="border-2 border-red-400 font-bold text-4xl ">
        Stalktrendz
      </div>
      <div className="border-2 border-green-400 flex space-x-20  text-xl uppercase">
        <span>Contact</span>
        <span>Cart</span>
      </div>
    </div>
  );
};

export default Header;

import { useState } from "react";
import { Menu } from "../menuBurguer/Menu";

export const Header = ({ dropdownMenu }: any) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleDropDown = (): void => {
    console.log(isOpen);
    return setIsOpen(!isOpen);
  };

  return (
    <div className="relative m-auto max-w-screen-xl">
      <header className="m-auto max-w-screen-xl flex place-content-center justify-items-center justify-between p-8">
        <h1 className="text-4xl text-white font-bold text-center self-center">
          440
        </h1>
        <nav className="md:cursor-pointer self-center">
          <Menu changeDropdownStatus={handleDropDown} />
        </nav>
      </header>
      {isOpen && <div className="max-w-max absolute bottom-0 right-8 top-24">{dropdownMenu}</div>}
    </div>
  );
};

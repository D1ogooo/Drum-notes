import { GiDrum } from "react-icons/gi";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <header className="bg-custom-dark w-full h-[3.5rem]">
        <div className="mx-auto w-[90%] h-[3.5rem] flex justify-between items-center">
          <Link to='/' className="h-9 w-9 flex">
           <GiDrum size={35} color="#fff" />
           <p className="absolute px-9 py-[.5rem] font-sans font-[500] text-xl text-[#fff]">Drum <span>Notes</span></p>
          </Link>
          <div className="flex gap-4 py-[.4rem]">
           <FaInstagram size={35} color="#fff" style={{ cursor: 'pointer' }} />
           <FaGithub size={35} color="#fff" style={{ cursor: 'pointer' }} />
          </div>
        </div>
      </header>
    </>
  );
};
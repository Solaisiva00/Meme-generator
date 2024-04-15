import logo from "../assets/logo.svg";
import "@fontsource/karla/700.css"

const Header = () => {
  return (
    <nav className="flex bg-gradient-to-r from-[#672280] to-[#A626D3] px-7 py-5 gap-2 ">
      <img src={logo} alt="" />
      <h2 className="text-white font-karla font-bold text-lg">Meme Generator</h2>
    </nav>
  );
};

export default Header;

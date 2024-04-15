import { useEffect, useState } from "react";
const Form = () => {
  const [allMemes, setAllMemes] = useState([]);
  const [meme, setmeme] = useState({
    topText: "Shut Up",
    bottomText: "And Take My Money Fry",
    img: "https://i.imgflip.com/3si4.jpg",
  });
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data));
  }, []);
  let url;
  function getMemes() {
    const Array = allMemes.data.memes;
    const randomNumber = Math.floor(Math.random() * Array.length);
    url = Array[randomNumber].url;
    setmeme((prev) => ({ ...prev, img: url }));
  }
  function handleChange(event) {
    const { value, name } = event.target;
    setmeme((previous) => ({ ...previous, [name]: value }));
  }
  return (
    <div className="bg-white p-5 flex flex-col gap-6 justify-center items-center">
      <section className="flex flex-col md:flex-row justify-evenly md:gap-8">
        <div className="flex flex-col ">
          <label
            htmlFor="toptext"
            className="font-karla font-medium text-sm my-2"
          >
            Toptext
          </label>
          <input
            type="text"
            id="toptext"
            className=" border-[#D1D5DB] border-2 md:w-222 w-screen rounded-md px-4 py-2"
            placeholder="Shut up"
            onChange={handleChange}
            value={meme.topText}
            name="topText"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="bottom"
            className="font-karla font-medium text-sm my-2"
          >
            Bottom text
          </label>
          <input
            type="text"
            id="bottom"
            className=" border-[#D1D5DB] border-2 md:w-222 rounded-md px-4 py-2"
            placeholder="And take my money"
            onChange={handleChange}
            value={meme.bottomText}
            name="bottomText"
          />
        </div>
      </section>
      <button
        onClick={getMemes}
        className="bg-gradient-to-r from-[#672280] to-[#A626D3] md:w-477 w-scree text-white font-karla font-bold text-sm px-9 py-3 rounded-md"
      >
        Get a new meme image 📸
      </button>
      <div className="relative">
        <img src={meme.img} alt="" className="w-screen p-3" />
        <h2 className="absolute top-8 left-[50%] shade translate-x-[-50%] text-white font-bold text-xl md:text-3xl  font-karla text-nowrap ">
          {meme.topText}
        </h2>
        <h2 className="absolute bottom-8 shade left-[50%] translate-x-[-50%] text-white font-bold text-xl md:text-3xl font-karla text-nowrap ">
          {meme.bottomText}
        </h2>
      </div>
    </div>
  );
};

export default Form;

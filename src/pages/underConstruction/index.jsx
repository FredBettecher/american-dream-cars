import { FaSquareFacebook, FaSquareYoutube, FaSquareWhatsapp } from "react-icons/fa6";
import BackgroundComponent from "../../components/Background";

function UnderConstructionPage() {
  const imagesDesktop = [
    '/images/desktop-bg/bg1.webp',
    '/images/desktop-bg/bg2.webp',
    '/images/desktop-bg/bg3.webp',
    '/images/desktop-bg/bg4.webp',
  ];
  const imagesMobile = [
    '/images/mobile-bg/bg1.webp',
    '/images/mobile-bg/bg2.webp',
    '/images/mobile-bg/bg3.webp',
    '/images/mobile-bg/bg4.webp',
  ];

  return (
    <>
      <BackgroundComponent imagesDesktop={imagesDesktop} imagesMobile={imagesMobile} />
      <div className="w-screen h-dvh text-[#fff] bg-[#059CC699] fixed top-0 left-0 overflow-y-hidden flex flex-col items-center justify-around">
        <header className="user-select-none pointer-events-none">
          <img src="/logo.webp" alt="American Dream Cars" className="w-80 mx-auto" />
        </header>

        <h1 className="text-xl md:text-4xl font-[Xenogears]">Site em Construção</h1>
        <p className="text-base md:text-2xl w-[80vw] text-center font-['Crimson_Pro'] font-medium">
          Estamos trabalhando para trazer a melhor experiência em importação de carros clássicos para você.<br />Novidades, em breve!
        </p>
        <div className="flex justify-around w-[60vw] text-4xl md:text-5xl">
          <a href="https://www.facebook.com/profile.php?id=61560026494859&mibextid=LQQJ4d&rdid=yCF2llMM7WjHpl6V&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FnBmH4V66MDL6e1J4%2F%3Fmibextid%3DLQQJ4d" target="_blank" rel="noopener noreferrer" className="hover:text-[#CD3837] flex flex-col items-center">
            <FaSquareFacebook />
          </a>
          <a href="https://wa.me/+5527996355750" target="_blank" rel="noopener noreferrer" className="hover:text-[#CD3837] flex flex-col items-center">
            <FaSquareWhatsapp />
          </a>
          <a href="https://www.youtube.com/@americandreamcars-wd3fx" target="_blank" rel="noopener noreferrer" className="hover:text-[#CD3837] flex flex-col items-center">
            <FaSquareYoutube />
          </a>
        </div>

        <footer className="text-xs md:text-base w-[70vw] md:w-screen text-center font-[Xenogears]">
          <p>2024 &#169; American Dream Cars. Todos os direitos reservados.</p>
        </footer>
      </div>
    </>
  );
};

export default UnderConstructionPage;

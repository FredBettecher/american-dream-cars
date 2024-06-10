function Header() {
  return (
    <header className="fixed top-0 left-0 flex w-full justify-between items-center pt-4 px-14 text-white uppercase font-[Xenogears] text-sm bg-transparent">
      <div>
        <a href="#home">
          <img src="/logo.webp" className="w-56" alt="American Dream Cars" />
        </a>
      </div>
      <div className="flex justify-between gap-24">
        <nav className="cursor-pointer hover:text-[#7B170F]">veículos</nav>
        <nav className="cursor-pointer hover:text-[#7B170F]">serviços</nav>
        <nav className="cursor-pointer hover:text-[#7B170F]">sobre a adc</nav>
      </div>
      <nav className="flex items-center justify-center border-2 border-white bg-[#CD3837] rounded p-2 cursor-pointer shadow-[3px_3px_1px_rgba(205,56,55,1)] hover:bg-[#7B170F] hover:shadow-[3px_3px_1px_rgba(123,23,15,1)] active:scale-95 transition-transform duration-[30ms] ease-linear">contato</nav>
    </header>
  );
}

export default Header;

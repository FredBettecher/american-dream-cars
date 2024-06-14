function Header() {
  return (
    <header className="absolute top-0 left-0 flex w-full justify-between items-center pt-4 px-14 text-white uppercase font-[Xenogears] text-sm bg-transparent">
      <div>
        <a href="#home">
          <img src="/logo.webp" className="w-52" alt="American Dream Cars" />
        </a>
      </div>
      <div className="flex justify-between gap-24">
        <nav className="cursor-pointer hover:text-[#7B170F]">serviços</nav>
        <nav className="cursor-pointer hover:text-[#7B170F]">sobre nós</nav>
        <nav className="cursor-pointer hover:text-[#7B170F]">contato</nav>
      </div>
    </header>
  );
}

export default Header;

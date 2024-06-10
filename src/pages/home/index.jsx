function HomePage() {
  return (
    <section id="home" className="w-screen h-screen bg-cover"
      style={{ backgroundImage: `url(/images/bg-home.webp)`}}>
      <div className="w-screen h-dvh flex justify-between px-12 bg-[#059CC699]">
        <div className="w-[45%] mt-40">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit, felis ac ultricies rutrum, ex massa tempor turpis, non mattis ligula risus in nulla. Vestibulum ut orci porttitor, accumsan magna vitae, tristique augue. Phasellus eget metus commodo nulla volutpat lacinia.</p>
          <div className="bg-[#046076] w-[15rem] h-[10rem] flex items-center justify-center mt-32 ml-16 relative">
            <img src="/images/car2.webp" alt="chevrolet bel air" className="w-[13rem] shadow-[0px_5px_10px_rgba(0,0,0,0.5)]" />
            <img src="/images/adc.webp" alt="American Dream Cars" className="absolute -top-16 -left-16 w-32 z-10" />
          </div>
        </div>
        <div className="bg-[#7B170F] w-[30rem] h-[15rem] flex items-center justify-center mt-56 mr-20 relative">
          <img src="/images/car1.webp" alt="ford mustang" className="w-[27rem] mb-[6rem] shadow-[0px_5px_10px_rgba(0,0,0,0.5)]" />
          <img src="/images/adc.webp" alt="American Dream Cars" className="absolute -bottom-12 -left-14 w-32 z-10" />
        </div>
      </div>
    </section>
  );
}

export default HomePage;

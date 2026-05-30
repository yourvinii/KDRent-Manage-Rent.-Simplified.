const HeroSection = () => {
  return (
    <section
      className="
      bg-gray-100
      py-24
    "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        px-6
      "
      >
        <div
          className="
          max-w-3xl
        "
        >
          <h1
            className="
            text-5xl
            md:text-6xl
            font-bold
            leading-tight
          "
          >
            Find Your Perfect
            Rental Property
          </h1>

          <p
            className="
            mt-6
            text-lg
            text-gray-600
          "
          >
            Explore verified homes,
            apartments and villas
            with direct owner
            communication.
          </p>

          <div
            className="
            mt-8
            flex
            gap-4
            flex-wrap
          "
          >
            <button
              className="
              bg-black
              text-white
              px-6
              py-3
              rounded-lg
            "
            >
              Browse Properties
            </button>

            <button
              className="
              border
              px-6
              py-3
              rounded-lg
            "
            >
              List Property
            </button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
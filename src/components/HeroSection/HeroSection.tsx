import HeroSectionStyled from "./HeroSectionStyled";

const HeroSection = (): JSX.Element => {
  return (
    <HeroSectionStyled data-testid="section">
      <div className="hero-container">
        <p className="hero-container__sentence">
          Become a soldier of the GameHouse Army. Make your own reviews and
          receive feedback from other soldiers!
        </p>
      </div>
    </HeroSectionStyled>
  );
};

export default HeroSection;

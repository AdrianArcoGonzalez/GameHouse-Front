import HeroSectionStyled from "./HeroSectionStyled";
interface HeroSectionProps {
  text: string;
  srcImage: string;
}

const HeroSection = ({ text, srcImage }: HeroSectionProps): JSX.Element => {
  return (
    <HeroSectionStyled data-testid="section">
      <img
        src={srcImage}
        alt="backgroundImage"
        className="hero__image"
        width="100vw"
        height="200px"
        loading="lazy"
      />
      <div className="hero-container">
        <p className="hero-container__sentence">{text}</p>
      </div>
    </HeroSectionStyled>
  );
};

export default HeroSection;

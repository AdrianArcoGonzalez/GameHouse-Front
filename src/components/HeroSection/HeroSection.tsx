import HeroSectionStyled from "./HeroSectionStyled";
interface HeroSectionProps {
  text: string;
  srcImage: string;
  srcSet?: string;
}

const HeroSection = ({
  text,
  srcImage,
  srcSet,
}: HeroSectionProps): JSX.Element => {
  return (
    <HeroSectionStyled data-testid="section">
      <img
        srcSet={srcSet}
        src={srcImage}
        alt="backgroundImage"
        className="hero__image"
        width="100vw"
        height="200px"
      />
      <div className="hero-container">
        <p className="hero-container__sentence">{text}</p>
      </div>
    </HeroSectionStyled>
  );
};

export default HeroSection;

import MotionContainer from "./MotionContainer";
import ImageSlider from "../reuseable/ImageSlider";

const Hero = ({ heroSlides }) => {
  return (
    <div className="z-0 relative w-[100%]">
      <div className="relative z-0">
        <ImageSlider
          data={heroSlides}
          arrows={false}
          size="100"
          type="loop"
          hero={true}
        />
      </div>
      <MotionContainer />
    </div>
  );
};

export default Hero;

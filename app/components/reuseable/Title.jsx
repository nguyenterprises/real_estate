const Title = ({ one, colorOne, two, colorTwo }) => {
  return (
    <div className="flex flex-col text-center italic sm:text-left">
      <div className="mx-auto flex gap-2 sm:mx-0">
        <div
          className="sm:text-md lg:text-2lg text-sm font-normal uppercase tracking-[.6em] md:text-xl"
          style={{ color: `${colorOne}` }}
        >
          {one}
        </div>
        <div className="flex items-center">
          <div className="continental-gradient h-0.5 w-20 rounded align-middle"></div>
        </div>
      </div>
      <div
        className="pr-1 text-3xl font-semibold uppercase tracking-[.1em] sm:text-right md:pr-0 md:text-4xl lg:ml-10 lg:text-5xl"
        style={{ color: `${colorTwo}` }}
      >
        {two}
      </div>
    </div>
  );
};

export default Title;

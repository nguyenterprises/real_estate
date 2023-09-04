export const screenSize = (width) => {
  switch (true) {
    case width < 640:
      return "xs";
    case width >= 640 && width < 768:
      return "sm";
    case width >= 768 && width < 1024:
      return "md";
    case width >= 1024 && width < 1280:
      return "lg";
    case width >= 1280 && width < 1536:
      return "xl";
    case width >= 1536:
      return "2xl";
    default:
      return "sm";
  }
};

export const pictureSize = (width, start) => {
  console.log(start);
  switch (true) {
    case width < 640:
      return width * `${start}`;
    case width >= 640 && width < 768:
      return width * `${start - 0.1}`;
    case width >= 768 && width < 1024:
      return width * `${start - 0.2}`;
    case width >= 1024 && width < 1280:
      return width * `${start - 0.3}`;
    case width >= 1280:
      return width * `${start - 0.4}`;
    default:
      return width * `${start - 0.5}`;
  }
};

export const twScreenConvert = (width) => {
  switch (true) {
    case width < 768:
      return "sm";
    case width >= 768 && width < 1024:
      return "md";
    case width >= 1024 && width < 1280:
      return "lg";
    case width >= 1280 && width < 1536:
      return "xl";
    case width >= 1536:
      return "2xl";
    default:
      return "sm";
  }
};

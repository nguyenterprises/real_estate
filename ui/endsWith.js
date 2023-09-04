export const endsWith = (currentUrl) => {
  const pathName = [
    // "properties",
    "active",
    "sold",
    "about",
    // "buyers",
    "contact",
    // "media",
    // "offices",
    "sell",
  ];
  let value = false;
  value = pathName.some((element) => {
    return currentUrl.endsWith(element);
  });
  return value;
};

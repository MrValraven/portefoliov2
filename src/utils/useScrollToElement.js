const scrollToElement = (destination) => {
  const element = document.querySelector(destination);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export default scrollToElement;

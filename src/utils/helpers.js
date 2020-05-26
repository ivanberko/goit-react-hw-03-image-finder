export const formatData = (data) =>
  [...data].map(({ id, webformatURL, largeImageURL }) => ({
    id,
    webformatURL,
    largeImageURL,
  }));

export const scrollTo = () =>
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: "smooth",
  });

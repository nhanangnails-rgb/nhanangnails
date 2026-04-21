export const getDictionary = async (locale: string) => {
  if (locale === 'en') {
    return (await import("./dictionaries/en.json")).default;
  }
  // Mặc định luôn là tiếng việt
  return (await import("./dictionaries/vi.json")).default;
};

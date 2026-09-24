const candidateWidths = [256, 360, 480, 640, 768, 960, 1280, 1440, 1920];

export const getResponsiveImageWidths = (nativeWidth: number) =>
  [...candidateWidths.filter((width) => width < nativeWidth), nativeWidth].sort(
    (first, second) => first - second,
  );
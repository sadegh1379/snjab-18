export const generateLightColor = (): string => {
  function randomLightValue(): number {
    // Generate a random number between 128 and 255
    return Math.floor(Math.random() * 128) + 128;
  }

  const r: number = randomLightValue();
  const g: number = randomLightValue();
  const b: number = randomLightValue();

  // Convert RGB values to a hex color code
  const color: string = `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;

  return color;
};

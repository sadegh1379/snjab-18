interface FileToBase64Result {
  base64: string | null;
  error: Error | null;
}

export const fileToBase64 = (file: File): Promise<FileToBase64Result> => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () =>
      resolve({ base64: reader.result as string, error: null });
    reader.onerror = () =>
      resolve({ base64: null, error: new Error("Failed to read file") });
  });
};

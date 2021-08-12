export const renameCurrentYear = (
  year: string,
  replacer: string = "This Year"
): string => ("" + new Date().getFullYear() === year ? replacer : year);

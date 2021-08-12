export default (items: any[]): string => {
  return items.filter((item) => !!item).join(" ");
};

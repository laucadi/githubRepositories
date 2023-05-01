import moment from "moment";

export const parseDate = (date: string) => {
  return moment.utc(date).format("DD/MM/YY");
};

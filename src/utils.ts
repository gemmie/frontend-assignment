export const monthsMap = {
  januar: "january",
  februar: "february",
  mars: "march",
  april: "april",
  mai: "may",
  juni: "june",
  juli: "july",
  august: "august",
  september: "september",
  oktober: "october",
  november: "november",
  desember: "december",
};

export type MonthsMapKey = keyof typeof monthsMap;
export type MonthsMap = typeof monthsMap[MonthsMapKey];

export function validateMonth(value: string): value is MonthsMapKey {
  if (value in monthsMap) {
    return value in monthsMap;
  } else {
    throw Error("Invalid month.");
  }
}

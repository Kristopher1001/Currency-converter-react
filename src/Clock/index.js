import { useCurrentDate } from "./useCurrentDate.js";
import { Clockstyled } from "./styled.js";

const formatDate = (date) =>
  date.toLocaleString(undefined, {
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    day: "numeric",
    month: "long",
  });

export const Clock = () => {
  const date = useCurrentDate();

  return <Clockstyled>
    Dzisiaj jest {" "}
    {formatDate(date)}</Clockstyled>;
};

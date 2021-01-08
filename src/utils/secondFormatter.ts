export const secondFormatter = (second: number): string => {
  let sec = String(Math.abs(Math.floor(second) % 60));
  let min = String(Math.abs(Math.floor(second / 60) % 60));
  let hours = String(Math.abs(Math.floor(second / 60 / 60) % 24));
  if (sec.toString().length === 1) sec = "0" + sec;
  if (min.toString().length === 1) min = "0" + min;
  if (hours.toString().length === 1) hours = "0" + hours;
  return `${hours}:${min}:${sec}`;
};
export const tables = [
  { id: 1, name: "Table 1", status: "Booked", initial: "AM", seats: 4 },
  { id: 2, name: "Table 2", status: "Available", initial: "MB", seats: 6 },
  { id: 3, name: "Table 3", status: "Booked", initial: "JS", seats: 2 },
  { id: 4, name: "Table 4", status: "Available", initial: "HR", seats: 4 },
  { id: 5, name: "Table 5", status: "Booked", initial: "PL", seats: 3 },
  { id: 6, name: "Table 6", status: "Available", initial: "RT", seats: 4 },
  { id: 7, name: "Table 7", status: "Booked", initial: "LC", seats: 5 },
  { id: 8, name: "Table 8", status: "Available", initial: "DP", seats: 5 },
  { id: 9, name: "Table 9", status: "Booked", initial: "NK", seats: 6 },
  { id: 10, name: "Table 10", status: "Available", initial: "SB", seats: 6 },
  { id: 11, name: "Table 11", status: "Booked", initial: "GT", seats: 4 },
  { id: 12, name: "Table 12", status: "Available", initial: "JS", seats: 6 },
  { id: 13, name: "Table 13", status: "Booked", initial: "EK", seats: 2 },
  { id: 14, name: "Table 14", status: "Available", initial: "QN", seats: 6 },
  { id: 15, name: "Table 15", status: "Booked", initial: "TW", seats: 3 },
];
export const getRandomBG = () => {
  const colors = [
    "#f6b100",
    "#025cca",
    "#be3e3f",
    "#02ca3a",
  ];
  const color = colors[Math.floor(Math.random() * colors.length)];
  return "bg-[" + color +"]";
};
// "bg-[#383838]"
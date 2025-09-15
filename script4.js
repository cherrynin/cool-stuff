const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");
const number = document.getElementById("number");
const clickHandler = () => {
  const raw = number.value.trim();
  const value = Number(raw);
  if (!raw || !Number.isFinite(value)) {
    output.innerText = "Please enter a valid number";
    return;
  }

  if (value < 1) {
    output.innerText = "Please enter a number greater than or equal to 1";
    return;
  }

  if (value > 3999) {
    output.innerText = "Please enter a number less than or equal to 3999";
    return;
  }
  const romanNumeral = toRoman(value);
  output.innerText = `${romanNumeral}`;
};
function toRoman(num) {
  const romanMap = [
    { value: 3999, symbol: "MMMCMXCIX" },
    { value: 1023, symbol: "MXXIII" },
    { value: 900, symbol: "CM" },
    { value: 649, symbol: "DCXLIX" },
    { value: 500, symbol: "D" },
    { value: 400, symbol: "CD" },
    { value: 100, symbol: "C" },
    { value: 90, symbol: "XC" },
    { value: 16, symbol: "XVI" },
    { value: 9, symbol: "IX" },
    { value: 5, symbol: "V" },
    { value: 4, symbol: "IV" },
    { value: 1, symbol: "I" },
  ];
  let result = "";
  for (const { value, symbol } of romanMap) {
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }
  return result;
}
convertBtn.addEventListener("click", clickHandler)
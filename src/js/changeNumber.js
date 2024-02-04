export default function changeFormatNumber(number) {
  let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let res = number.split(/ +/g);
  let num = [];
  for (let i = 0; i < res.length; i++) {
    for (const item of res[i]) {
      if (numbers.includes(Number(item)) || item == "+") {
        num.push(item);
      }
    }
  }
  console.log(num.join(""));
  return num.join("");
}

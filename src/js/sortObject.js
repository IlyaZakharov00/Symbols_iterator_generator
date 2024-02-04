export default function orderByProps(object, property) {
  let copyObj = { ...object };
  let arr = [];
  let arrForStort = [];

  for (const prop of property) {
    arr.push({ key: prop, value: object[prop] });
    delete copyObj[prop];
  }

  for (const item in copyObj) {
    arrForStort.push(item);
    arrForStort.sort();
  }

  for (const property of arrForStort) {
    arr.push({ key: property, value: object[property] });
  }

  return arr;
}

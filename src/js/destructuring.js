export default function getSpecial(obj) {
  const { special, ...data } = obj;
  let response = [];
  if (special.description === undefined) {
    special.description = "Описание недоступно";
  }
  for (const key in special) {
    response.push({
      [key]: obj.special[key],
    });
  }
  return response;
}

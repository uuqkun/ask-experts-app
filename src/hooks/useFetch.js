export default async (url) => {
  let array = [];
  await fetch(url, { method: `GET` })
    .then((resp) => resp.json())
    .then((json) => (array = json))
    .catch((err) => console.log(`Error Log: \n${err}`));

  return array;
};

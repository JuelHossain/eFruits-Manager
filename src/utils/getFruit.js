import axios from "axios";

export default async function getFruit(id) {
  const url = `/fruits/${id}`;
  const { data } = await axios(url);
  return data;
}

import { useFruitContext } from "../../../context/FruitContext";

export default function Photo() {
  const { fruit: { name, photo } = {} } = useFruitContext();

  return (
    <td className="flex gap-6 items-center w-42">
      <img className="rounded-full h-10 w-10 object-cover" src={photo} alt={name} />
      <p className=" w-28 text-left">{name}</p>
    </td>
  );
}

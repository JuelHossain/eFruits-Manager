import FooterButtons from "../../../Components/shared/FooterButtons";
import { useFruitContext } from "../../../context/FruitContext";
import Delivered from "../manage-fruit/components/Delivered";
import Description from "../manage-fruit/components/Description";
import Name from "../manage-fruit/components/Name";
import Photo from "../manage-fruit/components/Photo";
import Price from "../manage-fruit/components/Price";
import Quantity from "../manage-fruit/components/Quantity";
import SuppliedBy from "../manage-fruit/components/SuppliedBy";
import UpdateButton from "../manage-fruit/components/UpdateButton";

export default function FruitForm({ flinks }) {
  const { updateFruit, initial, addFruit } = useFruitContext();

  return (
    <div className="container mx-auto text-center sm:my-16 flex justify-center flex-col gap-4 p-3 overflow-hidden">
      <form
        onSubmit={initial ? addFruit : updateFruit}
        className="flex flex-col lg:flex-row justify-center items-center gap-2 w-full mx-auto lg:h-[700px]">
        <div className="flex flex-col border shadow-md justify-between items-center p-4 gap-2 h-full w-full">
          <Name />
          <Photo />
          <Price />
        </div>

        <div className="flex flex-col border shadow-md justify-between items-center p-4 gap-2 h-full w-full">
          <div className="flex flex-col items-center gap-2 w-full ">
            <Quantity />
            {initial || <Delivered />}
            <SuppliedBy />
            <Description />
          </div>
          <UpdateButton />
        </div>
      </form>
      <FooterButtons links={flinks} />
    </div>
  );
}

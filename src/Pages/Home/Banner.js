import banner from "../../assets/banner.jpg";

export default function Banner() {
  return (
    <div className="container mx-auto shadow-xl p-2">
      <div className="dark">
        <img src={banner} alt="" />
      </div>
    </div>
  );
}

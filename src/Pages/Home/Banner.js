import banner from '../../assets/banner.jpg';
const Banner = () => {
  return (
    <div className="container mx-auto shadow-xl p-2">
      <div className="dark">
        <img src={banner} alt="" />
      </div>
    </div>
  );
};

export default Banner;

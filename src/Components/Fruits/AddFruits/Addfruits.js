import React from 'react';

const Addfruits = () => {
  //styles
  const inputStyle = "border m-2 p-4 w-96 focus:outline-0 focus:animate-pulse";
  const inputButton =
    "border m-2 p-4 w-96 hover:bg-pink-600 hover:text-pink-100 ease-in-out duration-300 flex items-center justify-center gap-2 focus:animate-pulse";
  return (
    <div className=" container mx-auto text-center m-20">
      <div className=" mx-auto p-6 w-[500px] h-[700px] shadow-2xl flex flex-col gap-3 justify-center items-center ">
        <p className="m-2 text-xl text-pink-600">Add Fruit to Inventory</p>
        <form
          className="flex flex-col text-center"
          onSubmit={(e) => {
            e.preventDefault();
            const fruitName = e.target.name.value;
            const fruitPrice = e.target.price.value;
              const photoURl = e.target.photoURL.value;
              const fruit = { fruitName, fruitPrice, photoURl };
              //sending data to the server
              fetch("http://localhost:5000/fruits", {
                method: "POST",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify(fruit),
              })
                .then((res) => res.json())
                .then((data) => {
                  console.log("success", data);
                });
              
          }}
        >
          <input
            className={inputStyle}
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
          <br />
          <input
            className={inputStyle}
            type="text"
            name="price"
            placeholder="Price"
          />
          <br />

          <input
            className={inputStyle}
            type="text"
            name="photoURL"
            placeholder="photoUrl"
          />
          <br />
          <input className={inputButton} type="submit" value="Add Fruits" />
        </form>
      </div>
    </div>
  );
};

export default Addfruits;
import React from 'react';
import useFruits from '../../Hooks/useFruits';
import FruitCard from './FruitCard/FruitCard';

const Fruits = () => {
    const [fruits] = useFruits();
    console.log(fruits);
    return (
      <div className="container m-auto text-center mt-10 mb-20 p-10 shadow-2xl">
        <h1 className="text-4xl text-center mb-10">Fruits-Available</h1>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 
          sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3
          2xl:grid-cols-4 gap-4">
            {fruits.map((fruit) => (
              <FruitCard
                key={fruit._id}
                name={fruit.name}
                price={fruit.price}
                qty={fruit.qty}
                photo={fruit.photo}
                supplier={fruit.supplier}
                description={fruit.description}
                weight={fruit.weight}
              ></FruitCard>
            ))}
          </div>
        </div>
      </div>
    );
};

export default Fruits;
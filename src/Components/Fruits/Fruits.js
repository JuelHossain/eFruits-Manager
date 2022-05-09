import React from 'react';
import useFruits from '../../Hooks/useFruits';
import FruitCard from './FruitCard/FruitCard';

const Fruits = () => {
    const [fruits] = useFruits();
    console.log(fruits);
    return (
      <div className="container mx-auto text-center m-20 shadow-2xl py-8">
        <h1 className="text-4xl text-center mb-8">Fruits-Available</h1>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:grid-cols-2">
            {fruits.map((fruit) => (
              <FruitCard
                key={fruit._id}
                name={fruit.name}
                price={fruit.price}
                qty={fruit.qty}
                photo={fruit.photo}
                supplier={fruit.supplier}
                description={fruit.description}
              ></FruitCard>
            ))}
          </div>
        </div>
      </div>
    );
};

export default Fruits;
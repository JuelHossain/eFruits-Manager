import React from 'react';

const Benifits = () => {
    return (
      <div className="container shadow-xl rounded-xl mx-auto">
        <h1 className="text-xl font-bold text-center">
          Benifits of Eating Fruits
        </h1>
        <div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 mb-40 gap-4 p-10   justify-items-center mx-auto">
          <div className="flex flex-col gap-2 w-92 h-92 p-4 border hover:bg-amber-500 hover:text-white rounded-xl">
            <p className="text-xl font-bold">
              Fruits and vegetables are a great source of vitamins and minerals.
            </p>
            <p className="hover:overflow-auto overflow-hidden">
              You won’t find a better nutritional source than fruits and
              veggies, which are packed with vitamins A, C and E, as well as
              magnesium, zinc, phosphorous and folic acid. For potassium, one of
              the most important minerals for your health, eat plenty of
              avocados, sweet potatoes, bananas, prunes and even tomato paste
              puree.
            </p>
          </div>
          <div className="flex flex-col gap-2 w-92 h-92 p-4 border hover:bg-amber-500 hover:text-white rounded-xl">
            <p className="text-xl font-bold">
              You get to enjoy a variety of flavors and textures.
            </p>
            <p className="hover:overflow-auto overflow-hidden">
              With all their unique and interesting flavors, plant-based foods
              let you get creative in the kitchen. You can try strong flavors
              like onions, olives and peppers, or milder options such as
              mushrooms and corn. For sweet flavors, fruits like pineapple,
              grapes or plums are great, while lemons and grapefruits are more
              sour.
            </p>
          </div>
          <div className="flex flex-col gap-2 w-92 h-92 p-4 border hover:bg-amber-500 hover:text-white rounded-xl">
            <p className="text-xl font-bold">Lots and lots of fiber. </p>
            <p className="hover:overflow-auto overflow-hidden">
              Most fruits and vegetables have plenty of fiber to fill you up and
              boost gut health, but some have more than others. Fiber-rich
              vegetables include artichokes, green peas, broccoli and
              cauliflower. High-fiber fruits include raspberries, pears, apples
              and pumpkin.
            </p>
          </div>
          <div className="flex flex-col gap-2 w-92 h-92 p-4 border hover:bg-amber-500 hover:text-white rounded-xl">
            <p className="text-xl font-bold">
              They’re low-calorie and low-fat.
            </p>
            <p className="hover:overflow-auto overflow-hidden">
              On average, fruits and especially vegetables are very low in
              calories and fat, which means you can eat more to keep you feeling
              full without worrying about extra calories or fat. You can save
              more than 200 calories by eating half a cup of grapes versus a
              fourth of a cup of M&Ms. That said, there are exceptions, such as
              avocados, olives and coconuts.
            </p>
          </div>
          <div className="flex flex-col gap-2 w-92 h-92 p-4 border hover:bg-amber-500 hover:text-white rounded-xl">
            <p className="text-xl font-bold">
              Protect against cancer and other diseases.
            </p>
            <p className="hover:overflow-auto overflow-hidden">
              Many vegetables and fruits contain phytochemicals, which are
              biologically active substances that can help protect against some
              diseases. That means you can lower your risk of type 2 diabetes,
              stroke, heart disease, high blood pressure and cancer by adding
              them into your diet. Specifically cruciferous veggies, such as
              broccoli, cabbage, collards and watercress, have been linked to
              reducing cancer risks.
            </p>
          </div>
          <div className="flex flex-col gap-2 w-92 h-92 p-4 border hover:bg-amber-500 hover:text-white rounded-xl">
            <p className="text-xl font-bold">
              Fruits and vegetables help you maintain good health.
            </p>
            <p className="hover:overflow-auto overflow-hidden">
              Because they’re low in saturated fat, salt and sugar, fruits and
              vegetables are part of a well-balanced diet that can help you lose
              weight or prevent weight gain. Plus, they can help you decrease
              inflammation, and lower cholesterol levels and blood pressure.
            </p>
          </div>
          <div className="flex flex-col gap-2 w-92 h-92 p-4 border hover:bg-amber-500 hover:text-white rounded-xl">
            <p className="text-xl font-bold">Low in sodium and cholesterol.</p>
            <p className="hover:overflow-auto overflow-hidden">
              Fresh fruits and veggies contain only trace amounts of sodium.
              Many people think that celery is high in sodium, but in fact, one
              stalk contains a mere 30mg, which contributes 1 percent to the
              recommended daily value. Cholesterol doesn’t exist in fruits and
              veggies at all.
            </p>
          </div>
          <div className="flex flex-col gap-2 w-92 h-92 p-4 border hover:bg-amber-500 hover:text-white rounded-xl">
            <p className="text-xl font-bold">
              Fresh, frozen, canned, dried – they’re ALL nutritious
            </p>
            <p className="hover:overflow-auto overflow-hidden">
              While eating fresh fruits and vegetables may be your preference,
              there’s not much difference from a nutrition standpoint when you
              compare frozen, canned or dehydrated products. In fact, most
              frozen and canned products are processed within hours of harvest,
              so the nutritional value is locked in quickly.
            </p>
          </div>
          <div className="flex flex-col gap-2 w-92 h-92 p-4 border hover:bg-amber-500 hover:text-white rounded-xl">
            <p className="text-xl font-bold">Convenient, quick and easy.</p>
            <p className="hover:overflow-auto overflow-hidden">
              Unlike granola bars or crackers, many fruits and vegetables don’t
              need any packaging. So you can easily grab a banana or an apple as
              you’re heading out the door.
            </p>
          </div>
          <div className="flex flex-col gap-2 w-92 h-92 p-4 border hover:bg-amber-500 hover:text-white rounded-xl">
            <p className="text-xl font-bold">Finally… Smoothies!</p>
            <p className="hover:overflow-auto overflow-hidden">
              If you have a blender, all you need is fruit and ice to whip up a
              delicious smoothie using all of your favorite flavors. And here’s
              a tip – when you make a fruit smoothie, feel free to throw in as
              much fresh spinach as you like. Spinach doesn’t start to taste
              like “spinach” until you cook it. Even kids can’t tell the
              difference!
            </p>
          </div>
        </div>
      </div>
    );
};

export default Benifits;
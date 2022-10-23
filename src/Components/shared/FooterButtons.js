import React from "react";
import { Link } from "react-router-dom";

export default function FooterButtons({ links }) {
  const linkLists = links?.map((list) => {
    const { name, link, Icon } = list ?? {};
    return (
      <div key={link} className="w-1/2 hover:bg-pink-600 hover:text-white rounded">
        <Link to={link} className="p-4 flex justify-center items-center gap-4">
          {Icon && <Icon className="h-7" />}
          <p className="md:text-xl font-bold">{name}</p>
        </Link>
      </div>
    );
  });
  return (
    <div className="w-full h-16 rounded border flex  justify-between shadow-md items-center ">
      {linkLists}
    </div>
  );
}

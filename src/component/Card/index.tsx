import React from 'react';
import { Link } from 'react-router-dom';
import { data } from '../../Pages/Home/Detail/data';
import { Delete } from '../Delete';

function DeleteCard(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  e.stopPropagation();
  e.preventDefault();
  console.log('Bom dia');
}

export const Card = () => {
  return (
    <>
      {data.map((card, id) => (
        <div key={id} className="bg-background-card h-auto w-[20rem] rounded-[10px] p-[.7rem]">
          <div onClick={DeleteCard} className='fixed cursor-pointer'>
           <Delete size={27} color="#fff"/>
          </div>
          <Link to={`/details/${id}`} className="block">
            <img src={card.image} className="rounded-[7px] mb-2.5" alt={card.title} />
            <hr className="mt-2 mb-3 w-full" />
            <div className="overflow-y-auto w-full h-[8rem] text-center text-[#fff] font-mono">
              <h2 className="text-text-card">{card.title}</h2>
              <p className="w-full">{card.conteudo}</p>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

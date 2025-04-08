import React from 'react';

export default function Hero() {
  return (
    <section className="h-[80vh] bg-cover bg-center flex items-center justify-center text-white text-center" style={{ backgroundImage: "url('/src/assets/ethan-action.jpg')" }}>
      <div className="bg-black bg-opacity-60 p-6 rounded-xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Ethan - Class of 20XX</h1>
        <p className="text-xl md:text-2xl">Attacking Mid • Hoboken United • RDS Invitee</p>
      </div>
    </section>
  );
}
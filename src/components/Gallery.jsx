import React from 'react';

export default function Gallery() {
  return (
    <section className="bg-gray-100 p-8">
      <h2 className="text-3xl font-bold text-center mb-6">Photo Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
        <img src="/src/assets/gallery1.jpg" alt="Game 1" className="rounded-xl" />
        <img src="/src/assets/gallery2.jpg" alt="Game 2" className="rounded-xl" />
        <img src="/src/assets/gallery3.jpg" alt="Game 3" className="rounded-xl" />
        <img src="/src/assets/gallery4.jpg" alt="Game 4" className="rounded-xl" />
      </div>
    </section>
  );
}
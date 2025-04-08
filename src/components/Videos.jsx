import React from 'react';

export default function Videos() {
  return (
    <section className="p-8 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6">Highlight Videos</h2>
      <div className="flex flex-col gap-8">
        <iframe className="w-full aspect-video rounded-xl" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Highlight Reel"></iframe>
        <iframe className="w-full aspect-video rounded-xl" src="https://www.youtube.com/embed/3GwjfUFyY6M" title="Skills Compilation"></iframe>
      </div>
    </section>
  );
}
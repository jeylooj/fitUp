import React from 'react';
import GalleryData from '../GalleryData';
const Gallery = () => {
  return (
    <section className='grid lg:grid-cols-4 md:grid-cols-2 p-10 gap-10 bg-secondary w-full place-items-center text-center' id='gallery'>
      {
        GalleryData.map((e)=>{
          return (
            <div className="bg-secondary relative w-80 rounded-lg shadow text-white" key={e.id}>
            <iframe
              src={e.video}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen style={{height:'400px'}}
              className="rounded-t-lg w-full embed-responsive embed-responsive-4by3"
            >
            </iframe>
            <header className="font-extrabold p-2 bg-secondary cus-font text-2xl absolute top-4 w-full">{e.name}</header>
            <div className="px-5">
              <p className="p-4">
                {e.description}
              </p>
            </div>
            </div>
          )
        })
      }
    </section>
  );
}

export default Gallery;

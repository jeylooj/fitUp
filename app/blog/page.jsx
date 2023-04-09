import React from 'react';
import AddressBar from '../components/AddressBar';
import BlogsData from '../BlogsData';
import Link from 'next/link';

const Blog = () => {
  return (
<>
  <AddressBar title="Blog"/>
  <section className='grid md:grid-cols-2 grid-cols-1 place-items-center p-5 gap-4 align-top'>
  {
    BlogsData.map((post)=>{
      return (
        <div className="relative w-3/4 rounded-lg shadow text-white bg-secondary" 
        key={post.id}>
      <img src={post.image} alt="" />
        <header className="font-extrabold p-2 cus-font absolute top-4 w-full text-center lg:text-lg bg-secondary">{post.title}</header>
        <div className="flex">
          <p className="p-4 bg-secondary gap-3 flex flex-col">
            {post.description} <br />
            <Link href={`/blog/${post.id}`} className='bg-primary rounded p-1 w-32 text-center hover:text-primary hover:bg-white'>Read more</Link>
          </p>
        </div>
        </div>
      )
    })
  }
  </section>
</>
  );
}

export default Blog;

import React from 'react';

const BlogPost: React.FC<{ title: string; data: string; link: string }> = ({ title, data, link }) => {
  return (
    <>
      <article className="my-[5em] rounded-lg border border-black p-[5em] sm:mx-[2em] md:mx-[10em] xl:mx-[25em]">
        <h3 className="text-xl font-bold">{title}</h3>
        <br />
        <p dangerouslySetInnerHTML={{ __html: data.replace(title, '') }}></p>
        <br />
        <br />
        <a href={link} target="_blank" rel="noreferrer" className="border-b border-black pb-2">
          Przejdź do artykułu
        </a>
      </article>
    </>
  );
};

export default BlogPost;

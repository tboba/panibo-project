import React from "react";

const BlogPost: React.FC<{ title: string, data: string, link: string }> = ({
                                                                             title,
                                                                             data,
                                                                             link
                                                                           }) => {

  return (
    <>
      <article className='xl:mx-[25em] md:mx-[10em] sm:mx-[2em] my-[5em] p-[5em] rounded-lg border border-black'>
        <h3 className='font-bold text-xl'>{title}</h3>
        <br/>
        <p dangerouslySetInnerHTML={{__html: data.replace(title, '')}}></p>
        <br />
        <br />
        <a href={link} target='_blank' rel='noreferrer' className='border-b border-black pb-2'>Przejdź do artykułu</a>
      </article>
    </>
  )
}

export default BlogPost;
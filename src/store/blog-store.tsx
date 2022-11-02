import React, {createContext, useContext, useState} from "react";

type BlogContextObj = {
  posts: any[];
  setPosts: (posts: []) => void,
};

const BlogContext = createContext<BlogContextObj>({
  posts: [],
  setPosts: () => null,
});

const BlogContextProvider: React.FC<{ children: React.ReactNode }> = (props) => {
  const [posts, setPosts] = useState<any[]>([]);

  const contextValue: BlogContextObj = {
    posts,
    setPosts
  };

  return <BlogContext.Provider value={contextValue}>{props.children}</BlogContext.Provider>;
};

export const useBlogContext = () => useContext(BlogContext);

export default BlogContextProvider;

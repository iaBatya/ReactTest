import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import PostItem from './components/PostItem';
import PostItemHeader from './components/PostItemHeader';




function App() {

  const [posts, setPosts] = useState([
    {category: 'Vegetables and legumes/beans', itemName: 'Broccoli', price: 0.25},
    {category: 'Fructs', itemName: 'Mango', price: 1.25, id: 1},
    {category: 'Fructs', itemName: 'Apple', price: 0.50, id: 2},
    {category: 'Berries', itemName: 'Blueberry', price: 0.75, id: 3}
  ])

  return (
    <>
      <PostItemHeader/>
      {posts.map(post => 
        <PostItem post={post} key={post.id}/>  
      )}
    </>
  );
}

export default App;


// {/* <PostItem category={'Vegetables and legumes/beans'} itemName={'Broccoli'} price={0.25} />
//       <PostItem category={'Fructs'} itemName={'Mango'} price={1.25} />
//       <PostItem category={'Fructs'} itemName={'Apple'} price={0.50} />
//       <PostItem category={'Berries'} itemName={'Blueberry'} price={0.75} /> */}


/* /* {posts.map(post => 
        <PostItem post={post}/>
      )} */ 
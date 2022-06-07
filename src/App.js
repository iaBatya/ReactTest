import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import PostItem from './components/PostItem';
import PostItemHeader from './components/PostItemHeader';
import MySelect from './components/MySelect';



function App() {

  const [posts, setPosts] = useState([
    {category: 'Vegetables and legumes/beans', itemName: 'Broccoli', price: 0.25, id:1},
    {category: 'Fructs', itemName: 'Mango', price: 1.25, id: 2},
    {category: 'Fructs', itemName: 'Apple', price: 0.50, id: 3},
    {category: 'Berries', itemName: 'Blueberry', price: 0.75, id: 4}
  ])

  const [selectedSort, setSelectedSort] = useState('')


  const sortPosts = (sort) => { 
    if (sortPosts.value !== '') {
      setSelectedSort(sort);
      console.log(sort);
      setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
    }
  }


  return (
    <>
      <PostItemHeader/>
      {posts.map(post => 
        <PostItem post={post} key={post.id}/>  
      )}
      <div>
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Select"
          options={[
            {value: '', name: 'default'},
            {value: 'category', name: 'by category'}
            ]}
        />
        <MySelect
          value={selectedSort}
          onChange={sortPosts }
          defaultValue="Select"
          options={[
            {value: '', name: 'default'},
            {value: 'price', name: 'by price'},
            ]}
        />
      </div>
      
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
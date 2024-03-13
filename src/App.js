import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';
import EditPost from './EditPost';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { DataProvider } from './context/DataContext';


function App() {
  
  return (
    <div className="App">
        <Header 
          title="React JS Blog" />

      <DataProvider>
        <Nav />
        <Routes>
          <Route 
            path='/' 
            index 
            element={<Home />} 
            />
          
          <Route path='/post' exact element={<NewPost />} />
          <Route path='/edit/:id' element={<EditPost />} />

          <Route path="/post/:id" element={<PostPage />} />
          
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Missing />} />
      
        </Routes>
      </DataProvider>
        <Footer/>
    </div>
  );
}

export default App;

import About from "../components/About";
import SignUp from "../components/SignUp";
import Articles from "../components/Articles";
import Article from "../components/Article";
import Categories from "../components/Categories";
import Category from "../components/Category";
import Author from "../components/Author";
import Profile from "../components/Profile";
import EditProfileForm from "../components/EditProfileForm";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div id="content-wrap">
        <Header />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/authors/:name" element={<Author />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/articles/:title" element={<Article />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/categories" element={<Categories />} >
            <Route path=":name" element={<Category />} />
          </Route>
          <Route path="/profile" element={<Profile />}>
            <Route path="edit" element={<EditProfileForm />} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;

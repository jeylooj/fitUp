import HeroBS from "./components/HeroBS";
import Info from "./components/Info";
import NavbarBS from "./components/NavbarBS";
import Plans from "./components/Plans";
import Title from "./components/Title";
import PlansData from "./Plans";
import gallery from "./gallery";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import About from "./components/About";
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import blog from "./blog"
import AddressBar from "./components/AddressBar";
import './components/blog.css';
import Post from "./components/Post";
function App() {
  return (

   <Router>
<Switch>
<Route exact path="/">
<NavbarBS/>
<HeroBS/>
  <Info/>
<Title title='Plans and Prices' id='plans'/>
<section className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 m-5">
{PlansData.map((plan)=>{
return (
<Plans key={plan.id} plan={plan.plan} price={`$${plan.price}`} image={plan.image} description={plan.description}/>
)
})}
</section>
<Title title='Watch Us in Action'/>
<section className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 m-5">
{gallery.map((video)=>{
return (
 <Gallery id='gallery' key={video.id} name={video.name} video={video.video} description={video.description}/>
)
})}
</section>
<Footer/>
</Route>
  <Route path="/about">
  <NavbarBS/>
    <About/>
  </Route>
  <Route path="/contact">
  <NavbarBS/>
  <Contact/>
  </Route>
  <Route path="/blog">
  <NavbarBS/>
  <AddressBar title='Blog'/>
  <section className="d-flex flex-wrap flex-lg-row flex-column">
  {blog.map((post)=>{
    return (
      <Blog title={post.title} key={post.id} description={post.description} image={post.image} link={post.link}/>
    )
  })}
</section>
  </Route>
  <Route path="/post">
  <NavbarBS/>
  <AddressBar title='Post'/>
<Post/>
  </Route>
</Switch>
</Router>
   
  );
  
}

export default App;

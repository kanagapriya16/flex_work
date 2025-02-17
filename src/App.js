import "./styles/flex_designs.css";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import Person2Icon from "@mui/icons-material/Person2";
import section_image from "./images/section_image.jpg";
import c1 from "./images/c1.jpg";
import c2 from "./images/c2.jpg";
import c3 from "./images/c3.jpg";
import c4 from "./images/c4.jpg";
function App() {
  return (
    <>
      <div className="navbar">
        <div className="navbar_s1">
          <h1 className="navbar_s1_title">Udemy</h1>
        </div>
        <div className="navbar_s2">
          <SearchRoundedIcon className=" icon" />
          <input
            placeholder="Search for anything here ...."
            className=" navbar_s2_input"
          ></input>
        </div>

        <div className="navbar_s3">
          <p>Courses</p>
          <p>My Learning</p>
          <ShoppingCartIcon />
          <NotificationsActiveIcon />
          <Person2Icon />
        </div>
      </div>
      <div className="categories">
        <p>Development</p>
        <p>Business</p>
        <p>IT & Software</p>
        <p>Personal Development</p>
        <p>Design</p>
        <p>Marketing</p>
      </div>
      <div className="section_image">
        <img src={section_image} alt="sale_image"></img>
      </div>
      <div className="recommended">
        <h1 className="recommended_title">Recommended For You</h1>
        <p>Pick the best fit</p>
        <div className="recommended_container">
          <div className="course_card">
            <img src={c2}></img>
            <h3>2023 Python data visaulisation Masterclass</h3>
            <p>col steele</p>
            <p>4.9⭐⭐⭐⭐</p>
            <p>
              449 <del>999</del>
            </p>
          </div>

          <div className="course_card">
            <img src={c3}></img>
            <h3>UI/UX Design Masterclass</h3>
            <p>col steele</p>
            <p>4.9⭐⭐</p>
            <p>
              449 <del>999</del>
            </p>
          </div>

          <div className="course_card">
            <img src={c4}></img>
            <h3> Computer Basics Masterclass</h3>
            <p>col steele</p>
            <p>4.9 ⭐⭐⭐⭐</p>
            <p>
              449 <del>999</del>
            </p>
          </div>

          <div className="course_card">
            <img src={c1}></img>
            <h3>OOPS Concepts</h3>
            <p>col steele</p>
            <p>4.9⭐⭐⭐⭐⭐⭐</p>
            <p>
              449 <del>1999</del>
            </p>
          </div>
        </div>
      </div>
      <div className="topics">
        <h1 className="topics_title">Topics Recommended For You</h1>
        <div className="topics_container">
          <p>Website</p>
          <p>Javascript</p>
          <p>CSS</p>
          <p>Mongo DB</p>
          <p>Azure</p>
          <p>Docker</p>
          <p>Github</p>
          <p>React Js</p>
          <p>Java</p>
        </div>
      </div>
      <div className="popular">
        <h1 className="popular_title">Most Popular</h1>
        <p className="popular_subtitle">Pick The Best Pick</p>
        <div className="popular_container">
          <div className="course_card">
            <img src={c2}></img>
            <h3>2023 Python data visaulisation Masterclass</h3>
            <p>col steele</p>
            <p>4.9⭐⭐⭐⭐</p>
            <p>
              449 <del>999</del>
            </p>
          </div>

          <div className="course_card">
            <img src={c3}></img>
            <h3>UI/UX Design Masterclass</h3>
            <p>col steele</p>
            <p>4.9⭐⭐</p>
            <p>
              449 <del>999</del>
            </p>
          </div>

          <div className="course_card">
            <img src={c4}></img>
            <h3> Computer Basics Masterclass</h3>
            <p>col steele</p>
            <p>4.9 ⭐⭐⭐⭐</p>
            <p>
              449 <del>999</del>
            </p>
          </div>

          <div className="course_card">
            <img src={c1}></img>
            <h3>OOPS Concepts</h3>
            <p>col steele</p>
            <p>4.9⭐⭐⭐⭐⭐⭐</p>
            <p>
              449 <del>1999</del>
            </p>
          </div>
          <div className="course_card">
            <img src={c2}></img>
            <h3>2023 Python data visaulisation Masterclass</h3>
            <p>col steele</p>
            <p>4.9⭐⭐⭐⭐</p>
            <p>
              449 <del>999</del>
            </p>
          </div>

          <div className="course_card">
            <img src={c3}></img>
            <h3>UI/UX Design Masterclass</h3>
            <p>col steele</p>
            <p>4.9⭐⭐</p>
            <p>
              449 <del>999</del>
            </p>
          </div>

          <div className="course_card">
            <img src={c4}></img>
            <h3> Computer Basics Masterclass</h3>
            <p>col steele</p>
            <p>4.9 ⭐⭐⭐⭐</p>
            <p>
              449 <del>999</del>
            </p>
          </div>

          <div className="course_card">
            <img src={c1}></img>
            <h3>OOPS Concepts</h3>
            <p>col steele</p>
            <p>4.9⭐⭐⭐⭐⭐⭐</p>
            <p>
              449 <del>1999</del>
            </p>
          </div>
        </div>
      </div>
      <div className="footer">
<div className="footer_one">
<div className="footer_one_s1"> 
<p>Udemy Businees</p>
<p>Teach on Udemy</p>
<p>Get the App</p>
<p>about</p>
<p>Contact Us</p>
</div>
<div className="footer_one_s2">
<p>Careers</p>
<p>Blog</p>
<p>Help and Support</p>
<p>Affilates</p>
<p>Investors</p>

</div>
</div>
     
      <div className="footer_two">
<h1>Udemy</h1>
<p>&copy; Udemy, Inc</p>
      </div>
      </div>
    </>
  );
}

export default App;

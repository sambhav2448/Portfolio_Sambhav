import React from "react";
import "./blog.css";
import Fade from "react-reveal/Fade";

function Blog() {
  return (
    <div className="Blog_container containerr">
      <Fade left>
        <h1 className="about_blog_h1" id="blogs">
          Blogs
        </h1>
      </Fade>

      <section class="cards-wrapper">
        <div class="card-grid-space">
          <Fade>
            <a
              className="card_blog"
              href="https://codeburst.io/getting-started-with-sqlite-in-react-native-e25e361b8205"
              target="__blank"
            >
              <div>
                <h2 className="blog_h2_card">
                  Getting started with SQLite in React Native
                </h2>
                <h3 className="blog_h3_card">- Sambhav Jain</h3>

                <div className="date">17th October 2020</div>
              </div>
            </a>
          </Fade>
        </div>
      </section>
    </div>
  );
}
export default Blog;

import './index.css'

import Footer from '../Footer'

const Blogs = () => (
  <>
    <div className="blogs-container">
      <div className="blog-list-container">
        <div className="al">
          <img
            src="https://th.bing.com/th?id=OSK.HEROu9H3ZxVAq44jb9Jv0eitJt7Rk8ArgSbDL6b1zkZ3XfI&w=472&h=280&c=1&rs=2&o=6&dpr=1.3&pid=SANGAM"
            alt="al"
            className="al-image"
          />
          <a
            href="https://www.wgu.edu/blog/what-ai-technology-how-used2003.html"
            className="link-al"
          >
            Technology of AI and Uses of Artificial intelligence
          </a>
          <p className="al-paragraph">
            The definition of artificial intelligence is the theory and
            development of computer programs that are able to do tasks and solve
            problems that usually require human intelligence.
          </p>
        </div>
        <div className="machine">
          <img
            src="https://th.bing.com/th?id=OSK.HERO8BWt17wNPTTL6iqO_vfntNocDcqf0DxodoPISfUEG2Q&w=472&h=280&c=1&rs=2&o=6&dpr=1.3&pid=SANGAM"
            alt="al"
            className="al-image"
          />
          <a
            href="https://en.wikipedia.org/wiki/Machine_learning"
            className="link-al"
          >
            Machine learning and uses of machine learning
          </a>
          <p className="al-paragraph">
            Machine learning (ML) is an umbrella term for solving problems for
            which development of algorithms by human programmers would be
            cost-prohibitive
          </p>
        </div>
        <div className="bigData">
          <img
            src="https://www.iqvis.com/wp-content/uploads/2017/03/big-data-predictions.jpg"
            alt="al"
            className="al-image"
          />
          <a href="https://en.wikipedia.org/wiki/Big_data" className="link-al">
            This article is about large collections of data
          </a>
          <p className="al-paragraph">
            Big data primarily refers to data sets that are too large or complex
            to be dealt with by traditional data-processing application
            software.
          </p>
        </div>
      </div>
      <div className="second-list-blog-container">
        <div className="robo">
          <img
            src="https://i1.wp.com/www.socialnews.xyz/wp-content/uploads/2017/09/13/80792980149a3b95215ec604615f2e64.jpg?fit=2000%2C1333&quality=90&zoom=1&ssl=1"
            alt="al"
            className="al-image"
          />
          <a
            href="https://medium.com/@justinnammedia/how-robots-will-become-more-human-over-the-following-years-21e6cfff6c08"
            className="link-al"
          >
            Robots Will Become More Human
          </a>
          <p className="al-paragraph">
            The concept of robots and their integration into human society has
            been a topic of discussion for many years.
          </p>
        </div>
        <div className="digital">
          <img
            src="https://futuristspeaker.com/wp-content/uploads/2011/01/thomas-frey-futurist-speaker-connecting-the-physical-world-with-the-digital-world-through-apps.jpg"
            alt="al"
            className="al-image"
          />
          <a
            href="https://www.aiga.org/sites/default/files/2021-02/Bridging%20Digital%20and%20Physical%20Experiences.pdf"
            className="link-al"
          >
            Bridging Digital and Physical Experiences
          </a>
          <p className="al-paragraph">
            People transition across devices, environments, and activities in
            continuous communication and service activities.
          </p>
        </div>
      </div>
    </div>
    <Footer />
  </>
)
export default Blogs

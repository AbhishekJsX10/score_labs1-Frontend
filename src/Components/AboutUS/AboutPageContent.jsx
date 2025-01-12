import React from 'react'
import './AboutPageContent.css'

const AboutPageContent = () => {
  return (
    <div className="about-page-container">
      {/* About Us Section */}
      <section className="content-section">
        <h2 className="section-title">About Us</h2>
        <div className="section-content">
          <p>
            Score Labs is a pioneering startup focused on democratizing artificial intelligence. 
            We deliver cost-efficient solutions for production inferencing and fine-tuning tasks—an 
            innovative alternative to traditional GPUs. Our cutting-edge approach is backed by actual 
            performance results, proving our concept's viability and potential impact.
          </p>
          <p>
            Co-founded by Ripan Das, a visionary in generative AI open-source development with a 
            portfolio of chip design patents, Sudeep Suman, a seasoned strategist and C-suite and 
            board advisor with expertise in disruptive technology and Chanika Angchaisuksiri, an 
            accomplished entrepreneur and leader with a proven track record of driving innovation 
            and operational excellence. Their complementary expertise anchors Score Labs' mission 
            and strategy. Our team is further strengthened by a network of alumni from the Indian 
            Institutes of Technology, bringing together exceptional talent and engineering prowess.
          </p>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="content-section">
        <h2 className="section-title">Our Vision</h2>
        <div className="section-content">
          <p>
            At Score Labs, our vision is to revolutionize the accessibility of artificial intelligence 
            by empowering businesses of all sizes to harness its transformative potential. We strive 
            to break barriers by delivering cost-efficient, scalable, and energy-conscious solutions, 
            enabling companies to embrace AI without compromise. By combining innovation, sustainability, 
            and inclusivity, we aim to create a future where AI is not a privilege for a few but a tool 
            for everyone—driving progress, fostering creativity, and redefining possibilities in an 
            ever-evolving digital world.
          </p>
        </div>
      </section>

      {/* Why Choose Score Section */}
      <section className="content-section">
        <h2 className="section-title">Why Choose Score?</h2>
        <div className="section-content">
          <p>
            In today's competitive landscape, adopting AI is essential, but scaling it effectively is 
            the key to unlocking its full potential. SCORE enables organizations to seamlessly integrate 
            AI into their operations, empowering them to drive innovation, enhance efficiency, and deliver 
            measurable impact. With a solution built for performance, scalability, and adaptability, SCORE 
            is the partner of choice for businesses ready to harness the transformative power of AI. 
            Here's why:
          </p>
          <ul className="benefits-list">
            <li>Unmatched Efficiency: Innovative technology designed to maximize performance while minimizing resource consumption.</li>
            <li>Transformative Cost Advantage: Achieve significant savings, empowering businesses to scale without financial strain.</li>
            <li>Future-Ready Scalability: Built to adapt and grow with your needs, ensuring seamless expansion opportunities.</li>
            <li>Flexible Integration: A solution designed to fit effortlessly into your existing systems, whether in the cloud or on-premises.</li>
            <li>Sustainable Innovation: Pioneering a smarter, greener approach to AI deployment, tailored for modern challenges.</li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default AboutPageContent
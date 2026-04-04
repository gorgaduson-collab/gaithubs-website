import { motion } from 'framer-motion'
import { projects, horizontalProducts, pricing } from '../data/siteData'

export default function HomePage() {
  return (
    <main>
      <section className="hero container">
        <div className="hero-grid hero-panel">
          <div>
            <span className="badge">تصميم مواقع وخدمات 3D باستخدام Blender</span>
            <h1>واجهة رقمية أكثر فخامة وتأثيراً</h1>
            <p className="muted">
              موقع احترافي يعرض خدمات Gaithubs مع بنر فيديو وسلايدر مشاريع وصور منتجات وعرض سعر.
            </p>
            <div className="actions">
              <button className="btn btn-primary">ابدأ مشروعك</button>
              <button className="btn btn-secondary">شاهد المشاريع</button>
            </div>
          </div>
          <div className="video-card">
            <video autoPlay muted loop playsInline poster="https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1400&q=80">
              <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      <section className="container section">
        <h2>سلايدر المشاريع</h2>
        <div className="cards-grid three">
          {projects.slice(0, 3).map((project) => (
            <motion.article key={project.title} className="card" whileHover={{ y: -6 }}>
              <img src={project.image} alt={project.title} />
              <div className="card-body">
                <span className="accent-text">{project.category}</span>
                <h3>{project.title}</h3>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="container section">
        <h2>صور المنتجات</h2>
        <div className="cards-grid five-placeholder">
          {horizontalProducts.map((image, idx) => (
            <div key={idx} className="product-box image-box">
              <img src={image} alt={`منتج ${idx + 1}`} />
            </div>
          ))}
        </div>
      </section>

      <section className="container section">
        <div className="pricing-banner">
          <div>
            <h2>عرض سعر</h2>
            <p className="muted">أسعار مرنة للمشاريع الصغيرة والمتوسطة والكبيرة.</p>
          </div>
          <button className="btn btn-primary">اطلب عرض سعر</button>
        </div>
      </section>

      <section className="container section">
        <h2>السلايدر المصغر</h2>
        <div className="cards-grid four">
          {['لقطة منتج', 'مشهد داخلي', 'عرض معماري', 'أنيميشن قصير'].map((item) => (
            <div key={item} className="mini-card center-text">{item}</div>
          ))}
        </div>
      </section>

      <section className="container section">
        <h2>الباقات</h2>
        <div className="cards-grid three">
          {pricing.map((plan) => (
            <div key={plan.name} className={`mini-card ${plan.featured ? 'featured-card' : ''}`}>
              <div className="accent-text">{plan.name}</div>
              <h3 className="price-title">{plan.price}</h3>
              <ul className="feature-list">
                {plan.features.map((feature) => <li key={feature}>{feature}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

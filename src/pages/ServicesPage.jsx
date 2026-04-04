import { services } from '../data/siteData'

export default function ServicesPage() {
  return (
    <main className="container section">
      <h1>الخدمات</h1>
      <div className="two-col mt24">
        <div className="video-card">
          <video autoPlay muted loop playsInline poster="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80">
            <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="content-card">
          <h2>حلول متكاملة في التصميم الثلاثي الأبعاد</h2>
          <p className="muted">
            نقدم خدمات النمذجة والرندر والأنيميشن وإخراج المشاهد التسويقية باستخدام Blender.
          </p>
          <div className="stack-list mt24">
            {services.map((service) => (
              <div key={service.title} className="mini-card">
                <h3>{service.title}</h3>
                <p className="muted">{service.text}</p>
              </div>
            ))}
          </div>
          <button className="btn btn-primary mt24">حجز مكالمة</button>
        </div>
      </div>
    </main>
  )
}

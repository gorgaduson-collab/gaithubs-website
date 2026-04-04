import { projects } from '../data/siteData'

export default function ProjectsPage() {
  return (
    <main className="container section">
      <h1>المشاريع</h1>
      <div className="pricing-banner mt24">
        <div>
          <h2>عرض سعر للمشاريع</h2>
          <p className="muted">تسعير مرن حسب نوع المشروع والمدة والجودة المطلوبة.</p>
        </div>
        <button className="btn btn-primary">اطلب التسعيرة</button>
      </div>

      <div className="cards-grid three mt24">
        {projects.map((project) => (
          <article key={project.title} className="card">
            <img src={project.image} alt={project.title} />
            <div className="card-body">
              <span className="accent-text">{project.category}</span>
              <h3>{project.title}</h3>
            </div>
          </article>
        ))}
      </div>
    </main>
  )
}

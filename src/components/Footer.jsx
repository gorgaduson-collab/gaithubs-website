import { NavLink } from 'react-router-dom'
import { brand, navItems } from '../data/siteData'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Logo compact />
          <p className="muted mt16">
            استوديو متخصص في التصميم ثلاثي الأبعاد والهوية البصرية وتجارب الويب الحديثة.
          </p>
        </div>
        <div>
          <h3>روابط الصفحات</h3>
          <div className="footer-links">
            {navItems.map((item) => (
              <NavLink key={item.path} to={item.path} className="footer-link">
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
        <div>
          <h3>بيانات التواصل</h3>
          <p>{brand.phone}</p>
          <p>{brand.email}</p>
          <p>{brand.location}</p>
        </div>
        <div>
          <h3>النشرة البريدية</h3>
          <div className="newsletter">
            <input placeholder="بريدك الإلكتروني" />
            <button className="btn btn-primary">اشتراك</button>
          </div>
        </div>
      </div>
    </footer>
  )
}

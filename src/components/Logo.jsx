import { brand } from '../data/siteData'

export default function Logo({ compact = false }) {
  return (
    <div className="logo-wrap">
      <div className={`logo-box ${compact ? 'logo-box-small' : ''}`}>G</div>
      <div>
        <div className={compact ? 'logo-title-sm' : 'logo-title'}>{brand.name}</div>
        <div className="logo-subtitle">{brand.tagline}</div>
      </div>
    </div>
  )
}

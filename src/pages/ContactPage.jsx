export default function ContactPage() {
  return (
    <main className="container section">
      <h1>تحدث معنا</h1>
      <div className="contact-layout mt24">
        <div>
          <p className="muted">أرسل تفاصيل مشروعك وسنتواصل معك بأسرع وقت.</p>
        </div>
        <form className="floating-form">
          <input placeholder="الاسم الكامل" />
          <input placeholder="البريد الإلكتروني" />
          <input placeholder="رقم الهاتف" />
          <textarea placeholder="تفاصيل المشروع"></textarea>
          <button className="btn btn-primary" type="button">إرسال الطلب</button>
        </form>
      </div>
    </main>
  )
}

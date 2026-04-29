import Link from 'next/link'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import { getSettings } from '@/lib/supabase'

export const revalidate = 60

export default async function Home() {
  const s = await getSettings()

  const info = [
    { label: 'วันจัดค่าย', value: s.camp_dates || 'เร็วๆ นี้', sub: s.camp_dates_short || 'โปรดติดตาม' },
    { label: 'สถานที่',    value: 'มจธ.',          sub: 'กรุงเทพมหานคร' },
    { label: 'ค่าลงทะเบียน', value: `${s.camp_fee || '1,299'} ฿`, sub: 'ต่อคน' },
    { label: 'ระดับ',      value: 'มัธยม',          sub: 'ม.1 – ม.6 / ปวช.' },
  ]

  return (
    <main style={{ background: '#05060F', minHeight: '100vh' }}>
      <NavBar />

      {/* ═══ HERO ═══ */}
      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <div className="starfield" />
        {/* Grid overlay */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px)',
          backgroundSize: '64px 64px',
        }} />

        <div style={{ position: 'relative', zIndex: 2, padding: '120px 56px 80px', maxWidth: 1440, margin: '0 auto', width: '100%' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 24 }}>ภาควิชาวิศวกรรมอิเล็กทรอนิกส์และโทรคมนาคม · มจธ.</div>
              <h1 style={{ fontFamily: '"Space Grotesk"', fontWeight: 700, fontSize: 96, color: '#fff', lineHeight: 0.95, letterSpacing: '-0.02em', margin: 0 }}>
                ENE<br />
                <span style={{ color: '#FFD600', textShadow: '0 0 40px rgba(255,214,0,0.4)' }}>Camp</span><br />
                <span style={{ fontSize: 64, color: '#A6ABCF' }}>ครั้งที่ 15</span>
              </h1>
              <p style={{ fontSize: 20, color: '#A6ABCF', marginTop: 28, lineHeight: 1.6, maxWidth: 500 }}>
                สัมผัสประสบการณ์จริงด้าน
                <span style={{ color: '#00E5FF' }}> อิเล็กทรอนิกส์ </span>
                และ
                <span style={{ color: '#7C4DFF' }}> โทรคมนาคม </span>
                จากนักศึกษาวิศวกรรมที่ มจธ.
              </p>
              <div style={{ display: 'flex', gap: 14, marginTop: 36, flexWrap: 'wrap' }}>
                <Link href="/apply" className="btn-gold" style={{ fontSize: 16, padding: '16px 32px' }}>
                  🚀 สมัครเข้าร่วม
                </Link>
                <a href="#about" className="btn-ghost">
                  รู้จักค่ายนี้ ↓
                </a>
              </div>

              {/* Info strip */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24, marginTop: 56, paddingTop: 32, borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                {info.map(({ label, value, sub }) => (
                  <div key={label}>
                    <div style={{ fontFamily: '"Space Grotesk"', fontSize: 28, fontWeight: 700, color: '#fff' }}>{value}</div>
                    <div style={{ fontFamily: '"JetBrains Mono"', fontSize: 10, color: '#00E5FF', marginTop: 2 }}>{label.toUpperCase()}</div>
                    <div style={{ fontFamily: '"JetBrains Mono"', fontSize: 9, color: '#6B6F92', marginTop: 4 }}>{sub}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: decorative circle + logo */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', height: 480 }}>
              <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 50%, rgba(255,214,0,0.12), transparent 65%)' }} />
              {[0,1,2].map(i => (
                <div key={i} style={{
                  position: 'absolute', left: '50%', top: '50%',
                  width: 220 + i * 120, height: 220 + i * 120,
                  transform: 'translate(-50%,-50%)',
                  borderRadius: '50%',
                  border: `1px solid rgba(255,214,0,${0.25 - i * 0.07})`,
                  animation: `spin ${40 + i * 15}s linear infinite ${i % 2 ? 'reverse' : ''}`,
                }} />
              ))}
              <div style={{
                width: 200, height: 200, borderRadius: '50%',
                background: 'radial-gradient(circle at 40% 35%, #1A237E, #05060F)',
                border: '2px solid rgba(255,214,0,0.4)',
                boxShadow: '0 0 60px rgba(255,214,0,0.2), 0 0 120px rgba(124,77,255,0.15)',
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                position: 'relative', zIndex: 2,
              }}>
                <div style={{ fontFamily: '"Space Grotesk"', fontWeight: 800, fontSize: 38, color: '#FFD600' }}>ENE</div>
                <div style={{ fontFamily: '"JetBrains Mono"', fontSize: 11, color: '#A6ABCF', letterSpacing: '0.15em' }}>CAMP 15</div>
                <div style={{ fontFamily: '"JetBrains Mono"', fontSize: 9, color: '#00E5FF', marginTop: 4, letterSpacing: '0.1em' }}>KMUTT</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ ABOUT ═══ */}
      <section id="about" style={{ padding: '100px 56px', maxWidth: 1440, margin: '0 auto' }}>
        <div className="eyebrow" style={{ marginBottom: 20 }}>เกี่ยวกับค่าย</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <div>
            <h2 style={{ fontFamily: '"Space Grotesk"', fontSize: 56, color: '#fff', lineHeight: 1.05, marginBottom: 24 }}>
              เรียนรู้<br />
              <span style={{ color: '#00E5FF' }}>โดยการลงมือทำ</span><br />
              จริงๆ
            </h2>
            <p style={{ color: '#A6ABCF', fontSize: 18, lineHeight: 1.75, marginBottom: 32 }}>
              ENE Camp คือค่ายวิชาการที่จัดโดยนักศึกษาภาควิชาวิศวกรรมอิเล็กทรอนิกส์และโทรคมนาคม
              มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี เปิดโอกาสให้นักเรียนมัธยมได้สัมผัสโลกของวิศวกรรมจริงๆ
            </p>
            <div style={{ display: 'flex', gap: 16 }}>
              {[
                { c: '#00E5FF', icon: '⚡', label: 'Electronics', sub: 'วงจร · เซ็นเซอร์ · ระบบฝังตัว' },
                { c: '#7C4DFF', icon: '📡', label: 'Telecom', sub: 'RF · เสาอากาศ · การสื่อสาร' },
              ].map(b => (
                <div key={b.label} style={{
                  flex: 1, padding: '20px 18px',
                  background: `linear-gradient(180deg, ${b.c}14, transparent)`,
                  border: `1px solid ${b.c}55`, borderRadius: 14,
                }}>
                  <div style={{ fontSize: 28, marginBottom: 10 }}>{b.icon}</div>
                  <div style={{ fontFamily: '"Space Grotesk"', fontSize: 18, color: '#fff', fontWeight: 600 }}>{b.label}</div>
                  <div style={{ fontFamily: '"JetBrains Mono"', fontSize: 10, color: '#A6ABCF', marginTop: 4 }}>{b.sub}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
            {[
              { icon: '🔬', title: 'ทดลองจริง', desc: 'ลงมือสร้างและทดสอบวงจรอิเล็กทรอนิกส์ด้วยตัวเอง' },
              { icon: '👨‍🏫', title: 'พี่เลี้ยงใกล้ชิด', desc: 'นักศึกษา ENE มจธ. ดูแลและแนะนำตลอดค่าย' },
              { icon: '🤝', title: 'เพื่อนใหม่', desc: 'พบเพื่อนที่มีความสนใจด้านวิศวกรรมเหมือนกัน' },
              { icon: '🏫', title: 'ห้องปฏิบัติการจริง', desc: 'ใช้ lab และอุปกรณ์จริงของภาควิชา' },
            ].map(item => (
              <div key={item.title} className="card" style={{ padding: 22 }}>
                <div style={{ fontSize: 28, marginBottom: 10 }}>{item.icon}</div>
                <div style={{ fontFamily: '"Space Grotesk"', fontSize: 16, color: '#fff', marginBottom: 6 }}>{item.title}</div>
                <div style={{ color: '#A6ABCF', fontSize: 13, lineHeight: 1.6 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ELIGIBILITY ═══ */}
      <section id="eligibility" style={{ padding: '100px 56px', background: 'rgba(255,255,255,0.015)', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto' }}>
          <div className="eyebrow" style={{ marginBottom: 20 }}>คุณสมบัติผู้สมัคร</div>
          <h2 style={{ fontFamily: '"Space Grotesk"', fontSize: 48, color: '#fff', marginBottom: 48 }}>
            ใครสมัครได้บ้าง?
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16 }}>
            {[
              { num:'01', c:'#00E5FF', title:'นักเรียนมัธยม', desc:'กำลังศึกษาอยู่ในระดับมัธยมศึกษา (ม.1–ม.6) หรือ ปวช.' },
              { num:'02', c:'#7C4DFF', title:'ไม่ต้องมีพื้นฐาน', desc:'ไม่จำเป็นต้องมีความรู้ด้านอิเล็กทรอนิกส์มาก่อน' },
              { num:'03', c:'#FFD600', title:'เข้าร่วมได้ครบ', desc:`สามารถเข้าร่วมกิจกรรมได้ตลอดช่วงค่าย (${s.camp_dates || 'ดูประกาศ'})` },
              { num:'04', c:'#FF6F00', title:'ค่าสมัคร 1,299 ฿', desc:'ชำระค่าลงทะเบียนผ่านการโอนธนาคาร' },
            ].map(c => (
              <div key={c.num} className="card" style={{ padding: 26 }}>
                <div style={{ fontFamily: '"JetBrains Mono"', fontSize: 11, color: c.c, marginBottom: 14 }}>// {c.num}</div>
                <div style={{ fontFamily: '"Space Grotesk"', fontSize: 22, color: '#fff', marginBottom: 10 }}>{c.title}</div>
                <div style={{ color: '#A6ABCF', fontSize: 14, lineHeight: 1.6 }}>{c.desc}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 40, textAlign: 'center' }}>
            <Link href="/apply" className="btn-gold" style={{ fontSize: 16, padding: '18px 40px' }}>
              🚀 สมัครเข้าร่วมเลย
            </Link>
            {s.application_deadline && (
              <div style={{ fontFamily: '"JetBrains Mono"', fontSize: 11, color: '#A6ABCF', marginTop: 14 }}>
                ปิดรับสมัคร: {s.application_deadline}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ═══ LOCATION ═══ */}
      <section id="location" style={{ padding: '100px 56px', maxWidth: 1440, margin: '0 auto' }}>
        <div className="eyebrow" style={{ marginBottom: 20 }}>สถานที่จัดค่าย</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
          <div>
            <h2 style={{ fontFamily: '"Space Grotesk"', fontSize: 48, color: '#fff', marginBottom: 20 }}>
              มหาวิทยาลัยเทคโนโลยี<br />
              <span style={{ color: '#00E5FF' }}>พระจอมเกล้าธนบุรี</span>
            </h2>
            <p style={{ color: '#A6ABCF', fontSize: 16, lineHeight: 1.7, marginBottom: 24 }}>
              ภาควิชาวิศวกรรมอิเล็กทรอนิกส์และโทรคมนาคม คณะวิศวกรรมศาสตร์
              มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี (มจธ.) กรุงเทพมหานคร
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                ['📍', 'ที่อยู่', '126 ถนนประชาอุทิศ แขวงบางมด เขตทุ่งครุ กรุงเทพฯ 10140'],
                ['🚇', 'การเดินทาง', 'BTS สายสีเขียว สถานีบางหว้า + รถต่อ หรือรถสาย 22, 79'],
                ['🏛️', 'สถานที่', 'ห้องปฏิบัติการภาควิชา ENE ชั้น ...' ],
              ].map(([icon, label, val]) => (
                <div key={label} style={{ display: 'flex', gap: 14, padding: '14px 18px', background: 'rgba(255,255,255,0.02)', borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)' }}>
                  <span style={{ fontSize: 20 }}>{icon}</span>
                  <div>
                    <div style={{ fontFamily: '"JetBrains Mono"', fontSize: 10, color: '#00E5FF', marginBottom: 2 }}>{label}</div>
                    <div style={{ color: '#ECEEFF', fontSize: 14 }}>{val}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={{
            borderRadius: 20, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)',
            background: 'rgba(255,255,255,0.02)', minHeight: 300,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexDirection: 'column', gap: 12, color: '#6B6F92',
          }}>
            <iframe
              src="https://maps.google.com/maps?q=King+Mongkut%27s+University+of+Technology+Thonburi&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%" height="360" style={{ border: 0, display: 'block' }}
              allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section style={{ padding: '80px 56px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(124,77,255,0.15), transparent 70%)' }} />
        <div style={{ position: 'relative', zIndex: 2 }}>
          <h2 style={{ fontFamily: '"Space Grotesk"', fontSize: 56, color: '#fff', marginBottom: 20 }}>
            พร้อมแล้วหรือยัง?
          </h2>
          <p style={{ color: '#A6ABCF', fontSize: 18, marginBottom: 36 }}>ที่นั่งมีจำกัด — สมัครก่อนหมดเขต</p>
          <Link href="/apply" className="btn-gold" style={{ fontSize: 18, padding: '20px 48px' }}>
            🚀 สมัครเข้าร่วม ENE Camp 15
          </Link>
        </div>
      </section>

      <style>{`@keyframes spin { to { transform: translate(-50%,-50%) rotate(360deg); } }`}</style>
      <Footer />
    </main>
  )
}

type Feature = { title: string; desc: string; icon: React.ReactNode }

const FEATURES: Feature[] = [
  {
    title: 'Pembayaran',
    desc: 'Bayar lebih cerdas, bukan lebih berat, dengan kontrol dan efisiensi yang lebih baik.',
    icon: <path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7Z" />,
  },
  {
    title: 'Penagihan',
    desc: 'Dapatkan pembayaran lebih cepat dengan visibilitas dan kontrol yang lebih baik.',
    icon: (
      <>
        <path d="M5 2v20l2.5-1.5L10 22l2-1.5 2 1.5 2.5-1.5L19 22V2l-2.5 1.5L14 2l-2 1.5L10 2 7.5 3.5 5 2Z" />
        <path d="M9 8h6M9 12h6M9 16h4" />
      </>
    ),
  },
  {
    title: 'Akun',
    desc: 'Satu tempat untuk semua aktivitas keuangan Anda, dengan saldo yang diperbarui real-time.',
    icon: (
      <>
        <rect x="2" y="6" width="20" height="14" rx="2" />
        <path d="M2 10h20M16 15h2" />
        <path d="M6 6V4h12v2" />
      </>
    ),
  },
  {
    title: 'Tim',
    desc: 'Kelola akses di seluruh organisasi Anda, dari admin hingga approver dan viewer.',
    icon: (
      <>
        <circle cx="9" cy="8" r="3.5" />
        <path d="M2.5 20v-1a5 5 0 0 1 5-5h3a5 5 0 0 1 5 5v1" />
        <path d="M16 4.5a3.5 3.5 0 0 1 0 7M18.5 14a5 5 0 0 1 3 4.6V20" />
      </>
    ),
  },
  {
    title: 'Link Pembayaran',
    desc: 'Buat dan bagikan link pembayaran untuk menerima pembayaran dengan mudah.',
    icon: (
      <>
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </>
    ),
  },
  {
    title: 'Multiple Account',
    desc: 'Kelola beberapa rekening sekaligus untuk proses pencairan yang lebih fleksibel.',
    icon: (
      <>
        <path d="m12 2 10 5-10 5L2 7l10-5Z" />
        <path d="m2 12 10 5 10-5M2 17l10 5 10-5" />
      </>
    ),
  },
]

export default function Fitur() {
  return (
    <section id="features" className="fx">
      <div aria-hidden="true" className="fx-ring" />
      <div className="fx-in">
        <div className="rv fx-head">
          <span className="fx-badge">Semua yang Anda Butuhkan</span>
          <h2 className="fx-title">
            Fitur Utama, <span>semua kebutuhan keuangan bisnis dalam satu dashboard</span>
          </h2>
        </div>
        <ul className="rv fx-grid">
          {FEATURES.map((f) => (
            <li key={f.title} className="fx-cell">
              <span className="fx-icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {f.icon}
                </svg>
              </span>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

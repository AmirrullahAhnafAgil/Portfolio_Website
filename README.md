# ⚡ Web Portofolio Fresh Graduate - Anime Bleach Edition (Reiatsu Spiritual Aura)

Web Portofolio modern, interaktif, responsif mobile, dan berkemampuan keamanan tinggi yang dirancang khusus untuk **Fresh Graduate (Software Engineer / Frontend / Fullstack Developer)** dengan estetika anime Bleach (Reiatsu Cyan & Purple energy particle movement, Bankai typography, dark aesthetic) tanpa foto karakter anime sehingga siap dipasang foto profil pribadi.

---

## 📁 Struktur Folder Proyek

```text
Web Porto/
├── public/
│   ├── _headers            # Security Headers untuk Netlify / Cloudflare Pages
│   ├── robots.txt          # Aturan crawling SEO & bot crawler
│   ├── vite.svg            # Favicon
│   └── cv.pdf              # [Taruh file PDF CV asli Anda di sini]
├── src/
│   ├── components/
│   │   ├── ReiatsuBackground.jsx # Background canvas partikel energi spiritual bergerak (60 FPS)
│   │   ├── Navbar.jsx            # Navigasi sticky, mobile drawer, trigger CV & GitHub
│   │   ├── Hero.jsx              # Hero section, typewriter animation, custom avatar slot, stats
│   │   ├── About.jsx             # Ringkasan keunggulan fresh graduate & clean code mindset
│   │   ├── Skills.jsx            # Zanpakuto Arsenal (Tech stack grid dengan tab filter)
│   │   ├── Projects.jsx          # Kartu proyek unggulan (live demo & github link)
│   │   ├── Education.jsx         # Pendidikan formal (IPK 3.85) & sertifikasi kompetensi
│   │   ├── Contact.jsx           # Formulir kontak aman + honeypot anti-spam
│   │   ├── Footer.jsx            # Footer + tombol back-to-top
│   │   └── CVModal.jsx           # Modal popup pratinjau & download ATS CV PDF
│   ├── App.jsx                   # Root component
│   ├── main.jsx                  # React DOM Entry point
│   └── index.css                 # Styling Tailwind + custom Bleach glow animations
├── .env.example                  # Template konfigurasi environment variable
├── .gitignore                    # Mencegah file rahasia/node_modules ter-upload ke Git
├── .htaccess                     # Konfigurasi Apache/cPanel (HTTPS rewrite + Security Headers)
├── index.html                    # HTML Template + Google Fonts (Cinzel, Plus Jakarta Sans)
├── package.json                  # Dependensi React, Tailwind, Framer Motion, Lucide
├── postcss.config.js             # PostCSS plugin
├── tailwind.config.js            # Konfigurasi tema warna Reiatsu, font, & keyframes
├── vercel.json                   # Konfigurasi Security Headers produksi untuk Vercel
└── README.md                     # Dokumentasi dan panduan deployment
```

---

## 🚀 Cara Menjalankan di Komputer Lokal

Pastikan Anda telah menginstal **Node.js** (versi 18+ direkomendasikan):

1. **Buka Terminal / PowerShell di folder proyek ini:**
   ```bash
   cd "c:\xampp\htdocs\Web Porto"
   ```

2. **Instal Dependensi:**
   ```bash
   npm install
   ```

3. **Jalankan Development Server:**
   ```bash
   npm run dev
   ```
   Akses website melalui browser di `http://localhost:3000`.

4. **Build untuk Produksi:**
   ```bash
   npm run build
   ```
   Folder hasil build akan berada di `./dist`.

---

## 📸 Cara Mengganti Foto & CV Anda Sendiri

1. **Mengganti Foto Profil:**
   - **Metode Interaktif:** Klik lingkaran avatar di bagian Hero saat website berjalan, lalu pilih file foto dari komputer Anda.
   - **Metode Kode:** Simpan foto Anda di `public/profile.jpg`, lalu ubah default `userPhoto` di file `src/components/Hero.jsx` menjadi `"/profile.jpg"`.
2. **Mengganti File CV (.PDF):**
   - Simpan file CV resume Anda dengan nama `cv.pdf` di dalam folder `public/` (path: `public/cv.pdf`).
   - Tombol "Unduh CV" dan "Lihat CV" di web akan otomatis mendownload file tersebut.

---

## 🔒 Fitur Keamanan Tingkat Tinggi (High-Security Standard)

Website ini telah dikonfigurasi dengan standar keamanan industri untuk melindungi domain berbayar Anda (`.me`, `.id`, `.com`, dll.):

1. **Content Security Policy (CSP):**
   Membatasi sumber eksekusi script, font, dan stylesheet hanya dari domain terpercaya guna mencegah serangan **XSS (Cross-Site Scripting)** dan **Data Injection**.
2. **Anti-Clickjacking (`X-Frame-Options: DENY`):**
   Mencegah situs Anda disematkan di dalam `<iframe>` website asing untuk melindungi pengunjung dari jebakan phishing/clickjacking.
3. **MIME Sniffing Protection (`X-Content-Type-Options: nosniff`):**
   Mencegah browser mengeksekusi file non-executable sebagai script.
4. **Enforced HTTPS (`Strict-Transport-Security` / HSTS):**
   Memaksa semua koneksi berjalan di atas enkripsi SSL/TLS selama minimal 2 tahun.
5. **Secure External Links:**
   Semua tautan eksternal (GitHub, LinkedIn, Demo) menggunakan atribut wajib `target="_blank" rel="noopener noreferrer"` untuk mencegah kerentanan *Tabnabbing*.
6. **Honeypot Anti-Spam Form:**
   Formulir kontak dilengkapi input trap tak terlihat untuk menangkap dan memblokir bot spam otomatis tanpa mengganggu kenyamanan pengguna manusia.

---

## 🌐 Panduan Deployment ke Domain Berbayar (`.me` / `.id`)

### Opsi 1: Deploy ke Vercel (Paling Direkomendasikan & Gratis Hosting)
1. Buat akun di [Vercel](https://vercel.com) dan hubungkan akun GitHub Anda.
2. Push folder proyek ini ke repository GitHub baru.
3. Import repository di Vercel Dashboard dan klik **Deploy**.
4. Masuk ke menu **Settings > Domains** di Vercel, lalu masukkan domain berbayar Anda (contoh: `namakamu.me` atau `namakamu.id`).
5. Atur DNS pada penyedia domain Anda (Niagahoster, DomaiNesia, Namecheap, Cloudflare, dll):
   - **Type A Record**: `@` diarahkan ke `76.76.21.21`
   - **CNAME Record**: `www` diarahkan ke `cname.vercel-dns.com`
6. File `vercel.json` yang sudah disediakan akan otomatis menerapkan seluruh security headers tingkat tinggi.

### Opsi 2: Deploy ke cPanel / Hosting Tradisional (Apache/LiteSpeed)
1. Jalankan `npm run build` di terminal Anda.
2. Buka cPanel hosting Anda, masuk ke **File Manager > public_html**.
3. Upload seluruh isi folder `dist/` beserta file `.htaccess` ke dalam `public_html`.
4. Aktifkan **Free SSL / Let's Encrypt** di cPanel agar HTTPS aktif.
5. File `.htaccess` akan otomatis mengamankan routing SPA, memblokir akses ke file sensitif, dan menginjeksi Security Headers.

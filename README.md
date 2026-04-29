# ENE Camp 15 — Website Setup Guide

## สิ่งที่ต้องทำก่อน (ทำครั้งเดียว)

---

### ขั้นตอนที่ 1 — ติดตั้ง Node.js

1. ไปที่ https://nodejs.org
2. กดดาวน์โหลด **"LTS"** (ตัวซ้าย)
3. ติดตั้งตามขั้นตอน (กด Next ไปเรื่อยๆ)
4. เปิด Command Prompt แล้วพิมพ์ `node -v` ถ้าเห็นเลขเวอร์ชัน = สำเร็จ

---

### ขั้นตอนที่ 2 — สร้าง Supabase (ฐานข้อมูลฟรี)

1. ไปที่ https://supabase.com → Sign up (ใช้ Google หรืออีเมล)
2. กด **"New project"** → ตั้งชื่อ `ene-camp-15` → ตั้ง Database Password (จดไว้) → กด Create
3. รอสัก 1–2 นาที
4. ไปที่ **Settings → API** แล้วคัดลอก:
   - `Project URL` → ใส่ใน `NEXT_PUBLIC_SUPABASE_URL`
   - `anon public` → ใส่ใน `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `service_role` → ใส่ใน `SUPABASE_SERVICE_ROLE_KEY`
5. ไปที่ **SQL Editor** → วางเนื้อหาทั้งหมดจากไฟล์ `supabase/schema.sql` → กด **Run**
6. ไปที่ **Storage** → กด **New bucket** → ชื่อ `payment-slips` → เปิด Public → Create

---

### ขั้นตอนที่ 3 — ตั้งค่าโปรเจกต์

1. คัดลอกไฟล์ `.env.local.example` แล้วเปลี่ยนชื่อเป็น `.env.local`
2. เปิดไฟล์ `.env.local` แล้วกรอกข้อมูล:

```
NEXT_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGci...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGci...
ADMIN_PASSWORD=ตั้งรหัสผ่านที่คุณจะใช้ล็อกอิน
```

---

### ขั้นตอนที่ 4 — รันบนเครื่อง (ทดสอบก่อน)

เปิด Terminal / Command Prompt ในโฟลเดอร์ `ene-camp-website`:

```bash
npm install
npm run dev
```

เปิดเบราว์เซอร์ไปที่ http://localhost:3000

---

### ขั้นตอนที่ 5 — Deploy ขึ้นออนไลน์ (Vercel ฟรี)

1. สมัคร https://github.com และสร้าง repository ใหม่ชื่อ `ene-camp-website`
2. อัปโหลดโค้ดทั้งหมดขึ้น GitHub
3. ไปที่ https://vercel.com → Sign up ด้วย GitHub
4. กด **"New Project"** → เลือก repo `ene-camp-website` → กด Deploy
5. ไปที่ **Settings → Environment Variables** แล้วเพิ่มตัวแปรเดิมจาก `.env.local`
6. กด **Redeploy**

คุณจะได้ URL เช่น `ene-camp-15.vercel.app` 🎉

---

## การใช้งาน Admin Panel

- URL: `your-domain.com/admin`
- ใส่รหัสผ่านที่ตั้งใน `ADMIN_PASSWORD`
- ดูใบสมัคร, กด ✓ ผ่าน / ✕ ไม่ผ่าน
- ไปที่ **ตั้งค่า** เพื่ออัปเดตวันที่ค่าย, ข้อมูลธนาคาร
- สลับ **ประกาศผลการคัดเลือก** เปิด/ปิด เพื่อแสดงรายชื่อที่ /results

---

## โครงสร้างหน้า

| URL | หน้าไหน |
|-----|---------|
| `/` | หน้าหลัก (ข้อมูลค่าย) |
| `/apply` | ฟอร์มสมัคร |
| `/results` | ประกาศผล |
| `/admin` | ล็อกอินแอดมิน |
| `/admin/dashboard` | จัดการใบสมัคร |

---

## แก้ไขเนื้อหา

- **ข้อมูลที่แก้ได้ใน Admin Panel:** วันที่ค่าย, วันปิดรับสมัคร, ข้อมูลธนาคาร, ประกาศผล
- **แก้ไขโค้ดโดยตรง:** ข้อความในหน้า Landing → `app/page.tsx`
- **โลโก้/รูป:** วางไฟล์ใน `public/` แล้วใช้ `<img src="/yourfile.png" />`

---

## ติดต่อ

อีเมล: Poon.veerawong29@gmail.com

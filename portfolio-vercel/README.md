# Portfolio Static Website

เว็บไซต์ Portfolio แบบ Static จำนวน 4 หน้า สร้างด้วย Vite + Vanilla JavaScript พร้อม deploy บน Vercel

## วิธีเปิดใช้งานในเครื่อง
1. ติดตั้ง Node.js รุ่น LTS
2. เปิด Terminal ในโฟลเดอร์โปรเจกต์
3. รัน `npm install`
4. รัน `npm run dev`
5. เปิด URL ที่ Terminal แสดง

## Deploy ขึ้น Vercel
1. อัปโหลดโฟลเดอร์นี้ขึ้น GitHub repository
2. เข้า https://vercel.com และเลือก **Add New → Project**
3. Import GitHub repository
4. Framework Preset เลือก **Vite**
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. กด **Deploy**

## ปรับแต่ง
- แก้ชื่อ คำแนะนำตัว และข้อมูลติดต่อใน `src/main.js`
- แก้สีและรูปแบบใน `src/style.css`
- แก้รายการผลงานในฟังก์ชัน `projectsPage()`
- เปลี่ยนภาพตัวอย่างได้จาก URL ใน `src/main.js`

หมายเหตุ: โปรเจกต์นี้เป็น Static Website ไม่มีฐานข้อมูลหรือระบบล็อกอิน

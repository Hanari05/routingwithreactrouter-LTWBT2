# Gia Hân — Portfolio Next.js

Nâng cấp từ bài React Router ba trang của Nguyễn Ngọc Gia Hân, giữ giao diện tối tím–hồng và font Arial hỗ trợ tiếng Việt. Dùng JavaScript/JSX, Next.js App Router và Tailwind CSS 4.

## Chạy trên máy

Cần Node.js >= 20.9 (khuyến nghị bản LTS).

```bash
npm install
npm run dev
```

Mở http://localhost:3000. Chạy trong thư mục có `package.json`.

```bash
npm run lint
npm run build
npm start
```

`npm start` cần chạy `npm run build` trước. File lock được kèm theo; có thể dùng `npm ci` để cài đúng phiên bản đã khóa.

## Đối chiếu yêu cầu

| Yêu cầu | File / đường dẫn |
| --- | --- |
| Home: thông tin, kỹ năng, dự án | `app/page.jsx` — `/` |
| About | `app/about/page.jsx` — `/about` |
| Nested routing | `/about/education`, `/about/experience`; bố cục con `app/about/layout.jsx` |
| Skills dùng component + props | `app/skills/page.jsx`, `components/SkillCard.jsx` |
| Array + map cho Projects | `data/portfolio.js`, `app/projects/page.jsx`, `components/ProjectCard.jsx` |
| Dynamic routing | `app/projects/[id]/page.jsx` — `/projects/1`, `/projects/2`, `/projects/3` |
| Catch-all routing | `app/docs/[...slug]/page.jsx` — `/docs/react`, `/docs/react/components`, `/docs/react/components/props` |
| Form tương tác | `components/ContactForm.jsx`: `use client`, `useState`, `onChange`, `onSubmit` |
| String, Number, Boolean, Array props | `components/ProfileIntro.jsx`, được truyền từ `app/about/page.jsx` |
| Server Components | Các page, root layout, SectionTitle, SkillCard, ProjectCard |
| Client Components | ContactForm và Navbar (đánh dấu menu đang xem bằng usePathname) |
| Layout chung | `app/layout.jsx`: Navbar, main + children, Footer |
| Navigation | `next/link` cho các đường dẫn nội bộ |
| Responsive | Tailwind `sm:`, `md:`, `lg:` trong các page/component |
| Loading, 404 | `app/projects/[id]/loading.jsx`, `app/not-found.jsx` |

## Nội dung

- `data/portfolio.js`: thông tin cá nhân, kỹ năng và các dự án. Dữ liệu truyền vào card qua props.
- `data/docs.js`: nội dung ghi chép; `slug` là mảng các cấp URL.
- `app/about/education/page.jsx`, `app/about/experience/page.jsx`: học vấn và kinh nghiệm.
- `app/globals.css`: màu sắc, font và vài class dùng chung.
- `source: null` ở dự án nghĩa là chưa cung cấp link mã nguồn; thêm URL thật để hiện nút GitHub.

Form chỉ minh họa tương tác, kiểm tra required/email và khoảng trắng. Không gửi email, không lưu dữ liệu và không cần API key. Thông báo trên giao diện nói rõ điều này. Muốn liên hệ thật, dùng liên kết email.

Client Component không có nghĩa chỉ dựng HTML trong trình duyệt: Next.js có thể dựng HTML ban đầu trên server, sau đó hydrate để xử lý tương tác.

## Kiểm tra thủ công

1. Mở mọi mục menu, kiểm tra trang chủ và các liên kết About con.
2. Mở `/projects/1`, `/projects/2`, `/projects/3`: nội dung phải khác nhau.
3. Mở ba cấp `/docs/react/components/props`, thử breadcrumb quay về cấp cha.
4. Mở `/projects/999`, `/docs/khong-ton-tai`, `/khong-ton-tai`: hiện trang 404.
5. Form trống/email sai phải bị chặn; họ tên chỉ có khoảng trắng phải báo lỗi; nhập đúng phải hiện thông báo demo và xóa form.
6. Thu cửa sổ xuống 375px: menu xuống dòng, thẻ và form về một cột.


Sau khi chạy thử:

```bash
git add .
git commit -m "Migrate React profile to Next.js portfolio"
git push -u origin submission-nextjs/N23DCPT019-NguyenNgocGiaHan
```

Đề bài: https://github.com/taidoannguyenthanh20-dotcom/baitapnhom2/blob/main/README.md

Tài liệu: https://nextjs.org/docs/app/getting-started/layouts-and-pages

## Kết quả kiểm tra bản bàn giao

- `npm run build`: thành công với Next.js 16.3.5.
- `npm run lint`: không lỗi, không cảnh báo mã nguồn.
- Kiểm tra HTTP: các trang chính, ba dự án và năm ghi chép trả nội dung; đường dẫn không tồn tại có giao diện 404.
- Chưa chạy được kiểm thử trình duyệt tự động vì môi trường không tải được Chromium. Cần thử trực tiếp form và responsive theo checklist trên.

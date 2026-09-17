// Chỉnh nội dung cá nhân ở đây; các trang và card dùng chung dữ liệu này.
export const profile = {
  name: "Nguyễn Ngọc Gia Hân",
  studyYear: 4,
  isStudent: true,
  role: "Sinh viên Công nghệ Đa phương tiện",
  major: "Công nghệ Đa phương tiện — Phát triển ứng dụng Đa phương tiện",
  bio: "Mình yêu thích thiết kế giao diện, tìm hiểu cách xây dựng ứng dụng và khám phá thế giới game.",
  interests: ["Chơi game", "Đọc sách", "Nghe nhạc"],
  email: "giahan1835@gmail.com",
  github: "https://github.com/Hanari05",
  location: "Thủ Đức, TP.HCM",
};

export const skills = [
  {
    name: "Thiết kế giao diện",
    description:
      "Thiết kế giao diện cơ bản, chú trọng bố cục rõ ràng và dễ sử dụng.",
  },
  {
    name: "Game Design Documentation",
    description: "Lên kế hoạch và tổ chức nội dung tài liệu thiết kế game.",
  },
  {
    name: "Game Testing",
    description:
      "Quan tâm đến trải nghiệm người chơi và kiểm tra hoạt động của game.",
  },
  {
    name: "React",
    description: "Thực hành component, props, state và xử lý tương tác.",
  },
  {
    name: "Next.js",
    description: "Đang học App Router, layout và Server / Client Components.",
  },
  {
    name: "Tailwind CSS",
    description: "Thực hành xây dựng giao diện responsive bằng utility class.",
  },
];

export const projects = [
  {
    id: "1",
    name: "Website giới thiệu cá nhân",
    icon: "🌸",
    description:
      "Bài React ban đầu với ba trang giới thiệu, thông tin cá nhân và liên hệ.",
    technologies: ["React", "React Router", "CSS"],
    details:
      "Thực hành chia giao diện thành component Home, About và Contact. Thanh điều hướng dùng Link để chuyển trang và giữ bố cục chung.",
    features: [
      "Ba trang dùng chung header và footer",
      "Điều hướng bằng React Router",
      "Giao diện tím–hồng đơn giản",
    ],
    source:
      "https://github.com/Hanari05/routingwithreactrouter-LTWBT2/tree/submission/N23DCPT019-NguyenNgocGiaHan",
  },
  {
    id: "2",
    name: "Game Library",
    icon: "🎮",
    description:
      "Bài thực hành thư viện game với hình ảnh và danh sách trò chơi.",
    technologies: ["Next.js", "React", "CSS"],
    details:
      "Khám phá cách trình bày dữ liệu game và tương tác trong trình duyệt. Danh sách có các tựa game như Little Nightmares, MiSide, INSIDE và Tai Ương.",
    features: [
      "Thẻ game kèm hình ảnh",
      "Danh sách có thể cuộn ngang",
      "Thực hành tương tác phía trình duyệt",
    ],
    source: null, // Điền URL bài Game Library của em khi muốn công khai.
  },
  {
    id: "3",
    name: "Portfolio với Next.js",
    icon: "💻",
    description:
      "Phiên bản nâng cấp của website cá nhân theo bài tập App Router.",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    details:
      "Chuyển từ React Router sang hệ thống route theo thư mục. Tách dữ liệu và component để tái sử dụng giữa trang chủ, kỹ năng và dự án.",
    features: [
      "Route lồng nhau, dynamic và catch-all",
      "Form liên hệ có kiểm tra dữ liệu",
      "Server Components kết hợp Client Components",
    ],
    source: null,
  },
];

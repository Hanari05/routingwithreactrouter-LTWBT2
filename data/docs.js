export const documents = [
  {
    slug: ["react"],
    title: "React",
    text: "React giúp xây dựng giao diện từ các component. Trong bài này, những thành phần như thẻ kỹ năng và thẻ dự án được dùng lại ở nhiều trang.",
    code: "<SkillCard skill={skills[0]} />",
  },
  {
    slug: ["react", "components"],
    title: "Components",
    text: "Component là một phần giao diện có thể tái sử dụng. ProjectCard nhận dữ liệu một dự án và trả về JSX hiển thị dự án đó.",
    code: "projects.map((project) => (\n  <ProjectCard key={project.id} project={project} />\n))",
  },
  {
    slug: ["react", "components", "props"],
    title: "Props",
    text: "Props truyền dữ liệu từ component cha xuống component con. ProfileIntro trong bài nhận chuỗi name, số studyYear, boolean isStudent và mảng interests.",
    code: '<ProfileIntro\n  name="Nguyễn Ngọc Gia Hân"\n  studyYear={4}\n  isStudent={true}\n  interests={["Chơi game", "Đọc sách"]}\n/>',
  },
  {
    slug: ["nextjs"],
    title: "Next.js App Router",
    text: "App Router xác định URL dựa trên thư mục trong app. page.jsx là nội dung trang; layout.jsx bao quanh các trang con bằng bố cục dùng chung.",
    code: "app/about/education/page.jsx → /about/education\napp/projects/[id]/page.jsx → /projects/1\napp/docs/[...slug]/page.jsx → /docs/react/components",
  },
  {
    slug: ["nextjs", "server-client"],
    title: "Server và Client Components",
    text: 'Các page trong bài là Server Components. ContactForm khai báo "use client" để dùng state và sự kiện. Client Component vẫn có thể được dựng HTML ban đầu trên server, sau đó được hydrate để tương tác trong trình duyệt.',
    code: '"use client";\nimport { useState } from "react";',
  },
];

"use client";

import { useState } from "react";

const initialForm = { name: "", email: "", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [feedback, setFeedback] = useState({ type: "", text: "" });

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
    setFeedback({ type: "", text: "" });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!form.name.trim() || !form.message.trim()) {
      setFeedback({
        type: "error",
        text: "Họ tên và nội dung không được chỉ chứa khoảng trắng.",
      });
      return;
    }
    // Bài thực hành xử lý state: chưa có API gửi email hoặc lưu dữ liệu.
    setFeedback({
      type: "success",
      text: `Cảm ơn ${form.name.trim()}! Form đã được kiểm tra thành công. Đây là bản demo, tin nhắn chưa được gửi hoặc lưu.`,
    });
    setForm(initialForm);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="panel space-y-5"
      aria-describedby="form-note"
    >
      <p id="form-note" className="text-sm leading-6 text-muted">
        Form thực hành. Để liên hệ thật, em có thể sử dụng địa chỉ email bên
        cạnh.
      </p>
      <div>
        <label htmlFor="name" className="font-semibold">
          Họ và tên
        </label>
        <input
          id="name"
          name="name"
          autoComplete="name"
          required
          maxLength={100}
          value={form.name}
          onChange={handleChange}
          className="field"
        />
      </div>
      <div>
        <label htmlFor="email" className="font-semibold">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          maxLength={254}
          value={form.email}
          onChange={handleChange}
          className="field"
        />
      </div>
      <div>
        <label htmlFor="message" className="font-semibold">
          Nội dung tin nhắn
        </label>
        <textarea
          id="message"
          name="message"
          required
          maxLength={2000}
          rows={5}
          value={form.message}
          onChange={handleChange}
          className="field resize-y"
        />
      </div>
      <button type="submit" className="button">
        Gửi tin nhắn
      </button>
      <p
        role="status"
        aria-live="polite"
        className={`text-sm leading-6 ${feedback.type === "error" ? "text-pink" : "text-purple"}`}
      >
        {feedback.text}
      </p>
    </form>
  );
}

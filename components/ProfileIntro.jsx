// Bốn kiểu props: String, Number, Boolean và Array.
export default function ProfileIntro({
  name,
  studyYear,
  isStudent,
  interests,
}) {
  return (
    <div className="panel space-y-3 leading-7">
      <p>
        <strong>Họ tên:</strong> {name}
      </p>
      <p className="text-muted">
        {isStudent ? `Sinh viên năm ${studyYear}` : "Đã tốt nghiệp"}
      </p>
      <p className="text-muted">
        <strong className="text-white">Sở thích:</strong> {interests.join(", ")}
      </p>
    </div>
  );
}

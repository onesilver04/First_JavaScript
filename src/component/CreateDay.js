import useFetch from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";

export default function CreateDay() {
  const days = useFetch("http://localhost:3001/days");
  const navigate = useNavigate(); // useNavigate는 a태그와 같은 기능

  function addDay() {
    fetch(`http://localhost:3001/days/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        day: days.length + 1,
      }),
    }).then((res) => {
      if (res.ok) {
        alert("생성이 완료되었습니다.");
        navigate(`/`); // navigate로 페이지 이동
      }
    });
  }
  return (
    <div>
      <h3>현재 일수: {days.length}일</h3>
      <button onClick={addDay}>Day 추가</button>
    </div>
  );
}

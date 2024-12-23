import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Detail() {
  const location = useLocation();
  const navigate = useNavigate();

  // 상태가 없으면 홈으로 리다이렉트
  if (!location.state) {
    navigate("/");
    return null;
  }

  const { title, year, summary, poster, genres } = location.state;

  return (
    <div>
      <h1>{title}</h1>
      <h2>{year}</h2>
      <p>{summary}</p>
      <img src={poster} alt={title} />
      <ul>
        {genres.map((genre, index) => (
          <li key={index}>{genre}</li>
        ))}
      </ul>
    </div>
  );
}

export default Detail;

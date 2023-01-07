import { useState, useEffect } from "react";

export default () => {
  //initializing with an empty array because listCast is an array
  const [cast, setCast] = useState([]);

  async function fetchCast() {
    const response = await fetch('cast.json');
    setCast(await response.json());
  }

  useEffect(() => {
    fetchCast();
  });

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(auto-fit, minmax(90px, 1fr))`,
        gap: `1rem`,
        marginBottom: "1rem",
      }}
    >
      {cast.map((member) => (
        //we add key because we are iterating
        <a key={member.id} data-tooltip={member.name}>
          <img src={`images/${member.slug}_tn.svg`} alt={member.name} />
        </a>
      ))}
    </div>
  );
}
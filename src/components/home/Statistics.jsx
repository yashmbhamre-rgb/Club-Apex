import React from "react";

const statistics = [
  {
    value: "300+",
    label: "Students Reached",
  },
  {
    value: "20+",
    label: "Technical Events",
  },
  {
    value: "10+",
    label: "Projects",
  },
  {
    value: "∞",
    label: "Ideas to Build",
  },
];

const Statistics = () => {
  return (
    <section className="home-statistics-section">
      <div className="container">
        <div className="home-statistics-grid">
          {statistics.map((statistic) => (
            <div
              key={statistic.label}
              className="home-statistic"
            >
              <strong>{statistic.value}</strong>
              <span>{statistic.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
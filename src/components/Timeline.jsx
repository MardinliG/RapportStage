import React, { useEffect, useState } from "react";
import axios from "axios";
import "../assets/Timeline.css";

const Timeline = () => {
  const [timelineSteps, setTimelineSteps] = useState([]); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://127.0.0.1:8000/api/timeline_steps")
      .then((res) => {
        console.log("Réponse API :", res.data); // 
        const data = res.data;
        if (data && Array.isArray(res.data)) {
          setTimelineSteps(res.data); // 
        } else {
          setTimelineSteps([]);
        }
      })
      .catch((err) => {
        console.error("Erreur API :", err);
        setTimelineSteps([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="loading">Chargement...</p>;

  return (
    <div className="timeline-container">
      <h2 className="timeline-title">Mon Parcours de Stage</h2>
      {timelineSteps.length === 0 ? (
        <p className="no-steps">Aucune étape trouvée.</p>
      ) : (
        <ul className="timeline-list">
          {timelineSteps.map((step) => (
            <li key={step.id} className="timeline-item">
              <h3 className="timeline-step-title">{step.title}</h3>
              <p className="timeline-step-description">{step.description}</p>
              <small className="timeline-step-date">
                {new Date(step.date).toLocaleDateString('fr-FR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Timeline;

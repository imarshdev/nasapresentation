import React, { useState, useRef, useEffect } from "react";
import "./fadein.css";

export function Space() {
  return <div className="space"></div>;
}
export function Space2() {
  return <div className="space2"></div>;
}

const FadeInView = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    });

    // Ensure domRef.current is not null before observing
    if (domRef.current) {
      observer.observe(domRef.current);
    }

    return () => {
      // Ensure domRef.current is not null before unobserving
      if (domRef.current) {
        observer.unobserve(domRef.current);
      }
    };
  }, []);

  return (
    <div
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      style={{ transitionDelay: `${props.delay}` }}
      ref={domRef}
    >
      {props.children}
    </div>
  );
};

export default FadeInView;

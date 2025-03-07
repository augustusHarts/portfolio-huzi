"use client";
import { useEffect, useState } from "react";

export default function SplashScreen({ onFinish }: { onFinish: () => void }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onFinish(); // Notify the parent to show the main content
    }, 2500); // Transition duration

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    visible && (
      <div
        id="splash"
        className={`text-white bg-dark transition-transform duration-1000 $(visible ? "translate-y-full : translate-y-0")`}
      >
        <div id="header-font-title" className="container vh-100">
          <div className="row h-100">
            <div className="col d-flex justify-content-center align-items-center">
              <div className="p-5 text-white text-center rounded">
                <h2>Huzaifa Roomaney</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

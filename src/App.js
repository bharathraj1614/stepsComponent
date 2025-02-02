import { useState } from "react";
import { Button } from "./Button";

const msg = [
  "1. Learn React 📖",
  "2. Quit current Job 🤫",
  "3. Get the job you love 😍",
  "4. Live Happy 😃",
  "5. Fly all around the world ✈️",
];
function App() {
  let [step, setStep] = useState(1);
  let [isOpen, setIsOpen] = useState(true);
  function handlePrev() {
    if (step > 1) setStep((s) => s - 1);
  }
  function handleNext() {
    if (step < msg.length) setStep((s) => s + 1);
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            {msg.map((val, ind) => (
              <div key={ind + 1} className={step >= ind + 1 ? "active" : ""}>
                {ind + 1}
              </div>
            ))}
          </div>
          <div className="message">{msg[step - 1]}</div>
          <div className="buttons">
            <Button step={step} handleFunc={handlePrev} msgLength={msg.length}>
              {" "}
              <span>⬅️Prev</span>
            </Button>
            <Button
              step={step}
              handleFunc={handleNext}
              prev={0}
              msgLength={msg.length}
            >
              <span>Next ➡️</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;

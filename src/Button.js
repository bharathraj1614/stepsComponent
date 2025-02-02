export function Button({ step, handleFunc, prev = 1, msgLength, children }) {
  return (
    <button
      className={`button ${step === (prev ? 1 : msgLength) ? "" : "active"}`}
      onClick={handleFunc}
    >
      {children}
    </button>
  );
}

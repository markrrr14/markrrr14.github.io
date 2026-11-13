export default function Terminal({ children }) {
  return (
    <div className="terminal">
      <span className="prompt-sym">&gt;</span>
      {children}
      <span className="cursor" aria-hidden="true" />
    </div>
  )
}

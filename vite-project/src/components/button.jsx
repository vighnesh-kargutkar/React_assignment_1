export default function Button({ children, onselect }) {
  return <button onClick={onselect}>{children}</button>;
}

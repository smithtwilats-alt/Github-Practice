import "./CardGrid.css";
export function CardGrid({ children }) {
  console.log('CardGrid children:', children);

  return (
    <div className="card-grid">
      {children}
    </div>
  );
}
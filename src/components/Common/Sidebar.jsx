export default function Sidebar() {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li><a href="/">Dashboard</a></li>
          <li><a href="/insights">Insights</a></li>
          <li><a href="/comparison">Comparison</a></li>
          <li><a href="/recommendation">Recommendation</a></li>
        </ul>
      </nav>
    </aside>
  );
}

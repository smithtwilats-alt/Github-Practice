function MovieCard({ title, genre, year, isTopPick }) {
  return (
    <article className="movie-card">
      <h2 className="movie-title">{title}</h2>
      <p className="movie-meta">
        {genre} • {year}
      </p>
      {isTopPick && <span className="badge">Top pick</span>}
    </article>
  );
}

export default MovieCard;
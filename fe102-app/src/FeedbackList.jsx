export default function FeedbackList({ feedbacks }) {
  if (feedbacks.length === 0) {
    return (
      <div className="feedback-list">
        <h3>Submissions</h3>
        <p>No feedback yet.</p>
      </div>
    );
  }

  return (
    <div className="feedback-list">
      <h3>Submissions</h3>
      <ul>
        {feedbacks.map(feedback => (
          <li key={feedback.id}>
            <p>
              <strong>{feedback.name}</strong> ({feedback.email})
            </p>
            <p>{feedback.message}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
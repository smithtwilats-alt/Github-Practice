import { useState } from 'react';
import FeedbackForm from './components/FeedbackForm.jsx';
import FeedbackList from './FeedbackList.jsx';

export default function FeedbackDashboard() {
  const [feedbacks, setFeedbacks] = useState([]);

  function handleAddFeedback(newFeedback) {
    setFeedbacks(prevFeedbacks => [...prevFeedbacks, newFeedback]);
  }

  return (
    <div className="feedback-dashboard">
      <h2>Feedback Dashboard</h2>
      <FeedbackForm onAddFeedback={handleAddFeedback} />
      <FeedbackList feedbacks={feedbacks} />
    </div>
  );
}
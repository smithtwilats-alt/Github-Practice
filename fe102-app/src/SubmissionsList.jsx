export default function SubmissionsList({ submissions }) {
  return (
    <div>
      <h2>Submissions</h2>
      <pre>
        {JSON.stringify(submissions, null, 2)}
      </pre>
    </div>
  );
}
import { useState } from 'react';

export default function FeedbackForm({ onAddFeedback }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  function handleSubmit(event) {
    event.preventDefault();

    const newErrors = {
      name: form.name.trim() === '' ? 'Name is required' : '',
      email: form.email.trim() === '' ? 'Email is required' : '',
      message: form.message.trim() === '' ? 'Message is required' : '',
    };

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some(
      message => message !== ''
    );
    if (hasErrors) {
      return;
    }

    const newFeedback = {
      id: crypto.randomUUID(),
      name: form.name,
      email: form.email,
      message: form.message,
    };

    onAddFeedback(newFeedback);

    // explicit cleanup after successful submit
    setForm({
      name: '',
      email: '',
      message: '',
    });
    setErrors({
      name: '',
      email: '',
      message: '',
    });
  }

  return (
    <form className="feedback-form" onSubmit={handleSubmit}>
      <h3>Share feedback</h3>

      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          value={form.name}
          onChange={event =>
            setForm(prevForm => ({
              ...prevForm,
              name: event.target.value,
            }))
          }
        />
        {errors.name && (
          <p className="error" aria-live="polite">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={form.email}
          onChange={event =>
            setForm(prevForm => ({
              ...prevForm,
              email: event.target.value,
            }))
          }
        />
        {errors.email && (
          <p className="error" aria-live="polite">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          rows={3}
          value={form.message}
          onChange={event =>
            setForm(prevForm => ({
              ...prevForm,
              message: event.target.value,
            }))
          }
        />
        {errors.message && (
          <p className="error" aria-live="polite">
            {errors.message}
          </p>
        )}
      </div>

      <button type="submit">Send feedback</button>
    </form>
  );
}
import { useRef, useState } from 'react';
import { LoaderCircle, Send } from 'lucide-react';
import { mailto } from '../data/socialLinks';
import { sendContactMessage } from '../services/contactService';

const EMPTY = { name: '', email: '', message: '' };
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = 'Enter your name.';
  else if (values.name.trim().length < 2) errors.name = 'Name must be at least 2 characters.';

  if (!values.email.trim()) errors.email = 'Enter your email address.';
  else if (!EMAIL_PATTERN.test(values.email.trim())) errors.email = 'Enter a valid email, e.g. name@domain.com.';

  if (!values.message.trim()) errors.message = 'Describe your project or message.';
  else if (values.message.trim().length < 10) errors.message = 'Message must be at least 10 characters.';
  return errors;
}

const FIELDS = [
  { name: 'name', label: 'CALLER IDENTIFIER (NAME)', type: 'text', placeholder: 'e.g. Alex Vance', autoComplete: 'name' },
  { name: 'email', label: 'RETURN FREQUENCY (EMAIL)', type: 'email', placeholder: 'name@domain.com', autoComplete: 'email' },
];

export default function ContactForm() {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState({ state: 'idle', message: '' });
  const submitting = useRef(false);
  const formRef = useRef(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    const next = { ...values, [name]: value };
    setValues(next);
    if (touched[name]) setErrors(validate(next));
    if (status.state !== 'idle' && status.state !== 'submitting') setStatus({ state: 'idle', message: '' });
  };

  const handleBlur = (event) => {
    const { name } = event.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors(validate(values));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (submitting.current) return; // prevent double submissions

    const nextErrors = validate(values);
    setErrors(nextErrors);
    setTouched({ name: true, email: true, message: true });
    if (Object.keys(nextErrors).length > 0) {
      const firstInvalid = formRef.current?.querySelector(`[name="${Object.keys(nextErrors)[0]}"]`);
      firstInvalid?.focus();
      setStatus({ state: 'error', message: '✕ PACKET REJECTED. Fix the highlighted fields and try again.' });
      return;
    }

    submitting.current = true;
    setStatus({ state: 'submitting', message: 'TRANSMITTING…' });
    try {
      const payload = {
        name: values.name.trim(),
        email: values.email.trim(),
        message: values.message.trim(),
      };
      const result = await sendContactMessage(payload);
      setStatus({ state: 'success', message: result.message });
      if (result.delivered) {
        setValues(EMPTY);
        setTouched({});
      }
    } catch {
      setStatus({
        state: 'error',
        message: '✕ TRANSMISSION FAILED. Please try again, or use the email link below.',
      });
    } finally {
      submitting.current = false;
    }
  };

  const isSubmitting = status.state === 'submitting';
  const showError = (name) => touched[name] && errors[name];

  return (
    <div className="dispatch">
      <div className="dispatch__head">
        <span className="dispatch__dot anim-ping" aria-hidden="true" />
        <h3>DISPATCH CONSOLE // QUICK MESSAGE</h3>
      </div>

      <form ref={formRef} className="dispatch__form" onSubmit={handleSubmit} noValidate>
        <div className="dispatch__row">
          {FIELDS.map((field) => (
            <div key={field.name} className="field">
              <label htmlFor={`contact-${field.name}`}>{field.label}</label>
              <input
                id={`contact-${field.name}`}
                name={field.name}
                type={field.type}
                placeholder={field.placeholder}
                autoComplete={field.autoComplete}
                value={values[field.name]}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                aria-invalid={Boolean(showError(field.name))}
                aria-describedby={showError(field.name) ? `contact-${field.name}-error` : undefined}
              />
              {showError(field.name) && (
                <p id={`contact-${field.name}-error`} className="field__error">
                  {errors[field.name]}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="field">
          <label htmlFor="contact-message">PROJECT MISSION DETAILS</label>
          <textarea
            id="contact-message"
            name="message"
            rows={4}
            placeholder="Describe the mission, backend scope, or collaboration idea..."
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            aria-invalid={Boolean(showError('message'))}
            aria-describedby={showError('message') ? 'contact-message-error' : undefined}
          />
          {showError('message') && (
            <p id="contact-message-error" className="field__error">
              {errors.message}
            </p>
          )}
        </div>

        <div className="dispatch__actions">
          <button type="submit" className="btn btn--red btn--form" disabled={isSubmitting} aria-busy={isSubmitting}>
            {isSubmitting ? (
              <LoaderCircle size={18} className="spin" aria-hidden="true" />
            ) : (
              <Send size={18} aria-hidden="true" />
            )}
            <span>{isSubmitting ? 'TRANSMITTING…' : 'TRANSMIT PACKET'}</span>
          </button>
          <a className="dispatch__alt" href={mailto()}>
            OR OPEN DEFAULT EMAIL CLIENT →
          </a>
        </div>

        <div className="dispatch__status" role="status" aria-live="polite">
          {status.state === 'success' || status.state === 'error' ? (
            <p className={`status-msg status-msg--${status.state}`}>{status.message}</p>
          ) : null}
        </div>
      </form>
    </div>
  );
}

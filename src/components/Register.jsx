import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import {
  validateEmail,
  validateName,
  validateStrongPassword,
} from '../utils/utils';

const intialForm = {
  name: '',
  email: '',
  password: '',
  terms: false,
  hobbies: [],
  departman: '',
};

const initialErrors = {
  name: '',
  email: '',
  password: '',
  terms: '',
  hobbies: '',
  departman: '',
};
export default function Register(props) {
  const [formData, setFormData] = useState(intialForm);
  const [error, setError] = useState(initialErrors);
  const [isValid, setIsValid] = useState(false);

  const { setUserName } = props;
  const { push } = useHistory();

  useEffect(() => {
    if (
      validateName(formData.name) &&
      validateEmail(formData.email) &&
      validateStrongPassword(formData.password) &&
      formData.terms
    ) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [formData]);

  function handleChange(event) {
    const { name, value } = event.target;

    if (name === 'name') {
      if (validateName(value)) {
        setError({ ...error, [name]: '' });
      } else {
        setError({
          ...error,
          [name]: 'En az 3 karakter ve ad ile beraber soyadınızı girmelisiniz!',
        });
      }
    }

    if (name === 'email') {
      if (validateEmail(value)) {
        setError({ ...error, [name]: '' });
      } else {
        setError({
          ...error,
          [name]: 'Geçerli email giriniz!',
        });
      }
    }

    if (name === 'password') {
      if (validateStrongPassword(value)) {
        setError({ ...error, [name]: '' });
      } else {
        setError({
          ...error,
          [name]: 'Strong password yaz!',
        });
      }
    }

    setFormData({ ...formData, [name]: value });
  }

  function handleTerms(event) {
    const { checked, name } = event.target;
    if (checked) {
      setError({ ...error, [name]: '' });
    } else {
      setError({ ...error, [name]: 'Anlaşma şartlarını kabul etmelisiniz!' });
    }
    setFormData({ ...formData, [name]: checked });
  }

  function handleSubmit(event) {
    event.preventDefault();
    push('/');
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Register</h1>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={handleChange}
          value={formData.name}
        />
        <p className="error">{error.name}</p>
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={handleChange}
          value={formData.email}
        />
        <p className="error">{error.email}</p>
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={handleChange}
          value={formData.password}
        />
        <p className="error">{error.password}</p>
      </div>
      <div>
        Departman:
        <input
          type="radio"
          name="departman"
          id="IT"
          onChange={handleChange}
          checked={formData.departman === 'IT'}
          value="IT"
        />
        <label htmlFor="IT">IT</label>
        <input
          type="radio"
          name="departman"
          id="Marketing"
          onChange={handleChange}
          checked={formData.departman === 'Marketing'}
          value="Marketing"
        />
        <label htmlFor="Marketing">Marketing</label>
        <p className="error">{error.password}</p>
      </div>
      <div>
        <input
          type="checkbox"
          name="terms"
          id="terms"
          onChange={handleTerms}
          checked={formData.terms}
        />
        <label htmlFor="password">Şartları kabul ediyorum.</label>
        <p className="error">{error.password}</p>
      </div>
      <div>
        <button disabled={!isValid}>Giriş</button>
      </div>
    </form>
  );
}

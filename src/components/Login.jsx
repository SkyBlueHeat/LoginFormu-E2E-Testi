import { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export default function Login(props) {
  /* 2. state'leri tanımla */
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { setUserName } = props;
  const { push } = useHistory();

  /* 3. changeHandler yaz */
  function handleNameChange(event) {
    //const value = event.target.value;
    const { value } = event.target;
    setName(value);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  }

  /* 5. handleSubmit yaz */
  function handleSubmit(event) {
    event.preventDefault();
    // ... axios isteği .then içinde sonraki adımlar
    setUserName(name);
    setName('');
    setEmail('');
    setPassword('');
    push('/users');
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* 6. handlesubmit'i forma bağla*/}
      {/* 1. Formu html yapı olarak oluştur */}
      <h1>Login</h1>
      <div>
        <label htmlFor="name">Name:</label>
        {/* 4. controlled input yap */}
        <input
          type="text"
          name="name"
          id="name"
          onChange={handleNameChange}
          value={name}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={handleChange}
          value={email}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={handleChange}
          value={password}
        />
      </div>
      <div>
        <button>Giriş</button>
      </div>
    </form>
  );
}

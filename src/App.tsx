import { useCounter } from "./hooks/useCounter.js";
import { useForm } from "./hooks/useForm.js";

export default function Counter() {
  const { count, decrement, increment } = useCounter();
  const { formData, handleInputChange, handleSubmit, setFormData } = useForm(
    {
      username: "",
      password: "",
    },
    (formData) => {
      console.log(formData);
      setFormData({
        username: "",
        password: "",
      });
    }
  );

  const { username, password } = formData;

  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>

      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleInputChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

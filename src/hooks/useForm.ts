import { SyntheticEvent, useState } from "react";

interface FormDataType {
  username: string;
  password: string;
}

export const useForm = (
  initialState: FormDataType,
  onSubmit: (a: FormDataType) => void
) => {
  const [formData, setFormData] = useState(initialState);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
    e.preventDefault();
    onSubmit?.(formData);
  };

  return { formData, handleInputChange, handleSubmit, setFormData };
};

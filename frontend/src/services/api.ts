const API_URL = import.meta.env.DEV
  ? 'http://localhost:8000'
  : import.meta.env.VITE_API_URL;

export const getRating = async (
  question: string,
  answer: string,
  subject: string,
) => {
  const response = await fetch(`${API_URL}/rate_qa`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      question: question,
      answer,
      subject,
    }),
  });
  const data = await response.json();
  return {
    question: question,
    answer,
    ...data,
  };
};

export const ping = async () => {
  const response = await fetch(`${API_URL}/ping`);
  return response.json();
};

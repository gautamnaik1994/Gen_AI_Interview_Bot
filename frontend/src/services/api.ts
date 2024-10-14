const API_URL = !import.meta.env.DEV
  ? 'http://localhost:8000'
  : import.meta.env.VITE_API_URL;

export const getRating = async (
  question: string,
  answer: string,
  subject: string,
) => {
  try {
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

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return {
      question: question,
      answer,
      ...data,
    };
  } catch (error) {
    console.error('Error fetching rating:', error);
    throw error;
  }
};

export const ping = async () => {
  try {
    const response = await fetch(`${API_URL}/ping`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error pinging API:', error);
    throw error;
  }
};

import { useEffect, useRef, useState } from 'react';
import {
  IconRobot,
  IconUser,
  IconSendFill,
  IconCircleCheck,
  IconCloseCircle,
} from './components/Icons';
import Header from './components/Header';
import { getRating } from './services/api';
import { nodeQuestions, reactQuestions } from './utils/questions';

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [answers, setAnswers] = useState<string[]>([]);
  const [currentMessage, setCurrentMessage] = useState<string>('');
  const [currentState, setCurrentState] = useState<
    'personal' | 'react' | 'node' | 'completed'
  >('personal');
  const [ratings, setRatings] = useState<
    { question: string; answer: string; rating: number; reason: string }[]
  >([]);

  const messagesEndRef = useRef<null | HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      block: 'end',
      inline: 'nearest',
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    adjustTextareaHeight();
  }, [currentMessage]);

  useEffect(() => {
    scrollToBottom();
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [currentState, currentQuestionIndex]);

  const personalQuestions = [
    {
      question: 'What is your name?',
      type: 'text',
    },
    {
      question: 'What is your email?',
      type: 'text',
    },
    {
      question: 'What job position are you applying for?',
      type: 'radio',
      options: ['ReactJS', 'NodeJS'],
    },
    {
      question:
        'We will be asking you a few questions based on your job position, are you ready?',
      type: 'radio',
      options: ['Yes', 'No'],
      callback: (answer: string) => {
        if (answer === 'Yes') {
          const jobPosition = answers[2];
          if (jobPosition === 'ReactJS') {
            setCurrentState('react');
          } else if (jobPosition === 'NodeJS') {
            setCurrentState('node');
          }
          setCurrentQuestionIndex(0);
        } else {
          setCurrentState('completed');
        }
      },
    },
  ];

  const handleRating = async (
    question: string,
    answer: string,
    subject: string,
  ) => {
    setLoading(true);
    const ratingData = await getRating(question, answer, subject);
    setRatings((prevRatings) => [...prevRatings, ratingData]);
    setLoading(false);
    // autofocus textarea
    // textareaRef.current?.focus();
  };

  const sendMessage = async (msg: string = '') => {
    let interimMsg = currentMessage;

    if (msg !== '') {
      interimMsg = msg;
    }

    if (interimMsg.trim() !== '') {
      setAnswers([...answers, interimMsg]);
      setCurrentMessage('');

      if (currentState === 'personal') {
        const currentQuestion = personalQuestions[currentQuestionIndex];
        if (currentQuestion.callback) {
          currentQuestion.callback(interimMsg);
        } else {
          if (currentQuestionIndex < personalQuestions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
          }
        }
      } else if (currentState === 'react') {
        await handleRating(
          reactQuestions[currentQuestionIndex].question,
          interimMsg,
          'ReactJS',
        );
        if (currentQuestionIndex < reactQuestions.length - 1) {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
          setCurrentState('completed');
        }
      } else if (currentState === 'node') {
        await handleRating(
          nodeQuestions[currentQuestionIndex].question,
          interimMsg,
          'NodeJS',
        );
        if (currentQuestionIndex < nodeQuestions.length - 1) {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
          setCurrentState('completed');
        }
      }
    }
  };

  const getCurrentQuestion = () => {
    if (currentState === 'personal') {
      return personalQuestions[currentQuestionIndex].question;
    } else if (currentState === 'react') {
      return reactQuestions[currentQuestionIndex].question;
    } else if (currentState === 'node') {
      return nodeQuestions[currentQuestionIndex].question;
    }
    return '';
  };

  const getQuestionByIndex = (index: number) => {
    if (index < personalQuestions.length) {
      return personalQuestions[index].question;
    }

    const totalPersonalQuestions = personalQuestions.length;
    const totalReactQuestions = reactQuestions.length;

    if (index < totalPersonalQuestions + totalReactQuestions) {
      return reactQuestions[index - totalPersonalQuestions].question;
    } else {
      return nodeQuestions[index - totalPersonalQuestions - totalReactQuestions]
        .question;
    }
  };

  const adjustTextareaHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight + 6}px`;
    }
  };

  const ratingFooter = () => {
    const validRatings = ratings.filter((rating) => rating.rating > 0);

    const average =
      validRatings.length > 0
        ? validRatings.reduce((acc, rating) => acc + rating.rating, 0) /
          validRatings.length
        : 0;

    if (average === 0) {
      return (
        <li className="list-group-item  p-4 bg-secondary-subtle d-flex justify-content-between align-items-center">
          <div className="fw-medium">Please retake the test</div>
        </li>
      );
    }

    return (
      <li className="list-group-item p-4 bg-secondary-subtle d-md-flex justify-content-between align-items-center">
        <h5 className="mb-0">
          Overall Rating: {parseFloat(average.toFixed(2)) * 10.0}%
        </h5>
        <div className="summary-inner position-relative mt-2 mt-md-0">
          {average > 5 ? (
            <>
              <IconCircleCheck />
              <div className="fw-medium">Congratulations! You are selected</div>
              <a href="https://calendly.com/" target="_blank" rel="noreferrer">
                Schedule meeting with HR{' '}
              </a>
            </>
          ) : (
            <>
              <IconCloseCircle />
              <div className="fw-medium">Sorry, You did not make it</div>
            </>
          )}
        </div>
      </li>
    );
  };

  return (
    <>
      <Header />
      <div className="chat-container ">
        <div className="message-list pt-3">
          <div className="inner container">
            {answers.map((answer, index) => (
              <div key={index} className="message my-4">
                <div className="d-flex align-items-center gap-2 mb-1">
                  <IconRobot />
                  <div className="card  font-monospace m-box ">
                    {getQuestionByIndex(index)}
                  </div>
                </div>
                <div className="d-flex align-items-start gap-2 justify-content-end mt-2">
                  <div className="bg-secondary-subtle m-box text-body border-0 ">
                    {answer}
                  </div>
                  <IconUser />
                </div>
              </div>
            ))}
            {currentState !== 'completed' && (
              <div className="message bot-message d-flex align-items-center gap-2">
                <IconRobot />
                <div className="card  font-monospace m-box">
                  {loading ? (
                    <div className="d-flex gap-2 align-items-center">
                      <span
                        className="spinner-border spinner-border-sm"
                        role="status"
                      ></span>
                      <span className="">Generating new question...</span>
                    </div>
                  ) : (
                    <>{getCurrentQuestion()}</>
                  )}
                  {currentState === 'personal' &&
                    personalQuestions[currentQuestionIndex].type === 'radio' &&
                    personalQuestions[currentQuestionIndex].options && (
                      <div className="radio-options mt-3 mb-1">
                        {personalQuestions[currentQuestionIndex].options.map(
                          (option, index) => (
                            <button
                              key={index}
                              role="button"
                              className={`btn btn-outline-primary btn-sm me-2 `}
                              onClick={() => {
                                setCurrentMessage(option);
                                sendMessage(option);
                              }}
                            >
                              {option}
                            </button>
                          ),
                        )}
                      </div>
                    )}
                </div>
              </div>
            )}
            {currentState === 'completed' && (
              <div className="d-flex align-items-start gap-2">
                <IconRobot />
                <div className="card s-box border-info overflow-hidden">
                  <h5 className="card-header p-4">
                    Thank you for answering. Here is the report
                  </h5>
                  <ul className="list-group list-group-flush">
                    {ratings.length > 0 ? (
                      <>
                        {ratings.map((rating, index) => (
                          <li className="list-group-item py-3" key={index}>
                            <div className="fw-medium mb-1 ">
                              {rating.question}
                            </div>
                            <div
                              className={`badge text-bg-${rating.rating > 6 ? 'success' : rating.rating < 3 ? 'danger' : 'warning'}`}
                            >
                              Rating: {rating.rating}
                            </div>
                            <div className="mt-1">
                              <span className="fw-medium">Reason: </span>{' '}
                              {rating.reason}
                            </div>
                          </li>
                        ))}
                        {ratingFooter()}
                      </>
                    ) : (
                      <li className="list-group-item">
                        Sorry to to see that you are not interested
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            )}
          </div>
          <div ref={messagesEndRef} />
        </div>
        <div className="bottom-bar container">
          <textarea
            ref={textareaRef}
            value={currentMessage}
            rows={1}
            className="form-control form-control-lg input-area"
            onChange={(e) => {
              setCurrentMessage(e.target.value);
              adjustTextareaHeight();
            }}
            placeholder="Type your answer here..."
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey && !loading) {
                e.preventDefault();
                sendMessage('');
              }
            }}
            disabled={
              (currentState === 'personal' &&
                personalQuestions[currentQuestionIndex].type === 'radio') ||
              currentState === 'completed' ||
              loading
            }
            // onPaste={(e) => {
            //   e.preventDefault();
            // }}
          />
          <button
            className="btn btn-primary btn-lg"
            onClick={() => sendMessage('')}
            disabled={loading || currentState === 'completed'}
          >
            <IconSendFill />
          </button>
        </div>
      </div>
    </>
  );
}

export default App;

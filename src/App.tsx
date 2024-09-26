import React, { useState, useEffect, useCallback } from "react";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle, CheckCircle } from "lucide-react";
import { getRandomTicket, ITicket, IQuestion } from "./lib/tickets";
import { ProgressBar } from "./widgets/ProgressBar";

const ExamApp: React.FC = () => {
  const [ticket, setTicket] = useState<ITicket | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [mistakes, setMistakes] = useState<number[]>([]);
  const [examFinished, setExamFinished] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [wrongAnswers, setWrongAnswers] = useState<Record<number, string>>({});
  const [isMobile, setIsMobile] = useState(false);
  const [showMistakes, setShowMistakes] = useState(false);

  useEffect(() => {
    const newTicket = getRandomTicket();
    setTicket({
      ...newTicket,
      questions: newTicket.questions.map(q => ({
        ...q,
        options: [...q.options].sort(() => Math.random() - 0.5)
      }))
    });

    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 500);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleAnswer = useCallback(() => {
    if (!selectedAnswer || !ticket) return;

    const currentQuestion = ticket.questions[currentQuestionIndex];
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;

    setAnswers((prev) => ({
      ...prev,
      [currentQuestionIndex]: isCorrect ? "correct" : "incorrect",
    }));

    if (!isCorrect) {
      setMistakes((prev) => [...prev, currentQuestionIndex]);
      setWrongAnswers((prev) => ({
        ...prev,
        [currentQuestionIndex]: selectedAnswer
      }));
    }

    setShowResult(true);

    if (mistakes.length + (isCorrect ? 0 : 1) >= 2 || currentQuestionIndex === ticket.questions.length - 1) {
      setTimeout(() => {
        setExamFinished(true);
      }, 2000);
    } else {
      setTimeout(() => {
        setShowResult(false);
        setSelectedAnswer(null);
        setCurrentQuestionIndex((prev) => prev + 1);
      }, 2000);
    }
  }, [ticket, currentQuestionIndex, selectedAnswer, mistakes.length]);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key >= "1" && event.key <= "5") {
        const optionIndex = parseInt(event.key) - 1;
        const currentQuestion = ticket?.questions[currentQuestionIndex];
        if (currentQuestion && optionIndex < currentQuestion.options.length) {
          setSelectedAnswer(currentQuestion.options[optionIndex].id);
        }
      } else if (event.key === "Enter" && selectedAnswer && !showResult) {
        handleAnswer();
      } else if (event.key === "Delete" || event.key === "Backspace") {
        setSelectedAnswer(null);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [ticket, currentQuestionIndex, selectedAnswer, handleAnswer, showResult]);

  const currentQuestion: IQuestion | undefined =
    ticket?.questions[currentQuestionIndex];

  if (!ticket || !currentQuestion) {
    return <div>Loading...</div>;
  }

  const renderMistakes = () => {
    return (
      <div className="space-y-4">
        <h3 className="text-xl font-bold">Ошибки:</h3>
        {mistakes.map((mistakeIndex) => {
          const question = ticket.questions[mistakeIndex];
          return (
            <div key={mistakeIndex} className="border p-4 rounded">
              <p className="font-semibold">{question.text}</p>
              <p className="text-red-500">
                Ваш ответ: {question.options.find(o => o.id === wrongAnswers[mistakeIndex])?.text}
              </p>
              <p className="text-green-500">
                Правильный ответ: {question.options.find(o => o.id === question.correctAnswer)?.text}
              </p>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Экзамен ГАИ 2024</h1>
      <div className="mb-4">Билет №{ticket.id}</div>
      <ProgressBar
        current={currentQuestionIndex}
        total={ticket.questions.length}
        answers={answers}
      />
      {!examFinished ? (
        <Card>
          <CardHeader>
            <h2 className="text-xl">
              Вопрос {currentQuestionIndex + 1} из {ticket.questions.length}
            </h2>
            <p className="mb-4">{currentQuestion.text}</p>
          </CardHeader>
          <CardContent className="sm:flex justify-around">
            {currentQuestion.image ? (
              <img
                src={currentQuestion.image}
                alt="Вопрос"
                draggable={false}
                className="mb-4 max-w-full max-h-[400px] sm:w-[600px] rounded shadow h-auto select-none pointer-events-none"
              />
            ) : (
              <div className="w-full sm:w-[300px] h-[300px] flex justify-center items-center">
                <p className="uppercase">Вопрос без изображения</p>
              </div>
            )}
            <div className="space-y-2 flex flex-col justify-center items-center">
              {currentQuestion.options.map((option, index) => (
                <p
                  key={option.id}
                  className={`w-[300px] sm:w-[500px] select-none ${
                    !isMobile && "cursor-default"
                  } ${
                    selectedAnswer === option.id ? "font-bold" : ""
                  } ${
                    showResult
                      ? option.id === currentQuestion.correctAnswer
                        ? "text-green-500"
                        : selectedAnswer === option.id
                        ? "text-red-500"
                        : ""
                      : ""
                  }`}
                  onClick={() => !showResult && (isMobile && !isMobile || setSelectedAnswer(option.id))}
                >
                  {index + 1}. {option.text}
                </p>
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex justify-between items-center">
            <div className="text-lg">
              Выбранный ответ: {selectedAnswer ? currentQuestion.options.findIndex(o => o.id === selectedAnswer) + 1 : '-'}
            </div>
            <Button onClick={handleAnswer} disabled={!selectedAnswer || showResult}>
              Подтвердить (Enter)
            </Button>
          </CardFooter>
          {showResult && (
            <CardFooter>
              <div
                className={`text-center w-full font-medium text-2xl ${
                  answers[currentQuestionIndex] === "correct"
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {answers[currentQuestionIndex] === "correct"
                  ? "Правильно"
                  : "Неправильно"}
              </div>
            </CardFooter>
          )}
        </Card>
      ) : (
        <Card>
          <CardHeader>
            <h2 className="text-xl">Результат экзамена</h2>
          </CardHeader>
          <CardContent>
            {mistakes.length <= 1 ? (
              <div className="flex items-center text-green-500">
                <CheckCircle className="mr-2" />
                <span>
                  Экзамен сдан успешно! Количество ошибок: {mistakes.length}
                </span>
              </div>
            ) : (
              <div className="flex items-center text-red-500">
                <AlertCircle className="mr-2" />
                <span>
                  Экзамен не сдан. Количество ошибок: {mistakes.length}
                </span>
              </div>
            )}
            {showMistakes && renderMistakes()}
          </CardContent>
          <CardFooter>
            {mistakes.length > 0 && (
              <Button
                onClick={() => setShowMistakes(!showMistakes)}
              >
                {showMistakes ? "Скрыть ошибки" : "Просмотреть ошибки"}
              </Button>
            )}
          </CardFooter>
        </Card>
      )}
    </div>
  );
};

export default ExamApp;
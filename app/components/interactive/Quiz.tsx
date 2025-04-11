"use client";

import React, { useState, useEffect } from "react";
import {
  ChevronRightIcon,
  ChevronLeftIcon,
  CheckIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";

export interface QuizOption {
  id: string;
  text: React.ReactNode;
  isCorrect?: boolean;
}

export interface QuizQuestion {
  id: string;
  question: React.ReactNode;
  options: QuizOption[];
  explanation?: React.ReactNode;
  image?: string;
  points?: number;
  category?: string;
  multipleCorrect?: boolean;
}

export interface QuizResult {
  score: number;
  maxScore: number;
  percentage: number;
  correctAnswers: number;
  totalQuestions: number;
  questionResults: {
    questionId: string;
    answered: boolean;
    correct: boolean;
    selectedOptionIds: string[];
  }[];
}

interface QuizProps {
  questions: QuizQuestion[];
  showResults?: boolean;
  allowSkip?: boolean;
  allowReview?: boolean;
  showCorrectAnswers?: boolean;
  shuffleQuestions?: boolean;
  shuffleOptions?: boolean;
  timeLimit?: number; // in seconds
  onComplete?: (results: QuizResult) => void;
  className?: string;
}

const Quiz: React.FC<QuizProps> = ({
  questions: initialQuestions,
  showResults = true,
  allowSkip = true,
  allowReview = true,
  showCorrectAnswers = true,
  shuffleQuestions = false,
  shuffleOptions = false,
  timeLimit,
  onComplete,
  className = "",
}) => {
  // Helper function to shuffle an array
  const shuffleArray = <T extends object>(array: T[]): T[] => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  // Prepare questions - shuffle if needed
  const prepareQuestions = () => {
    let preparedQuestions = [...initialQuestions];

    if (shuffleQuestions) {
      preparedQuestions = shuffleArray(preparedQuestions);
    }

    if (shuffleOptions) {
      preparedQuestions = preparedQuestions.map((q) => ({
        ...q,
        options: shuffleArray(q.options),
      }));
    }

    return preparedQuestions;
  };

  // State variables
  const [questions] = useState<QuizQuestion[]>(prepareQuestions());
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<{
    [questionId: string]: string[];
  }>({});
  const [answeredQuestions, setAnsweredQuestions] = useState<Set<string>>(
    new Set()
  );
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [results, setResults] = useState<QuizResult | null>(null);
  const [remainingTime, setRemainingTime] = useState(timeLimit);
  const [reviewMode, setReviewMode] = useState(false);

  // Calculate max possible score
  const maxScore = questions.reduce((total, q) => total + (q.points || 1), 0);

  // Timer effect
  useEffect(() => {
    if (!timeLimit || quizCompleted) return;

    if (remainingTime <= 0) {
      handleCompleteQuiz();
      return;
    }

    const timer = setTimeout(() => {
      setRemainingTime((prev) => prev! - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [remainingTime, timeLimit, quizCompleted]);

  // Format time remaining in MM:SS
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  // Handle option selection
  const handleOptionSelect = (questionId: string, optionId: string) => {
    if (quizCompleted || reviewMode) return;

    const question = questions.find((q) => q.id === questionId);

    if (!question) return;

    // For single selection questions
    if (!question.multipleCorrect) {
      setSelectedOptions({
        ...selectedOptions,
        [questionId]: [optionId],
      });
      setAnsweredQuestions((prev) => new Set(prev).add(questionId));
      return;
    }

    // For multiple selection questions
    const currentSelections = selectedOptions[questionId] || [];
    const newSelections = currentSelections.includes(optionId)
      ? currentSelections.filter((id) => id !== optionId)
      : [...currentSelections, optionId];

    setSelectedOptions({
      ...selectedOptions,
      [questionId]: newSelections,
    });

    // Mark as answered if at least one option is selected
    if (newSelections.length > 0) {
      setAnsweredQuestions((prev) => new Set(prev).add(questionId));
    } else {
      const newAnswered = new Set(answeredQuestions);
      newAnswered.delete(questionId);
      setAnsweredQuestions(newAnswered);
    }
  };

  // Move to the next question
  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else if (!quizCompleted) {
      handleCompleteQuiz();
    }
  };

  // Move to the previous question
  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  // Skip the current question
  const handleSkipQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      handleCompleteQuiz();
    }
  };

  // Calculate quiz results
  const calculateResults = (): QuizResult => {
    let correctAnswers = 0;
    let totalScore = 0;
    const questionResults = questions.map((question) => {
      const selected = selectedOptions[question.id] || [];
      const isMultiple = question.multipleCorrect;
      let isCorrect = false;

      if (isMultiple) {
        // For multiple correct answers, all correct options must be selected and no incorrect ones
        const correctOptionIds = question.options
          .filter((option) => option.isCorrect)
          .map((option) => option.id);

        const selectedCorrectly =
          correctOptionIds.every((id) => selected.includes(id)) &&
          selected.every((id) => correctOptionIds.includes(id));

        isCorrect = selectedCorrectly;
      } else {
        // For single correct answer questions
        if (selected.length === 1) {
          const selectedOption = question.options.find(
            (option) => option.id === selected[0]
          );
          isCorrect = selectedOption?.isCorrect || false;
        }
      }

      if (isCorrect) {
        correctAnswers++;
        totalScore += question.points || 1;
      }

      return {
        questionId: question.id,
        answered: answeredQuestions.has(question.id),
        correct: isCorrect,
        selectedOptionIds: selected,
      };
    });

    return {
      score: totalScore,
      maxScore,
      percentage: Math.round((totalScore / maxScore) * 100),
      correctAnswers,
      totalQuestions: questions.length,
      questionResults,
    };
  };

  // Complete the quiz
  const handleCompleteQuiz = () => {
    const quizResults = calculateResults();
    setResults(quizResults);
    setQuizCompleted(true);

    if (onComplete) {
      onComplete(quizResults);
    }
  };

  // Reset the quiz
  const handleResetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOptions({});
    setAnsweredQuestions(new Set());
    setQuizCompleted(false);
    setResults(null);
    setRemainingTime(timeLimit);
    setReviewMode(false);
  };

  // Enter review mode
  const handleReview = () => {
    setReviewMode(true);
    setCurrentQuestionIndex(0);
  };

  // Get current question
  const currentQuestion = questions[currentQuestionIndex];

  // Check if the current question has been answered
  const isCurrentQuestionAnswered =
    currentQuestion && answeredQuestions.has(currentQuestion.id);

  // Get selected options for current question
  const currentSelectedOptions = currentQuestion
    ? selectedOptions[currentQuestion.id] || []
    : [];

  // Determine if an option is selected
  const isOptionSelected = (optionId: string) =>
    currentSelectedOptions.includes(optionId);

  // Determine if an option is correct (for review mode)
  const isOptionCorrect = (option: QuizOption) => option.isCorrect || false;

  // Check if we should show whether an option is correct/incorrect
  const shouldShowCorrectness = quizCompleted && showCorrectAnswers;

  // Results page
  if (quizCompleted && showResults && !reviewMode) {
    return (
      <div className={`bg-white rounded-lg shadow ${className}`}>
        <div className="px-6 py-8">
          <h2 className="text-2xl font-bold text-center text-gray-900">
            Quiz Results
          </h2>

          <div className="mt-6 text-center">
            <div className="text-5xl font-bold text-indigo-600">
              {results?.percentage}%
            </div>
            <p className="mt-2 text-gray-600">
              You got {results?.correctAnswers} out of {results?.totalQuestions}{" "}
              questions correct.
            </p>
            <p className="text-gray-600">
              Score: {results?.score} / {results?.maxScore} points
            </p>
          </div>

          <div className="mt-8 flex justify-center space-x-4">
            <button
              onClick={handleResetQuiz}
              className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              Try Again
            </button>

            {allowReview && (
              <button
                onClick={handleReview}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Review Answers
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-white rounded-lg shadow ${className}`}>
      {/* Header with progress */}
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-sm font-medium text-gray-900">
              Question {currentQuestionIndex + 1} of {questions.length}
            </span>
          </div>

          {timeLimit && !quizCompleted && (
            <div
              className={`text-sm font-medium ${
                remainingTime && remainingTime < 60
                  ? "text-red-600"
                  : "text-gray-900"
              }`}
            >
              Time: {formatTime(remainingTime || 0)}
            </div>
          )}
        </div>

        {/* Progress bar */}
        <div className="mt-3 relative pt-1">
          <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
            <div
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-600"
              style={{
                width: `${(currentQuestionIndex / questions.length) * 100}%`,
              }}
            ></div>
          </div>
        </div>
      </div>

      {/* Question content */}
      <div className="px-6 py-6">
        {/* Question */}
        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-900">
            {currentQuestion?.question}
          </h3>

          {/* Question image */}
          {currentQuestion?.image && (
            <div className="mt-4">
              <Image
                width={32}
                height={32}
                src={currentQuestion.image}
                alt="Question visual"
                className="max-w-full h-auto rounded-lg"
              />
            </div>
          )}
        </div>

        {/* Options */}
        <div className="space-y-3">
          {currentQuestion?.options.map((option) => {
            // Determine styling based on selection state and correctness
            let optionClassName = "p-4 border rounded-lg cursor-pointer";

            if (shouldShowCorrectness) {
              if (isOptionSelected(option.id)) {
                optionClassName += isOptionCorrect(option)
                  ? " border-green-500 bg-green-50"
                  : " border-red-500 bg-red-50";
              } else if (isOptionCorrect(option)) {
                optionClassName += " border-green-500 bg-green-50";
              } else {
                optionClassName += " border-gray-300";
              }
            } else {
              optionClassName += isOptionSelected(option.id)
                ? " border-indigo-500 bg-indigo-50"
                : " border-gray-300 hover:border-gray-400";
            }

            // Option icon
            let optionIcon = null;
            if (shouldShowCorrectness) {
              if (isOptionSelected(option.id)) {
                optionIcon = isOptionCorrect(option) ? (
                  <CheckIcon className="h-5 w-5 text-green-500" />
                ) : (
                  <XMarkIcon className="h-5 w-5 text-red-500" />
                );
              } else if (isOptionCorrect(option)) {
                optionIcon = <CheckIcon className="h-5 w-5 text-green-500" />;
              }
            } else if (isOptionSelected(option.id)) {
              // Show selected state in non-review mode
              optionIcon = <CheckIcon className="h-5 w-5 text-indigo-500" />;
            }

            return (
              <div
                key={option.id}
                className={optionClassName}
                onClick={() =>
                  handleOptionSelect(currentQuestion.id, option.id)
                }
              >
                <div className="flex items-start">
                  <div className="flex-1">{option.text}</div>
                  {optionIcon && (
                    <div className="ml-3 flex-shrink-0">{optionIcon}</div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Answer explanation (when in review mode) */}
        {reviewMode && currentQuestion?.explanation && (
          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h4 className="text-sm font-medium text-blue-800">Explanation:</h4>
            <div className="mt-1 text-sm text-blue-700">
              {currentQuestion.explanation}
            </div>
          </div>
        )}
      </div>

      {/* Navigation footer */}
      <div className="px-6 py-4 border-t border-gray-200">
        <div className="flex justify-between">
          <div>
            {(allowReview || reviewMode) && currentQuestionIndex > 0 && (
              <button
                onClick={handlePreviousQuestion}
                className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                <ChevronLeftIcon className="h-4 w-4 mr-1" />
                Previous
              </button>
            )}
          </div>

          <div className="flex space-x-3">
            {allowSkip &&
              !reviewMode &&
              !quizCompleted &&
              !isCurrentQuestionAnswered && (
                <button
                  onClick={handleSkipQuestion}
                  className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                >
                  Skip
                </button>
              )}

            {reviewMode && (
              <button
                onClick={handleResetQuiz}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Restart Quiz
              </button>
            )}

            {!reviewMode && !quizCompleted && (
              <button
                onClick={handleNextQuestion}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
              >
                {currentQuestionIndex === questions.length - 1
                  ? "Finish"
                  : "Next"}
                {currentQuestionIndex < questions.length - 1 && (
                  <ChevronRightIcon className="h-4 w-4 ml-1" />
                )}
              </button>
            )}

            {reviewMode && currentQuestionIndex < questions.length - 1 && (
              <button
                onClick={handleNextQuestion}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Next
                <ChevronRightIcon className="h-4 w-4 ml-1" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;

import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { QuestionService } from "@/services";
import { calculatePercentage } from "@/utils";
import type { QuestionWithAnswers } from "@/types";

export const useQuestion = () => {
  const [answers, setAnswers] = useState<QuestionWithAnswers[]>([]);
  const [index, setIndex] = useState(0);

  const questionQuery = useQuery({
    queryKey: ["get", "question"],
    queryFn: () => QuestionService.getAll({ random: true }),
  });

  useEffect(() => {
    if (questionQuery.data && answers.length === 0) {
      const answers: QuestionWithAnswers[] = questionQuery.data.map(
        (question) => ({
          ...question,
          answer: "",
        })
      );
      setAnswers(answers);
    }
  }, [answers.length, questionQuery.data]);

  const questionsLength = questionQuery?.data?.length || 0;
  const isLastQuestion = index === questionsLength - 1;
  const isFirstQuestion = index === 0;
  const percentageAnswered = calculatePercentage(questionsLength, index + 1);
  const answer = answers?.[index];

  const canNextAnswer = answer?.answer.trim().length > 0;

  const updateAnswer = (answer: string, id: string) => {
    const updatedAnswers = answers.map((item) =>
      item.id === id ? { ...item, answer } : item
    );
    setAnswers(updatedAnswers);
  };

  const nextQuestion = () => {
    setIndex(index + 1);
  };

  const previousQuestion = () => {
    setIndex(index - 1);
  };

  return {
    questions: {
      data: questionQuery.data,
      isLoading: questionQuery.isLoading,
      isError: questionQuery.isError,
      isLastQuestion,
      isFirstQuestion,
      nextQuestion,
      previousQuestion,
    },
    answers: {
      percentageAnswered,
      canNextAnswer,
      data: answers,
      updateAnswer,
    },
    answer,
  };
};

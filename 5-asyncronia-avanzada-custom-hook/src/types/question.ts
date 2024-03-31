export type Question = {
  title: string;
  description: string;
  id: string;
};

export type Answer = {
  answer: string;
};

export type QuestionWithAnswers = Question & Answer;

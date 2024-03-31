import { Link } from "react-router-dom";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Textarea,
  Progress,
  Spacer,
  Tooltip,
} from "@nextui-org/react";
import { PokemonCard, PokemonCardSkeleton } from "@/components/cards";
import { useQuestion, useFeeling, useFocus, useTheme } from "@/hooks";
import type { UserFeeling } from "@/types";
import { ROUTES } from "@/utils";

type FormQuestionsProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const FormQuestions = ({ isOpen, onClose }: FormQuestionsProps) => {
  const { questions, answers, answer } = useQuestion();
  const { feeling } = useFeeling();
  const [textareaRef] = useFocus({ triggerOnChange: answer?.id });
  const [isDarkTheme] = useTheme();

  const theme = isDarkTheme ? "dark" : "light";

  const handleCreate = () => {
    feeling.create({
      answers: answers.data,
      model: import.meta.env.VITE_MODEL,
    });
  };

  if (questions.isLoading) return null;
  if (!questions.data) return null;
  if (feeling.isCreateOK || feeling.isCreatePending) {
    return (
      <Modal
        backdrop="blur"
        isOpen={isOpen}
        onClose={onClose}
        placement="center"
        className={`${theme} text-foreground bg-background`}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Tu PokeFeel es
              </ModalHeader>
              <ModalBody className="flex flex-col items-center">
                {feeling.isCreateOK && (
                  <PokemonCard feeling={feeling?.pokemonData as UserFeeling} />
                )}
                {feeling.isCreatePending && <PokemonCardSkeleton />}
              </ModalBody>

              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  CERRAR
                </Button>

                {feeling.isCreateOK && (
                  <Link
                    to={ROUTES.feeling}
                    className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 px-unit-4 min-w-unit-20 h-unit-10 text-small gap-unit-2 rounded-medium [&>svg]:max-w-[theme(spacing.unit-8)] data-[pressed=true]:scale-[0.97] transition-transform-colors-opacity motion-reduce:transition-none bg-primary text-primary-foreground data-[hover=true]:opacity-hover"
                  >
                    IR
                  </Link>
                )}
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    );
  }

  return (
    <Modal
      backdrop="blur"
      isOpen={isOpen}
      onClose={onClose}
      placement="center"
      className={`${theme} text-foreground bg-background`}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Responde las preguntas
            </ModalHeader>
            <ModalBody>
              <Progress
                aria-label="Porcentaje de preguntas respondidas"
                size="md"
                value={answers.percentageAnswered}
                color="success"
                showValueLabel={true}
                className="max-w-md"
              />
              <Spacer y={1} />

              <Tooltip content={answer?.description}>
                {<h1 className="cursor-help">{answer?.title}</h1>}
              </Tooltip>

              <Spacer y={1} />
              <Textarea
                ref={textareaRef as React.Ref<HTMLTextAreaElement>}
                label="Respuesta"
                placeholder="Escribe tu respuesta"
                isRequired
                value={answer?.answer}
                onValueChange={(value) =>
                  answers.updateAnswer(value, answer?.id)
                }
                autoFocus
              />
            </ModalBody>

            <ModalFooter>
              {questions.isFirstQuestion ? (
                <Button color="danger" variant="light" onPress={onClose}>
                  CERRAR
                </Button>
              ) : (
                <Button
                  color="danger"
                  variant="light"
                  onPress={questions.previousQuestion}
                >
                  ATRAS
                </Button>
              )}

              {questions.isLastQuestion ? (
                <Button
                  color="primary"
                  onPress={handleCreate}
                  isDisabled={!answers.canNextAnswer}
                >
                  ENVIAR
                </Button>
              ) : (
                <Button
                  color="primary"
                  onPress={questions.nextQuestion}
                  isDisabled={!answers.canNextAnswer}
                >
                  SIGUIENTE
                </Button>
              )}
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

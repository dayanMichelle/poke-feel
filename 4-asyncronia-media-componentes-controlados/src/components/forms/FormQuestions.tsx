import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Spacer,
  Tooltip,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import { Question, QuestionWithAnswers } from "@/types";
import { FeelingService, QuestionService } from "@/services";

type FormQuestionsProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const FormQuestions = ({ isOpen, onClose }: FormQuestionsProps) => {
  const [answer, setAnswer] = useState<string>("");
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const data = await QuestionService.getAll({ random: true, limit: 1 });
        setQuestions(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchQuestions();
  }, []);

  const handleCreate = async () => {
    const questionWithAnswers: QuestionWithAnswers = {
      title: questions[0].title,
      description: questions[0].description,
      id: questions[0].id,
      answer: answer,
    };

    const userFeel = await FeelingService.create({
      answers: [questionWithAnswers],
      model: import.meta.env.VITE_MODEL,
    });

    // TODO: 4. en lugar del alert, llevar a la ruta de creación de /poke-feel con react router dom
    alert(
      `pokemon es ${userFeel.pokemon.name} y su sentimiento es ${userFeel.pokemon.feeling}`
    );
  };

  return (
    <Modal
      backdrop="blur"
      isOpen={isOpen}
      onClose={onClose}
      placement="center"
      className="dark text-foreground bg-background"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Responde las preguntas
            </ModalHeader>
            <ModalBody>
              <Tooltip content={questions?.[0]?.description}>
                {<h1 className="cursor-help">{questions?.[0]?.title}</h1>}
              </Tooltip>

              <Spacer y={1} />

              <label className="w-full">
                <p>Respuesta</p>
                <textarea
                  className="w-full p-2 mt-4 border border-gray-300 rounded-lg"
                  placeholder="Escribe tu respuesta"
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  autoFocus
                />
              </label>
            </ModalBody>

            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                CERRAR
              </Button>

              <Button color="primary" onPress={handleCreate}>
                ENVIAR
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

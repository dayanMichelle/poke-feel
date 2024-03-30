import axios from "axios";

const DATA_PREDEFINIDA = {
  model: "command-r",
  temperature: 0.1,
  prompt_truncation: "AUTO",
  stream: false,
  citation_quality: "accurate",
  connectors: [],
  documents: [],
  preamble: `este es el listado de sentimientos permitidos:
[
  "alegre",
  "determinado",
  "majestuoso",
  "enérgico",
  "audaz",
  "poderoso",
  "juguetón",
  "leal",
  "imparable",
  "curioso",
  "evolucionando",
  "libre",
  "inquieto",
  "en desarrollo",
  "astuto",
  "experto",
  "agresivo",
  "dominante",
  "sigiloso",
  "feroz",
  "carismático",
  "energético",
  "defensivo",
  "firme",
  "delicado",
  "elegante",
  "imponente",
  "reservado",
  "valiente",
  "encantador",
  "misterioso",
  "adorable",
  "afable",
  "melancólico",
  "fascinante",
  "trabajador",
  "dedicado",
  "cauteloso",
  "unido",
  "confundido",
  "sereno",
  "temperamental",
  "furioso",
  "determined",
  "intelectual",
  "fuerte",
  "hambriento",
  "voraz",
  "devorador",
  "robusto",
  "fogoso",
  "tranquilo",
  "relajado",
  "electrizante",
  "honorario",
  "dúo dinámico",
  "ágil",
  "inocente",
  "gentil",
  "viscoso",
  "toxico",
  "concha protectora",
  "espeluznante",
  "travieso",
  "colosal",
  "soñoliento",
  "hipnotizador",
  "explosivo",
]`,
  chat_history: [
    {
      role: "User",
      message: `listado de respuestas permitidas:
    [
      "alegre",
      "determinado",
      "majestuoso",
      "enérgico",
      "audaz",
      "poderoso",
      "juguetón",
      "leal",
      "imparable",
      "curioso",
      "evolucionando",
      "libre",
      "inquieto",
      "en desarrollo",
      "astuto",
      "experto",
      "agresivo",
      "dominante",
      "sigiloso",
      "feroz",
      "carismático",
      "energético",
      "defensivo",
      "firme",
      "delicado",
      "elegante",
      "imponente",
      "reservado",
      "valiente",
      "encantador",
      "misterioso",
      "adorable",
      "afable",
      "melancólico",
      "fascinante",
      "trabajador",
      "dedicado",
      "cauteloso",
      "unido",
      "confundido",
      "sereno",
      "temperamental",
      "furioso",
      "determined",
      "intelectual",
      "fuerte",
      "hambriento",
      "voraz",
      "devorador",
      "robusto",
      "fogoso",
      "tranquilo",
      "relajado",
      "electrizante",
      "honorario",
      "dúo dinámico",
      "ágil",
      "inocente",
      "gentil",
      "viscoso",
      "toxico",
      "concha protectora",
      "espeluznante",
      "travieso",
      "colosal",
      "soñoliento",
      "hipnotizador",
      "explosivo",
    ]`,
    },
  ],
};

const PROMPT =
  "según estas respuestas a las preguntas, que sentimiento es el que coincide mas en base a  las opciones predefinidas de sentimientos, responde solo con un sentimiento.";

export const cohereChatApi = axios.create({
  baseURL: process.env.URL_COHERE_CHAT,
  headers: {
    Authorization: process.env.TOKEN_COHERE_CHAT,
    "Content-type": "application/json",
  },
});

/**
 * Se añade data predefinida para que sea solo necesario enviar el mensaje en las requests
 */
cohereChatApi.interceptors.request.use(
  function (config) {
    const message = `${PROMPT} ${config.data.content}`;
    config.data = {
      ...DATA_PREDEFINIDA,
      message,
    };

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

cohereChatApi.interceptors.response.use(
  function (response) {
    response.data = {
      result: response.data.text,
    };
    return response;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

import axios from "axios";

const DATA_PREDEFINIDA = {
  model: "gpt-3.5-turbo",
  messages: [
    {
      role: "system",
      content:
        'listado de respuestas permitidas de sentimientos, solo responder con una palabra del listado :\n    [\n      "alegre",\n      "determinado",\n      "majestuoso",\n      "en\xE9rgico",\n      "audaz",\n      "poderoso",\n      "juguet\xF3n",\n      "leal",\n      "imparable",\n      "curioso",\n      "evolucionando",\n      "libre",\n      "inquieto",\n      "en desarrollo",\n      "astuto",\n      "experto",\n      "agresivo",\n      "dominante",\n      "sigiloso",\n      "feroz",\n      "carism\xE1tico",\n      "energ\xE9tico",\n      "defensivo",\n      "firme",\n      "delicado",\n      "elegante",\n      "imponente",\n      "reservado",\n      "valiente",\n      "encantador",\n      "misterioso",\n      "adorable",\n      "afable",\n      "melanc\xF3lico",\n      "fascinante",\n      "trabajador",\n      "dedicado",\n      "cauteloso",\n      "unido",\n      "confundido",\n      "sereno",\n      "temperamental",\n      "furioso",\n      "determined",\n      "intelectual",\n      "fuerte",\n      "hambriento",\n      "voraz",\n      "devorador",\n      "robusto",\n      "fogoso",\n      "tranquilo",\n      "relajado",\n      "electrizante",\n      "honorario",\n      "d\xFAo din\xE1mico",\n      "\xE1gil",\n      "inocente",\n      "gentil",\n      "viscoso",\n      "toxico",\n      "concha protectora",\n      "espeluznante",\n      "travieso",\n      "colosal",\n      "so\xF1oliento",\n      "hipnotizador",\n      "explosivo",\n    ]',
    },
  ],
  temperature: 1,
  max_tokens: 1200,
  top_p: 1,
  frequency_penalty: 0,
  presence_penalty: 0,
};

const PROMPT =
  "según estas respuestas a las preguntas, que sentimiento es el que coincide mas en base a  las opciones predefinidas de sentimientos, responde solo con un sentimiento.";

export const chatGPTApi = axios.create({
  baseURL: process.env.URL_CHAT_GPT,
  headers: {
    Authorization: process.env.TOKEN_CHAT_GPT,
    "Content-type": "application/json",
  },
});

/**
 * Se añade data predefinida para que sea solo necesario enviar el mensaje en las requests
 */
chatGPTApi.interceptors.request.use(
  function (config) {
    const content = `${PROMPT} ${config.data.content}`;

    config.data = {
      ...DATA_PREDEFINIDA,
      messages: [
        ...DATA_PREDEFINIDA.messages,
        {
          role: "user",
          content,
        },
      ],
    };

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

chatGPTApi.interceptors.response.use(
  function (response) {
    response.data = {
      result: response.data.choices[0].message.content,
    };
    return response;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

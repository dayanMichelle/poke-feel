export const NotFound = () => {
  return (
    <main className="bg-white min-h-screen flex flex-col items-center w-full h-full space-y-4 pt-20">
      <h1 className="text-md font-bold text-center text-gray-800 dark:text-gray-200">
        Not Found
      </h1>
      <img
        src="https://media2.giphy.com/media/cjDbTQZy5Tlch5nQAI/giphy.gif?cid=6c09b9526qqu7gzuoz3isffr7g3zehq0rg7qo2sslbe69ros&ep=v1_stickers_related&rid=giphy.gif&ct=s"
        alt="Not Found"
      />
      <a
        className="text-2xl font-medium text-blue-600 dark:text-blue-500 hover:underline"
        href="/"
      >
        ir a /
      </a>
    </main>
  );
};

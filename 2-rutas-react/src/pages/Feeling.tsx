export const Feeling = () => {
  return (
    <main className="bg-slate-100 min-h-screen flex flex-col items-center justify-center w-full h-full space-y-4">
      <h1 className="text-md font-bold text-center text-gray-800 dark:text-gray-200">
        Poke Feel Page
      </h1>
      {/* // TODO: 3. cambia los <a></a> por etiquetas de react-router-dom */}
      <a
        className="text-2xl font-medium text-blue-600 dark:text-blue-500 hover:underline"
        href="/"
      >
        ir a /
      </a>
    </main>
  );
};

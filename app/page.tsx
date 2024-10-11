export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-4 row-start-2 items-center sm:items-start max-w-2xl">
        <h1 className="text-5xl font-bold">latte tax</h1>
        <p className="text-xl italic text-gray-600">noun</p>
        <p className="text-lg text-justify leading-relaxed">
          The <span className="font-bold">latte tax</span> is the price to pay for an iced latte, even if you can make a better one at home, because the routine or break of going to a coffee shop helps offer perspective or focus, preventing bad habits and bad trading days or helping with productivity.
        </p>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          I love omakase
        </a>
      </footer>
    </div>
  );
}


export default function Home() {
  return (
    <main style={{ backgroundImage: `url(/purple.png)`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <div>
          <h1 className="text-6xl font-bold">
          Welcome to <a href="https://twitter.com/Not_Younger_" className="purple-400">Next.js!</a>
          </h1>
        </div>
      </div>
    </main>
  );
}

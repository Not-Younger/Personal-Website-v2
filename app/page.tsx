export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center space-y-10 mt-28">
      <div className="flex flex-col items-center space-y-6">
        <h1 className="max-w-3xl text-center font-bold text-gray-900 dark:text-white text-5xl leading-tight">
          Hi, my name is Jonathan Young.
        </h1>
        <p className="text-lg font-medium  text-gray-900 dark:text-white">
          I&apos;m an undergraduate student studying Computer Science at St. Olaf College.
        </p>
      </div>
      <button
        className="text-lg w-[180px] bg-gradient-to-r from-[#ff874f] to-[#ec5e95] rounded-lg text-gray-50 font-semibold py-[10px] px-4"
      >
        Get Started
      </button>
    </div>
  );
}

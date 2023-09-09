import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
function Banner() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-6 text-center">
      <h1 className="text-2xl font-bold text-center md:text-4xl">
        Millions run on Notepad every day
      </h1>
      <p>
        Powering the world’s best teams, from next-generation startups <br /> to
        established enterprises.
      </p>
      <a href="/" className="text-cyan-600 hover:underline">
        <span>Read customer stories</span>
        <ArrowLongRightIcon className="inline-block w-4 h-4 ml-1" />
      </a>
    </section>
  );
}

export default Banner;

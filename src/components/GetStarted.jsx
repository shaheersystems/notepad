import { Link } from "react-router-dom";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";

function GetStarted() {
  return (
    <section className="flex flex-col items-center gap-4 py-6">
      <h1 className="text-2xl font-bold text-center md:text-4xl">
        Get started for free
      </h1>
      <p className="text-center">
        Play around with it first. Pay and add your team later.
      </p>
      <div>
        <Link
          to="/signup"
          className="px-4 py-1 text-white bg-black rounded shadow hover:bg-black/80"
        >
          Get Notepad free
        </Link>
        <Link to="/demo" className="px-4 py-1 text-cyan-600 hover:underline">
          <span>Schedule a demo</span>
          <ArrowLongRightIcon className="inline-block w-4 h-4 ml-1" />
        </Link>
      </div>
    </section>
  );
}

export default GetStarted;

import { Link } from "react-router-dom";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import desktopApp from "../assets/sidekick-desktop-app.png";

function HeroSection() {
  return (
    <section className="py-16">
      <div className="flex flex-col items-center justify-center w-full gap-8">
        <h1 className="text-4xl font-bold text-center md:font-semibold md:text-7xl">
          Your wiki, docs, & projects. Together.
        </h1>
        <p className="text-lg text-center md:text-xl">
          Notepad is the connected workspace where better, faster work happens.
          Now with AI-powered insights and integrations to help you work
        </p>
        <Link
          to="/signup"
          className="px-4 py-1 text-white bg-black rounded shadow hover:bg-black/80"
        >
          Get Notepad free
          <ArrowLongRightIcon className="inline-block w-5 h-5 ml-2" />
        </Link>
      </div>
      <div>
        <div className="py-6">
          <img
            className="border shadow-lg rounded-xl"
            src={desktopApp}
            alt="sidekick-desktop-app-img"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

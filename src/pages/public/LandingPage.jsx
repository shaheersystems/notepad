import Banner from "../../components/Banner";
import GetStarted from "../../components/GetStarted";
import HeroSection from "../../components/HeroSection";
import Wrap from "../../components/Wrap";
import NoteIllustration from "../../assets/note-banner.svg";
import Footer from "../../components/Footer";
function LandingPage() {
  return (
    <div>
      <Wrap>
        <HeroSection />
        <Banner />
        <div className="flex items-center justify-center py-4">
          <img className="h-96" src={NoteIllustration} alt="Note" />
        </div>
        <GetStarted />
      </Wrap>
    </div>
  );
}

export default LandingPage;

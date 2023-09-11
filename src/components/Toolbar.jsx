import Logo from "./Logo";

function Toolbar() {
  return (
    <div className="flex items-center justify-between px-4 py-3">
      <div>
        <Logo />
      </div>
      <div></div>
    </div>
  );
}

export default Toolbar;

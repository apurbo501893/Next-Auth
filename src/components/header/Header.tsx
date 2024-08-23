import MiddleHeader from "./MiddleHeader";
import TopHeader from "./TopHeader";

const Header = () => {
  return (
    <header className="w-full bg-themeWhite sticky top-0 z-50">
      {/* TopHeader */}
      <TopHeader />

      {/* Middle Header */}
      <MiddleHeader />
      {/* BottomHeader */}
    </header>
  );
};

export default Header;

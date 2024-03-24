import ThemeSwitcher from "@/app/ui/ThemeSwitcher";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

export default function Navbar() {
  return (
    <div className="flex justify-between p-5 items-center border-b gap-8">
      <div className="flex-none flex items-center">
        <div className="mr-4 text-4xl">👾</div>
        <div className="text-left">
          <p className="text-2xl">Jonathan Young</p>
          <p className="text-s">Software Engineer</p>
        </div>
      </div>
      <div className="flex items-center">
        <LightModeIcon />
        <ThemeSwitcher />
        <DarkModeIcon />
      </div>
    </div>
  );
}

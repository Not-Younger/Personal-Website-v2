import ThemeSwitcher from "@/app/ui/ThemeSwitcher";

export default function Navbar() {
  const name: string = "Jonathan Young";

  return (
    <div className="flex p-5">
      <div className="flex-none">
        👾 Gym | Welcome, {name}!
      </div>
      <div className="flex-auto">
      </div>
      <div className="flex-32">
        <ThemeSwitcher />
      </div>
      <div className="flex-none w-64">
        One
      </div>
      
    </div>
  )
}
import * as Dropdown from "@radix-ui/react-dropdown-menu";
import { useTheme } from "../context/ThemeContext";
const DropdownMenu = ({ children, data }) => {
  const { theme } = useTheme();
  return (
    <Dropdown.Root>
      <Dropdown.Trigger className="outline-none" asChild>
        {children}
      </Dropdown.Trigger>
      <Dropdown.Portal>
        <Dropdown.Content
          side="bottom"
          className={`flex flex-col gap-1 p-1 mt-1 mr-3 rounded-lg  ${
            theme === "dark"
              ? "bg-dark text-light border border-neutral-800 shadow-lg"
              : "bg-white shadow"
          }`}
        >
          {data?.map((item, idx) => {
            return (
              <Dropdown.Item
                key={idx}
                className={`px-2 py-1 rounded-lg outline-none w-36  ${
                  theme === "dark"
                    ? "text-light hover:bg-neutral-800"
                    : "hover:bg-gray-100"
                }`}
              >
                <button className="flex items-center w-full gap-2 text-sm text-left outline-none">
                  {item.icon}
                  <span>{item.text}</span>
                </button>
              </Dropdown.Item>
            );
          })}
        </Dropdown.Content>
      </Dropdown.Portal>
    </Dropdown.Root>
  );
};

export default DropdownMenu;

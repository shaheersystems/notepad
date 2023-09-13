import * as Dropdown from "@radix-ui/react-dropdown-menu";
const DropdownMenu = ({ children, data }) => {
  return (
    <Dropdown.Root>
      <Dropdown.Trigger className="outline-none" asChild>
        {children}
      </Dropdown.Trigger>
      <Dropdown.Portal>
        <Dropdown.Content
          side="bottom"
          className="flex flex-col gap-1 p-1 mt-1 mr-3 border rounded-lg shadow"
        >
          {data?.map((item, idx) => {
            return (
              <Dropdown.Item
                key={idx}
                className="px-2 py-1 rounded-lg outline-none w-36 hover:bg-gray-100"
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

import * as Dropdown from "@radix-ui/react-dropdown-menu";
import PropTypes from "prop-types";
const DropdownMenu = ({ children, data }) => {
  return (
    <Dropdown.Root>
      <Dropdown.Trigger className="outline-none" asChild>
        {children}
      </Dropdown.Trigger>
      <Dropdown.Portal>
        <Dropdown.Content
          side="bottom"
          data-side="bottom"
          className="flex flex-col gap-2 p-2 border rounded shadow"
        >
          {data?.map((item, idx) => {
            return (
              <Dropdown.Item
                key={idx}
                className="px-4 py-1 rounded outline-none hover:bg-gray-100"
              >
                <button className="w-full text-left outline-none">
                  {item}
                </button>
              </Dropdown.Item>
            );
          })}
          <Dropdown.Arrow className="border" />
        </Dropdown.Content>
      </Dropdown.Portal>
    </Dropdown.Root>
  );
};

DropdownMenu.PropTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.array.isRequired,
};

export default DropdownMenu;

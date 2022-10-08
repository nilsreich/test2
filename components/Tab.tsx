import * as Tabs from "@radix-ui/react-tabs";

export const Tab = () => {
  return (
    <Tabs.Root defaultValue="tab1" orientation="vertical">
      <Tabs.List aria-label="tabs example">
        <Tabs.Trigger
          value="tab1"
          className="outline:border radix-state-active:font-black radix-state-active:text-black  radix-state-active:border-blue-500 px-4 py-1 text-sm text-neutral-700 border-b-2 border-neutral-400"
        >
          One
        </Tabs.Trigger>
        <Tabs.Trigger
          value="tab2"
          className="radix-state-active:font-black  radix-state-active:text-black radix-state-active:border-blue-500 px-4 py-1 text-sm text-neutral-700 border-b-2 border-neutral-400"
        >
          Two
        </Tabs.Trigger>
        <Tabs.Trigger
          value="tab3"
          className="radix-state-active:font-black radix-state-active:text-black radix-state-active:border-blue-500 px-4 py-1 text-sm text-neutral-700 border-b-2 border-neutral-400"
        >
          Three
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="tab1">Tab one content</Tabs.Content>
      <Tabs.Content value="tab2">Tab two content</Tabs.Content>
      <Tabs.Content value="tab3">Tab three content</Tabs.Content>
    </Tabs.Root>
  );
};

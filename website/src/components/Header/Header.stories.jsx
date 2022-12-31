import { Header } from "./Header";
import { SessionContext } from "next-auth/react";
import React from "react";

export default {
  title: "Header/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
};

const Template = (args) => {
  var { session } = args;
  return (
    <SessionContext.Provider value={session}>
      <Header {...args} />
    </SessionContext.Provider>
  );
};

export const Default = Template.bind({});
Default.args = { session: { data: { user: { name: "StoryBook user" } }, status: "authenticated" }, transparent: false };

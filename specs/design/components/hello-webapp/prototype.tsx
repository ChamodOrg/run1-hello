import type { ReactNode } from "react";
import { AppShell, Heading, Section, Text, defineApp } from "@wso2/prototype-kit";

const user = { name: "Visitor" };

function Shell({ children }: { children: ReactNode }) {
  return (
    <AppShell
      id="shell"
      user={user}
      nav={[{ id: "nav.greeting", label: "Greeting", to: "screen.greeting" }]}
      account="screen.greeting"
      signOut="screen.greeting"
    >
      {children}
    </AppShell>
  );
}

function Greeting() {
  return (
    <Shell>
      <Heading id="heading.greeting" text="Hello, World!" />
      <Section id="section.greeting" title="Welcome">
        <Text id="text.greeting" text="Thanks for stopping by." />
      </Section>
    </Shell>
  );
}

export default defineApp({
  screens: { "screen.greeting": Greeting },
  data: {},
});

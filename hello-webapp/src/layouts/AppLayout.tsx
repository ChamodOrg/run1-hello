import type { JSX } from "react";
import { AppShell, ColorSchemeToggle, Divider, Footer, Header, Sidebar, UserMenu } from "@wso2/oxygen-ui";
import { Hand, LogOut, User } from "@wso2/oxygen-ui-icons-react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

const user = { name: "Visitor" };

export default function AppLayout(): JSX.Element {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const active = pathname.startsWith("/greeting") ? "greeting" : "";

  return (
    <AppShell>
      <AppShell.Navbar>
        <Header>
          <Header.Toggle />
          <Header.Brand>
            <Header.BrandTitle>Hello</Header.BrandTitle>
          </Header.Brand>
          <Header.Spacer />
          <Header.Actions>
            <ColorSchemeToggle />
            <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />
            <UserMenu>
              <UserMenu.Trigger name={user.name} />
              <UserMenu.Item icon={<User size={18} />} label="Account" onClick={() => void navigate("/greeting")} />
              <UserMenu.Divider />
              {/* No sign-in in this product: the prototype's Sign out lands on the greeting. */}
              <UserMenu.Logout icon={<LogOut size={18} />} label="Sign out" onClick={() => void navigate("/greeting")} />
            </UserMenu>
          </Header.Actions>
        </Header>
      </AppShell.Navbar>

      <AppShell.Sidebar>
        <Sidebar activeItem={active}>
          <Sidebar.Nav>
            <Sidebar.Category>
              <Sidebar.Item id="greeting" link={<Link to="/greeting" />}>
                <Sidebar.ItemIcon>
                  <Hand size={20} />
                </Sidebar.ItemIcon>
                <Sidebar.ItemLabel>Greeting</Sidebar.ItemLabel>
              </Sidebar.Item>
            </Sidebar.Category>
          </Sidebar.Nav>
        </Sidebar>
      </AppShell.Sidebar>

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>

      <AppShell.Footer>
        <Footer>
          <Footer.Copyright>© WSO2 LLC</Footer.Copyright>
        </Footer>
      </AppShell.Footer>
    </AppShell>
  );
}

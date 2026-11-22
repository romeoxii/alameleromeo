import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Nav } from "../components/Nav";

export const Route = createRootRoute({
  component: () => (
    <>
      <section className="w-full bg-[#F9EFDB] p-5">
        <Nav />
        <Outlet />
      </section>
    </>
  ),
});

import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";

export const Route = createRootRoute({
  component: () => (
    <>
      <section className="w-full bg-bone-100 p-5">
        <Nav />
        <Outlet />
        <Footer />
      </section>
    </>
  ),
});

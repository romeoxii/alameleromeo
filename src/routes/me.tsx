import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/me")({
  component: () => (
    <div className="w-full max-w-6xl mt-12 mx-auto space-y-10">
      <h1>Me</h1>
    </div>
  ),
});

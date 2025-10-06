import React from "react";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  return (
    <div className="p-8 text-center">
      <h1 className="text-2xl font-bold mb-4">Oops — something went wrong</h1>
      <pre className="text-sm text-left">{String(error?.message ?? error)}</pre>
    </div>
  );
}

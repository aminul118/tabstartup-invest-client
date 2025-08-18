import React from "react";

export interface Children {
  children: React.ReactNode;
}

export interface Params {
  params: Promise<{ slug: string }>;
}

export interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

"use client";

import React from "react";

interface State {
  hasError: boolean;
  error: string | null;
}

export default class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  State
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error: error?.message ?? String(error) };
  }

  render() {
    if (this.state.hasError) {
      return null;
    }
    return this.props.children;
  }
}

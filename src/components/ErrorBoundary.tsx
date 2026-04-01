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
      return (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "#0a0a0a",
            color: "#fff",
            padding: "24px",
            zIndex: 9999,
            fontFamily: "monospace",
            fontSize: "14px",
            overflowY: "auto",
          }}
        >
          <div style={{ color: "#f87171", fontWeight: "bold", marginBottom: "12px" }}>
            RENDER ERROR — DEBUG MODE
          </div>
          <pre style={{ whiteSpace: "pre-wrap", color: "#fca5a5" }}>
            {this.state.error}
          </pre>
        </div>
      );
    }
    return this.props.children;
  }
}

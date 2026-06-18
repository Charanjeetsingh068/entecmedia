"use client";

export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body style={{ background: "#010101", margin: 0, fontFamily: "sans-serif" }}>
        <main
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            padding: "24px",
          }}
        >
          <h1
            style={{
              fontSize: "4rem",
              fontWeight: "bold",
              color: "#e30613",
              margin: 0,
            }}
          >
            Something went wrong
          </h1>
          <p style={{ color: "#aaa", marginTop: "16px", fontSize: "1.1rem" }}>
            {error?.message || "An unexpected error occurred."}
          </p>
          <button
            onClick={() => reset()}
            style={{
              marginTop: "32px",
              padding: "12px 28px",
              border: "1px solid #e30613",
              background: "transparent",
              color: "#fff",
              borderRadius: "9999px",
              cursor: "pointer",
              fontSize: "1rem",
            }}
          >
            Try Again
          </button>
        </main>
      </body>
    </html>
  );
}

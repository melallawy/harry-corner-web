import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "40px 80px",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontSize: 72,
              fontWeight: 900,
              color: "#ffffff",
              margin: "0 0 8px 0",
              letterSpacing: "8px",
            }}
          >
            HARRY CORNER
          </h1>
          <div
            style={{
              width: 200,
              height: 4,
              background: "#c9a96e",
              margin: "16px 0",
            }}
          />
          <p
            style={{
              fontSize: 32,
              color: "#c9a96e",
              margin: 0,
              letterSpacing: "2px",
            }}
          >
            Premium Kitchen Tools & Durable Essentials
          </p>
        </div>
      </div>
    ),
    size,
  );
}

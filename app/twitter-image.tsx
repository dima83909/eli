import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image(request: Request) {
  const url = new URL(request.url);
  const title = url.searchParams.get("title") ?? "Eli";
  const description = url.searchParams.get("description") ?? "Eli web app";
  const host = new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").host;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          background: "linear-gradient(135deg, #0a0a0a 0%, #111 50%, #1a1a1a 100%)",
          color: "#fff",
          padding: 64,
          position: "relative",
        }}
      >
        <div style={{ fontSize: 64, fontWeight: 800, letterSpacing: -1, marginBottom: 16 }}>
          {title}
        </div>
        <div style={{ fontSize: 28, opacity: 0.8, maxWidth: 1000 }}>{description}</div>
        <div style={{ position: "absolute", bottom: 32, right: 48, fontSize: 20, opacity: 0.6 }}>
          {host}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

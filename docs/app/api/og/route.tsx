import { siteConfig } from "@/config/site";
import { ImageResponse } from "next/og";

// Use serverless runtime instead of edge to avoid size limits
export const runtime = "edge";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    const title = searchParams.get("title") ?? siteConfig.name;

    return new ImageResponse(
      <div
        tw="flex flex-col w-full h-full items-center justify-center"
        style={{
          background: "linear-gradient(to bottom right, #111827, #000000)",
        }}
      >
        <div tw="flex flex-col w-[80%] h-full items-center justify-center">
          <h1
            tw="flex items-center font-bold text-6xl text-white justify-center"
            style={{
              textWrap: "balance",
            }}
          >
            {title}
          </h1>
          <p
            tw="text-2xl text-zinc-400 text-center"
            style={{
              textWrap: "balance",
            }}
          >
            {siteConfig.description}
          </p>
        </div>
      </div>,
      {
        width: 1200,
        height: 630,
      },
    );
  } catch (error) {
    console.error("Error generating OG image:", error);
    return new Response("Failed to generate OG image", { status: 500 });
  }
}

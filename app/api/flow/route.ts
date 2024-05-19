import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    nodes: [
      { name: "User", category: "User" },
      { name: "Browser", category: "Browser" },
      { name: "Domain", category: "Domain" },
      { name: "Next.js server", category: "Server" },
      { name: "Root page,layout", category: "Server" },
      { name: "Route: /dashboard", category: "Server" },
      { name: "Route: /flow", category: "Server" },
      { name: "Route: /api/flow", category: "Server" },
      { name: "Route: /404", category: "Server" },

      { name: "MUi Provider", category: "provider" },
      { name: "React-query Provider", category: "provider" },

      { name: "App Bar UI", category: "UI" },
      { name: "Candle Stick Chart UI", category: "UI" },
      { name: "SQL Editor UI", category: "UI" },
      { name: "Sankey Diagram UI", category: "UI" },

      { name: "React-Query", category: "Lib" },

      { name: "Upbit Open API", category: "API" }
    ],
    links: [
      { source: "User", target: "Browser", value: 100 },
      { source: "Browser", target: "Domain", value: 100 },
      { source: "Domain", target: "Next.js server", value: 100 },
      { source: "Next.js server", target: "Root page,layout", value: 100 },

      { source: "Root page,layout", target: "Route: /404", value: 10 },
      { source: "Root page,layout", target: "Route: /dashboard", value: 10 },
      { source: "Root page,layout", target: "Route: /flow", value: 10 },
      { source: "Root page,layout", target: "Route: /api/flow", value: 10 },
      { source: "Root page,layout", target: "App Bar UI", value: 10 },
      { source: "Root page,layout", target: "MUi Provider", value: 10 },
      { source: "Root page,layout", target: "React-query Provider", value: 10 },

      { source: "Route: /404", target: "Route: /dashboard", value: 10 },

      { source: "Route: /dashboard", target: "Candle Stick Chart UI", value: 10 },
      { source: "Route: /dashboard", target: "SQL Editor UI", value: 10 },

      { source: "Route: /flow", target: "Sankey Diagram UI", value: 10 },

      { source: "Sankey Diagram UI", target: "React-Query", value: 10 },
      { source: "Candle Stick Chart UI", target: "React-Query", value: 10 },
      { source: "React-Query", target: "Route: /api/flow", value: 10 },
      { source: "React-Query", target: "Upbit Open API", value: 10 }
    ]
  });
}

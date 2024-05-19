"use client";

import { blue, deepOrange, deepPurple, green, grey, yellow } from "@mui/material/colors";
import { scaleOrdinal } from "d3";
import { SankeyGraph, SankeyNodeMinimal, sankey, sankeyCenter, sankeyLinkHorizontal } from "d3-sankey";

const MARGIN_Y = 25;
const MARGIN_X = 30;
const width = 1280;
const height = 650;
const COLORS = [yellow[700], green[500], grey[400], grey[700], deepPurple[400], blue[300], deepOrange[500], blue[800]];

interface D3Node {
  name: string;
  category: string;
}

interface D3Link {
  source: string;
  target: string;
  value: number;
}

interface Props {
  data: {
    nodes: D3Node[];
    links: D3Link[];
  };
}

const SankeyDiagram: React.FC<Props> = ({ data }) => {
  const allGroups = Array.from(new Set(data.nodes.map((d) => d.category)));
  const colorScale = scaleOrdinal<string>().domain(allGroups).range(COLORS);

  const sankeyGenerator = sankey()
    .nodeWidth(20)
    .nodePadding(10)
    .extent([
      [MARGIN_X, MARGIN_Y],
      [width - MARGIN_X, height - MARGIN_Y]
    ])
    .nodeId((node) => (node as D3Node).name)
    .nodeAlign(sankeyCenter);

  const { nodes, links } = sankeyGenerator(data as SankeyGraph<{}, {}>);

  const allNodes = nodes.map((node: SankeyNodeMinimal<{}, {}>) => {
    return (
      <g key={node.index}>
        <rect
          height={(node.y1 as number) - (node.y0 as number)}
          width={sankeyGenerator.nodeWidth()}
          x={node.x0}
          y={node.y0}
          stroke={"black"}
          fill={colorScale((node as D3Node).category)}
          fillOpacity={1}
          rx={2}
        />
      </g>
    );
  });

  const allLinks = links.map((link, i) => {
    const linkGenerator = sankeyLinkHorizontal();
    const path = linkGenerator(link);

    return (
      <path
        key={i}
        d={path as string}
        stroke={colorScale((link.source as D3Node).category)}
        fill="none"
        strokeOpacity={0.3}
        strokeWidth={(link.width as number) / 9}
      />
    );
  });

  const allLabels = nodes.map((node, i) => {
    return (
      <text
        key={i}
        x={(node.x0 as number) - 3}
        y={((node.y1 as number) + (node.y0 as number)) / 2}
        dy="0.25rem"
        textAnchor="end"
        fontSize={10.5}
        fontWeight={600}
      >
        {(node as D3Node).name}
      </text>
    );
  });

  return (
    <svg width={width} height={height}>
      {allLinks}
      {allNodes}
      {allLabels}
    </svg>
  );
};

export default SankeyDiagram;

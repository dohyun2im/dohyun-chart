"use client";

import LoadingSkeleton from "@/components/LoadingSkeleton";
import SankeyDiagram from "@/components/SankeyDiagram";
import useFlows from "@/hooks/useFlows";
import { Card, CardContent } from "@mui/material";

const SankeyDiagramCard: React.FC = () => {
  const { data, isLoading } = useFlows();

  return (
    <Card>
      <CardContent sx={{ textAlign: "center", overflow: "auto" }}>
        <LoadingSkeleton className="sankey-diagram-skeleton" height={656.29} isLoading={isLoading}>
          <SankeyDiagram data={data ?? { nodes: [{ name: "", category: "" }], links: [] }} />
        </LoadingSkeleton>
      </CardContent>
    </Card>
  );
};

export default SankeyDiagramCard;

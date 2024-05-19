interface Node {
  name: string;
  category: string;
}

interface Link {
  source: string;
  target: string;
  value: number;
}

export interface Flow {
  nodes: Node[];
  links: Link[];
}

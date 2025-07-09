import { useCallback, useEffect, useState } from "react";
import ReactFlow, {
  Background,
  Controls,
  applyNodeChanges,
  MarkerType, // ✅ marker for arrowheads
} from "reactflow";
import type { Node, Edge, NodeChange } from "reactflow";
import "reactflow/dist/style.css";
import { nodeTypes } from "./nodeTypes";

interface RoadmapStep {
  title: string;
  description: string;
  content: string[];
  prerequisites?: string[];
}

interface RoadmapData {
  beginner: RoadmapStep[];
  intermediate: RoadmapStep[];
  advanced: RoadmapStep[];
}

interface Props {
  roadmap: RoadmapData;
}

export default function Roadmap({ roadmap }: Props) {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [edges, setEdges] = useState<Edge[]>([]);



useEffect(() => {
  const levels = ["beginner", "intermediate", "advanced"] as const;
  const newNodes: Node[] = [];
  const newEdges: Edge[] = [];
  const titleToId = new Map<string, string>();


  let id = 1;

  const isMobile = window.innerWidth < 768; 

  const containerWidth = window.innerWidth;
  // const containerHeight = window.innerHeight;

  const colSpacing = isMobile ? 0 : containerWidth / (levels.length + 1);
  const rowSpacing = 400;

  levels.forEach((level, colIdx) => {
    const steps = roadmap[level] || [];

    const headingX = isMobile ? containerWidth / 2 : (colIdx + 1) * colSpacing;
    const headingY = isMobile ? colIdx * 400 : -200;

    const headingId = `heading-${level}`;
    newNodes.push({
      id: headingId,
      type: "heading",
      data: { label: level.toUpperCase() },
      position: { x: headingX, y: headingY },
    });

    let prevStepId: string | null = null;

    steps.forEach((step, rowIdx) => {
      const nodeId = id.toString();

      const nodeX = isMobile ? containerWidth / 2 : (colIdx + 1) * colSpacing;
      const nodeY = isMobile
        ? headingY + (rowIdx + 1) * rowSpacing
        : rowIdx * rowSpacing;

      newNodes.push({
        id: nodeId,
        type: "step",
        data: {
          number: rowIdx + 1,
          label: step.title,
          description: step.description,
          content: step.content,
          prerequisites: step.prerequisites || [],
        },
        position: { x: nodeX, y: nodeY },
      });

      titleToId.set(step.title, nodeId);

      if (prevStepId) {
        newEdges.push({
          id: `auto-${prevStepId}-${nodeId}`,
          source: prevStepId,
          target: nodeId,
          type: "smoothstep",
          animated: true,
          markerEnd: { type: MarkerType.ArrowClosed },
        });
      } else {
        newEdges.push({
          id: `heading-${headingId}-${nodeId}`,
          source: headingId,
          target: nodeId,
          type: "smoothstep",
          animated: true,
          markerEnd: { type: MarkerType.ArrowClosed },
        });
      }

      prevStepId = nodeId;
      id++;
    });
  });

  // prerequisites stay same
  newNodes.forEach((node) => {
    const prerequisites = node.data.prerequisites as string[] | undefined;
    prerequisites?.forEach((prereqTitle) => {
      const cleanTitle = prereqTitle.replace(/^Step \d+:\s*/, "").trim();
      const sourceId = titleToId.get(cleanTitle);
      if (sourceId) {
        newEdges.push({
          id: `prereq-${sourceId}-${node.id}`,
          source: sourceId,
          target: node.id,
          type: "smoothstep",
          animated: true,
          markerEnd: { type: MarkerType.ArrowClosed },
        });
      }
    });
  });

  setNodes(newNodes);
  setEdges(newEdges);
}, [roadmap]);


  const onNodesChange = useCallback(
    (changes: NodeChange[]) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        fitView
        onNodesChange={onNodesChange}
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}

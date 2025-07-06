import { Handle, Position } from "reactflow";
import type { NodeProps } from "reactflow";

export default function StepNode({ data }: NodeProps) {
  return (
    <div className="bg-white border border-gray-300 rounded p-4 shadow text-left w-60">
      <h3 className="font-bold text-base mb-1">{data.label}</h3>
      {data.description && (
        <p className="text-xs mb-1 text-gray-600">{data.description}</p>
      )}
      {data.content?.length > 0 && (
        <ul className="list-disc pl-4 text-xs text-gray-500">
          {data.content.map((item: string, idx: number) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      )}
      <Handle type="source" position={Position.Right} />
      <Handle type="target" position={Position.Left} />
    </div>
  );
}

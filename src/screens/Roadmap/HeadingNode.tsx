import { Handle, Position } from "reactflow";
import type { NodeProps } from "reactflow";

export default function HeadingNode({ data }: NodeProps) {
  return (
    <div className="bg-gray-800 text-white font-bold border-2 border-neutral-400 border-b-4 border-r-4 text-xl px-4 py-2 rounded shadow">
      {data.label}
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}

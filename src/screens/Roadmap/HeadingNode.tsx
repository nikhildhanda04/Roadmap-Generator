import { Handle, Position } from "reactflow";
import type { NodeProps } from "reactflow";

export default function HeadingNode({ data }: NodeProps) {
  return (
    <div className="bg-neutral-800 text-white font-extrabold font-outfit tracking-tight border-2 border-neutral-800 text-2xl px-6 py-3 rounded-2xl shadow-[6px_6px_0px_0px_rgba(31,41,55,1)] min-w-[200px] text-center">
      {data.label}
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}

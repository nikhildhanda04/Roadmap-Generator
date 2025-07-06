
import type { NodeProps } from "reactflow";


export default function HeadingNode({ data }: NodeProps) {
  return (
    <div className="bg-gray-800 text-white font-bold text-xl px-4 py-2 rounded shadow">
      {data.label}
    </div>
  );
}

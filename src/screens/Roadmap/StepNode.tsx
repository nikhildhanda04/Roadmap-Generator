import { Handle, Position, } from "reactflow";
import type { NodeProps } from "reactflow";

export default function StepNode({ data }: NodeProps) {
  return (
    <div className="bg-white border-neutral-800 border-2 rounded-2xl p-5 shadow-[6px_6px_0px_0px_rgba(31,41,55,1)] text-left w-72 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(31,41,55,1)]">
      <h3 className="font-bold text-lg mb-2 font-outfit text-neutral-800">
        {data.number}. {data.label}
      </h3>
      {data.description && (
        <p className="text-xs mb-1 text-gray-600">{data.description}</p>
      )}
      {data.content?.length > 0 && (
        <ul className="list-disc pl-4 text-sm text-neutral-600 font-inter space-y-1">
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

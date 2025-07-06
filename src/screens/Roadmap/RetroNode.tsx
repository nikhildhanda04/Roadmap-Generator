// import { Handle, Position } from "reactflow";
// import type { NodeProps } from "reactflow";
// import "reactflow/dist/style.css";
// import "./RetroNode.css";

// export default function RetroNode({ data }: NodeProps ) {
//   return (
//     <div className="retro-node relative bg-white text-black px-4 py-2 font-retro border border-gray-300 rounded shadow-md">
//       <p className="font-bold mb-1">{data.label}</p>
//       {data.description && (
//         <p className="text-xs mb-1">{data.description}</p>
//       )}
//       {data.content && data.content.length > 0 && (
//         <ul className="text-xs list-disc ml-4 mb-1">
//           {data.content.map((item: string, idx: number) => (
//             <li key={idx}>{item}</li>
//           ))}
//         </ul>
//       )}
//       {data.prerequisites && data.prerequisites.length > 0 && (
//         <p className="text-[10px] italic">Prerequisites: {data.prerequisites.join(", ")}</p>
//       )}
//       <Handle type="source" position={Position.Right} />
//       <Handle type="target" position={Position.Left} />
//     </div>
//   );
// }

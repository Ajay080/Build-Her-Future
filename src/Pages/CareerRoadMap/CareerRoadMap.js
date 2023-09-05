import React, { useCallback } from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from 'reactflow';

import 'reactflow/dist/style.css';
import initialNodes from './nodes.js';
import initialEdges from './edges.js';

// const initialNodes = [
//     {
//         id: '1',
//         data: { label: 'Node 1' },
//         position: { x: 150, y: 0 },
//       },
//       {
//         id: '2',
//         data: { label: 'Node 2' },
//         position: { x: 0, y: 150 },
//       },
//       {
//         id: '3',
//         data: { label: 'Node 3' },
//         position: { x: 300, y: 150 },
//       },
// ];
// const initialEdges = [  { id: 'e1-2', source: '1', target: '2' },
// { id: 'e1-3', source: '1', target: '3' },];

export default function CareerRoadMap() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

  return (
    <div style={{ paddingTop:'2vh',width: '100vw', height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      >
        <Controls />
        <MiniMap />
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}
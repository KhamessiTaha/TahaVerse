import { useGLTF, Sparkles } from '@react-three/drei';
import { useRef } from 'react';

export function Cat({ onClick }) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/textures/cat.glb');
  
  return (
    <group ref={group} onClick={onClick} dispose={null} scale={0.5} rotation={[-Math.PI/2, 0, Math.PI]}>
      {/* Render all the cat object parts */}
      {Object.keys(nodes).filter(key => key.startsWith('Object_')).map((nodeKey) => {
        const node = nodes[nodeKey];
        if (!node.geometry) return null;
        
        return (
          <mesh
            key={nodeKey}
            geometry={node.geometry}
            material={node.material}
          />
        );
      })}
      
      <Sparkles
        count={20}
        scale={5}
        size={2}
        speed={0.1}
        color="#00ffff"
      />
    </group>
  );
}
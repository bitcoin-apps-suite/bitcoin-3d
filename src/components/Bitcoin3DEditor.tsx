'use client';

export default function Bitcoin3DEditor() {
  return (
    <iframe
      src="/chili3d/index.html"
      style={{
        width: '100%',
        height: '100%',
        border: 'none',
        position: 'absolute',
        top: 0,
        left: 0,
        background: '#2d0a1f'
      }}
      title="Bitcoin 3D - Professional 3D Modeling & Design"
      allowFullScreen
    />
  );
}
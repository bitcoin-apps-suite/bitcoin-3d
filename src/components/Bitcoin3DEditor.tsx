'use client';
import { useEffect, useRef } from 'react';

export default function Bitcoin3DEditor() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      // Load the self-hosted CHILI3D application
      containerRef.current.innerHTML = `
        <iframe
          src="/chili3d/index.html"
          width="100%"
          height="100%"
          style="border: none; position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
          title="Bitcoin 3D - Professional 3D Modeling & Design"
          allowfullscreen
        ></iframe>
      `;
      
      // Apply hot pink theme styling to the container
      const iframe = containerRef.current.querySelector('iframe') as HTMLIFrameElement;
      if (iframe) {
        iframe.onload = () => {
          try {
            // Attempt to inject Bitcoin 3D branding styles
            const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
            if (iframeDoc) {
              const style = iframeDoc.createElement('style');
              style.textContent = `
                /* Bitcoin 3D Hot Pink Theme */
                :root {
                  --primary-color: #ff1493 !important;
                  --secondary-color: #ff69b4 !important;
                  --accent-color: #ff1493 !important;
                  --background-color: #2d0a1f !important;
                }
                
                /* Override any existing color schemes */
                .toolbar, .panel, .menu, .ribbon {
                  background-color: #2d0a1f !important;
                  border-color: #ff1493 !important;
                }
                
                .button, .tab, .menu-item {
                  color: #ff69b4 !important;
                  border-color: #ff1493 !important;
                }
                
                .button:hover, .tab:hover, .menu-item:hover {
                  background-color: #ff1493 !important;
                  color: #ffffff !important;
                }
                
                /* Update any text that says CHILI3D to Bitcoin 3D */
                .logo-text, .app-title, .title {
                  color: #ff1493 !important;
                }
              `;
              iframeDoc.head.appendChild(style);
              
              // Replace any CHILI3D text with Bitcoin 3D
              const textNodes = iframeDoc.evaluate(
                "//text()[contains(., 'CHILI3D') or contains(., 'Chili3D')]",
                iframeDoc,
                null,
                XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
                null
              );
              
              for (let i = 0; i < textNodes.snapshotLength; i++) {
                const node = textNodes.snapshotItem(i);
                if (node && node.textContent) {
                  node.textContent = node.textContent
                    .replace(/CHILI3D/g, 'Bitcoin 3D')
                    .replace(/Chili3D/g, 'Bitcoin 3D');
                }
              }
            }
          } catch (error) {
            console.log('Cross-origin restrictions prevent theme injection, but self-hosted CHILI3D is running');
          }
        };
      }
    }
  }, []);

  return (
    <div 
      ref={containerRef}
      style={{
        width: '100%',
        height: '100%',
        background: '#2d0a1f',
        position: 'relative'
      }}
    />
  );
}
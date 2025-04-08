// components/GridBackground.tsx
export const GridBackground = () => {
    return (
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-white bg-opacity-90">
          <div className="absolute inset-0" 
               style={{
                 backgroundImage: `linear-gradient(#4444 1px, transparent 1px),
                                 linear-gradient(to right, #4444 1px, transparent 1px)`,
                 backgroundSize: '50px 50px'
               }}>
          </div>
        </div>
      </div>
    );
  };
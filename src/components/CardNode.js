import React from 'react';

const CardNode = ({ nodeDatum, toggleNode }) => {
  const hasChildren = nodeDatum.children?.length;

  return (
    <foreignObject width="200" height="120" x="-100" y="-10">
      <div
        className={`card ${hasChildren ? 'card--has-children' : ''}`}
      >
        <h2>{nodeDatum.name}</h2>
        <p>Org.nr: {nodeDatum.attributes?.orgNumber}</p>
        <input type="text" placeholder="Type here..." />
        {hasChildren ? (
          <button className="toggle" type="button" onClick={toggleNode}>
            {nodeDatum.__rd3t.collapsed ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 8l6 6H6z" /> {/* Aşağı ok simgesi */}
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 16l-6-6h12z" /> {/* Yukarı ok simgesi */}
              </svg>
            )}
          </button>
        ) : null}
      </div>
    </foreignObject>
  );
};

export default CardNode;

import React from "react";
import Tree from "react-d3-tree";
import CardNode from "./components/CardNode";
import orgChartJson from "./data/org-chart.json";
import { useCenteredTree } from "./helpers";
import "./styles.css";

const containerStyles = {
  width: "100vw",
  height: "100vh"
};

export default function App() {
  const [dimensions, translate, containerRef] = useCenteredTree();

  return (
    <div style={containerStyles} ref={containerRef}>
      <Tree
        pathFunc="elbow"
        separation={{ siblings: 1.55, nonSiblings: 2 }}
        data={orgChartJson}
        dimensions={dimensions}
        shouldCollapseNeighborNodes="true"
        translate={translate}
        enableLegacyTransitions="true"
        useCenteredTree="true"
        centeringTransitionDuration={1000}
        renderCustomNodeElement={(rd3tProps) => (
          <CardNode {...rd3tProps} />
        )}
        orientation="vertical"
      />
    </div>
  );
}

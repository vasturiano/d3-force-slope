export default function(links = [], numAngles = 4) {
  let nodes = [],
    id = (node => node.index),
    strength = 1,
    considerAlpha = false;

  function force(alpha) {
    const k = strength * (considerAlpha ? alpha : 1);

    links.forEach(link => {
      const a = link.source;
      const b = link.target;

      const mean = { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 };
      const d = { x: b.x - a.x, y: b.y - a.y };

      const angle = Math.atan2(d.y, d.x);
      const angleStep = Math.PI / numAngles;
      const newAngle = Math.round(angle / angleStep) * angleStep;

      const len = Math.sqrt(d.x**2 + d.y**2);
      const delta = { x: Math.cos(newAngle) * len / 2, y: Math.sin(newAngle) * len / 2 };

      const aTgt = { x: mean.x - delta.x, y: mean.y - delta.y };
      const bTgt = { x: mean.x + delta.x, y: mean.y + delta.y };

      a.vx += (aTgt.x - a.x) * k;
      a.vy += (aTgt.y - a.y) * k;
      b.vx += (bTgt.x - b.x) * k;
      b.vy += (bTgt.y - b.y) * k;
    });
  }

  function initialize() {
    const nodesById = new Map(nodes.map((d, i) => [id(d, i, nodes), d]));
    links.forEach(link => {
      if (typeof link.source !== "object") link.source = nodesById.get(link.source) || link.source;
      if (typeof link.target !== "object") link.target = nodesById.get(link.target) || link.target;
    });
  }

  force.initialize = function(initNodes) {
    nodes = initNodes;
    initialize();
  };

  force.links = function(_) {
    return arguments.length ? (links = _, initialize(), force) : links;
  };

  force.id = function(_) {
    return arguments.length ? (id = _, force) : id;
  };

  force.numAngles = function(_) {
    return arguments.length ? (numAngles = _, force) : numAngles;
  };

  force.strength = function(_) {
    return arguments.length ? (strength = _, force) : strength;
  };

  force.considerAlpha = function(_) {
    return arguments.length ? (considerAlpha = _, force) : considerAlpha;
  };

  return force;
}

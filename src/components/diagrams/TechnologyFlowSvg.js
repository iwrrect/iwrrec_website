/** Static SVG process flow diagram — no animation (government site). */
export default function TechnologyFlowSvg({ title, steps, branches }) {
  const boxWidth = 140;
  const boxHeight = 52;
  const gap = 36;
  const branchGap = 28;
  const padding = 24;
  const arrowW = 28;

  const mainWidth =
    padding * 2 + steps.length * boxWidth + (steps.length - 1) * (gap + arrowW);
  const branchRows = branches?.length ?? 0;
  const branchBlockHeight = branchRows > 0 ? branchRows * (boxHeight + branchGap) + 40 : 0;
  const totalHeight = padding * 2 + boxHeight + branchBlockHeight + (branchRows > 0 ? 24 : 0);

  const mainY = padding;
  const branchStartX = padding + (steps.length - 1) * (boxWidth + gap + arrowW);

  return (
    <figure className="gov-card overflow-x-auto p-4 md:p-6">
      <figcaption className="mb-4 text-sm font-bold text-navy border-b border-line pb-3">
        {title}
      </figcaption>
      <svg
        viewBox={`0 0 ${mainWidth} ${totalHeight}`}
        className="min-w-[600px] w-full h-auto"
        role="img"
        aria-label={`Process flow: ${steps.join(" to ")}`}
      >
        {/* Main horizontal flow */}
        {steps.map((step, i) => {
          const x = padding + i * (boxWidth + gap + arrowW);
          return (
            <g key={step}>
              <rect
                x={x}
                y={mainY}
                width={boxWidth}
                height={boxHeight}
                fill="#f1f3f6"
                stroke="#1a4480"
                strokeWidth="1.5"
                rx="2"
              />
              <text
                x={x + boxWidth / 2}
                y={mainY + boxHeight / 2}
                textAnchor="middle"
                dominantBaseline="middle"
                fill="#162e51"
                fontSize="11"
                fontWeight="600"
                fontFamily="Arial, Helvetica, sans-serif"
              >
                {step.length > 18 ? step.slice(0, 16) + "…" : step}
              </text>
              {i < steps.length - 1 && (
                <g>
                  <line
                    x1={x + boxWidth + 4}
                    y1={mainY + boxHeight / 2}
                    x2={x + boxWidth + gap + arrowW - 8}
                    y2={mainY + boxHeight / 2}
                    stroke="#c69214"
                    strokeWidth="2"
                  />
                  <polygon
                    points={`${x + boxWidth + gap + arrowW - 8},${mainY + boxHeight / 2 - 5} ${x + boxWidth + gap + arrowW - 8},${mainY + boxHeight / 2 + 5} ${x + boxWidth + gap + arrowW},${mainY + boxHeight / 2}`}
                    fill="#c69214"
                  />
                </g>
              )}
            </g>
          );
        })}

        {/* Branch pathways from last main step */}
        {branches?.map((branch, i) => {
          const bx = branchStartX;
          const by = mainY + boxHeight + 24 + i * (boxHeight + branchGap);
          const lastStepCenterX = branchStartX + boxWidth / 2;
          return (
            <g key={branch}>
              <line
                x1={lastStepCenterX}
                y1={mainY + boxHeight}
                x2={lastStepCenterX}
                y2={by - 4}
                stroke="#565c65"
                strokeWidth="1.5"
                strokeDasharray="4 3"
              />
              <line
                x1={lastStepCenterX}
                y1={by + boxHeight / 2}
                x2={bx - 4}
                y2={by + boxHeight / 2}
                stroke="#565c65"
                strokeWidth="1.5"
              />
              <polygon
                points={`${bx - 4},${by + boxHeight / 2 - 4} ${bx - 4},${by + boxHeight / 2 + 4} ${bx},${by + boxHeight / 2}`}
                fill="#565c65"
              />
              <rect
                x={bx}
                y={by}
                width={boxWidth + 20}
                height={boxHeight}
                fill="#ffffff"
                stroke="#c69214"
                strokeWidth="1.5"
                rx="2"
              />
              <text
                x={bx + (boxWidth + 20) / 2}
                y={by + boxHeight / 2}
                textAnchor="middle"
                dominantBaseline="middle"
                fill="#162e51"
                fontSize="11"
                fontWeight="600"
                fontFamily="Arial, Helvetica, sans-serif"
              >
                {branch}
              </text>
            </g>
          );
        })}
      </svg>
    </figure>
  );
}

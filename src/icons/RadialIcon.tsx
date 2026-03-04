export default function RadialIcon() {
    const angles = [0, 45, 90, 135, 180, 225, 270, 315, 22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5];

    return (
        <svg
            viewBox="0 0 200 200"
            width={160}
            height={160}
            stroke="#111"
            strokeWidth={0.9}
            fill="none"
            aria-hidden="true"
        >
            <g transform="translate(100,100)">
                {angles.map((a, i) => {
                    const r = (a * Math.PI) / 180;
                    return (
                        <line
                            key={i}
                            x1={Math.sin(r) * 16}
                            y1={-Math.cos(r) * 16}
                            x2={Math.sin(r) * 78}
                            y2={-Math.cos(r) * 78}
                        />
                    );
                })}
                <circle cx="0" cy="0" r="5" fill="#111" stroke="none" />
                <circle cx="0" cy="0" r="14" strokeWidth="0.7" />
                <circle cx="0" cy="0" r="40" strokeWidth="0.4" strokeDasharray="3 4" />
            </g>
        </svg>
    );
}

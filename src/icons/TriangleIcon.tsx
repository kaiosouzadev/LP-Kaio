export default function TriangleIcon() {
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
            <polygon points="100,22 178,150 22,150" />
            <polygon points="100,56 150,142 50,142" />
            <polygon points="100,90 128,130 72,130" />
            <line x1="100" y1="22" x2="100" y2="56" />
            <line x1="178" y1="150" x2="150" y2="142" />
            <line x1="22" y1="150" x2="50" y2="142" />
            <line x1="100" y1="56" x2="100" y2="90" />
            <line x1="150" y1="142" x2="128" y2="130" />
            <line x1="50" y1="142" x2="72" y2="130" />
        </svg>
    );
}

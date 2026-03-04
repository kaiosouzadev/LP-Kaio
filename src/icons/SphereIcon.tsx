export default function SphereIcon() {
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
            <circle cx="100" cy="100" r="72" />
            <ellipse cx="100" cy="100" rx="72" ry="24" />
            <ellipse cx="100" cy="100" rx="72" ry="50" />
            <ellipse cx="100" cy="100" rx="24" ry="72" />
            <ellipse cx="100" cy="100" rx="50" ry="72" />
            <line x1="100" y1="28" x2="100" y2="172" />
            <line x1="28" y1="100" x2="172" y2="100" />
        </svg>
    );
}

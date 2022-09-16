export default function ImageMask() {
  return (
    <svg width="600" height="400">
      <mask id="svgmask1">
        <circle fill="#ffffff" cx="75" cy="75" r="75"></circle>
        <circle fill="#ffffff" cx="80" cy="260" r="75"></circle>
        <circle fill="#ffffff" cx="270" cy="160" r="75"></circle>
      </mask>
    </svg>
  );
}

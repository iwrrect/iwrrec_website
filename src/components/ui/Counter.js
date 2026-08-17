export default function Counter({ value, suffix = "", decimals = 0, className }) {
  const formatted =
    decimals > 0 ? Number(value).toFixed(decimals) : String(value);

  return (
    <span className={className} style={{ fontFamily: "var(--font-numeric)" }}>
      {formatted}
      {suffix}
    </span>
  );
}

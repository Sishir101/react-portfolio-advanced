function TechBadge({ icon, name, className }) {
  return (
    <div
      className={`flex items-center gap-2 rounded-full
      border border-cyan-400/30
      bg-white/10
      backdrop-blur-xl
      px-4 py-2
      text-white
      shadow-lg shadow-cyan-500/20
      whitespace-nowrap
      ${className}`}
    >
      <span className="text-xl text-cyan-400">{icon}</span>
      <span className="font-medium">{name}</span>
    </div>
  );
}

export default TechBadge;

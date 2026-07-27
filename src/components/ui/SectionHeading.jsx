function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-12 sm:mb-14 md:mb-16 text-center">
      {eyebrow && (
        <p className="mb-2 sm:mb-3 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-slate-400 leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500" />
    </div>
  );
}

export default SectionHeading;

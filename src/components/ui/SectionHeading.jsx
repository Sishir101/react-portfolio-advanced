function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-10 sm:mb-14 md:mb-16 text-center">
      {eyebrow && (
        <p className="mb-2 text-[11px] sm:text-sm font-semibold uppercase tracking-[0.18em] sm:tracking-[0.2em] text-cyan-400">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-3 sm:mt-4 max-w-2xl text-sm sm:text-lg text-slate-400 leading-7 sm:leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className="mx-auto mt-5 sm:mt-6 h-1 w-16 sm:w-24 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500" />
    </div>
  );
}

export default SectionHeading;

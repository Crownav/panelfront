export function SectionHeading({
  title,
  subtitle,
  className = "",
}: {
  title: React.ReactNode
  subtitle?: React.ReactNode
  className?: string
}) {
  return (
    <div className={`mx-auto max-w-3xl text-center ${className}`}>
      <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
        <span className="hx-gradient-text">{title}</span>
      </h2>
      {subtitle && (
        <p className="mt-5 text-lg leading-relaxed text-white/55">{subtitle}</p>
      )}
    </div>
  )
}

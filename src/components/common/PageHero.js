import Breadcrumb from "@/components/common/Breadcrumb";

export default function PageHero({ eyebrow, title, description, breadcrumb, children, static: isStatic = false }) {
  const content = (
    <>
      <Breadcrumb items={breadcrumb} />
      {eyebrow && (
        <p className="mt-5 text-sm font-semibold text-secondary">{eyebrow}</p>
      )}
      <h1 className="mt-2 max-w-4xl text-3xl md:text-4xl font-bold leading-tight text-navy gov-accent-bar">
        {title}
      </h1>
      {description && (
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted pl-5">
          {description}
        </p>
      )}
    </>
  );

  return (
    <section className="relative bg-section pt-8 pb-8 md:pt-10 md:pb-10 border-b border-line">
      <div className="absolute inset-x-0 top-0 h-1 bg-gov-gold" aria-hidden="true" />
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {content}
        {children}
      </div>
    </section>
  );
}

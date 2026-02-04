'use client'

const IntroSection = () => {
  return (
    <section className="w-full border-t border-slate-800 bg-black px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="space-y-12">
          {/* Title */}
          <div className="text-center">
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl ml-70">
              A structured approach to ensure your
              <br />
              problems are understood, solved, and
              <br />
              delivered with clear outcomes
            </h2>
          </div>

          {/* Divider */}
          <div className="h-px w-full bg-black" />

          {/* Grid of Services */}
          {/* <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="space-y-4 border-l border-slate-800 pl-6">
                <div className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                  JUST CLARITY
                </div>
                <h3 className="text-xl font-bold text-white">Understand the Problem</h3>
                <p className="leading-relaxed text-gray-400">
                  Deep discovery sessions to understand your business context, technical constraints, and objectives. No assumptions—just clarity.
                </p>
              </div>
            ))}
          </div> */}
          <div className="ml-auto max-w-3xl">
  <div className="grid gap-10 sm:grid-cols-2">
    {[1, 2, 3, 4].map((item) => (
      <div key={item} className="space-y-4">
        {/* top line */}
        <div className="h-px w-full bg-slate-700/50" />

        <div className="space-y-3">
          <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-500">
            JUST CLARITY
          </div>

          <h3 className="text-lg font-semibold text-white">
            Understand the Problem
          </h3>

          <p className="max-w-sm text-xl leading-relaxed text-gray-400">
            Deep discovery sessions to understand your business context,
            technical constraints, and objectives. No assumptions—just clarity.
          </p>
        </div>
      </div>
    ))}
  </div>
</div>

        </div>
      </div>
    </section>
  )
}

export default IntroSection

'use client'

import { Button } from '@mantine/core'
import { ArrowRight } from 'lucide-react'

const CallToAction = () => {
  return (
    <section className="w-full border-t border-slate-800 bg-black px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-8 rounded-lg border border-slate-800 bg-black p-8 sm:flex-row sm:p-12">
          <div>
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
              Let's Connect!
            </h2>
          </div>
          <button className="group flex items-center gap-3 rounded-lg border border-slate-700 bg-slate-800 px-8 py-4 font-semibold text-white transition-all hover:border-slate-600 hover:bg-slate-700">
            <span>Hire Now!</span>
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default CallToAction

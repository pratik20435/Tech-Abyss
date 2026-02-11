'use client'

export function Header() {
  const navItems = ['Overview', 'Expertise', 'Works', 'Process', 'Profile', 'Insights']

  return (
    <header className="fixed top-0 w-full z-50 border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
        <h1 className="text-2xl font-bricolage tracking-tight text-foreground">TECH ABYSS</h1>
        
        <nav className="flex items-center gap-12">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-foreground hover:text-accent transition-colors text-sm font-medium"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

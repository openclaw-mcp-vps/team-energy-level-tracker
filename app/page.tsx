export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <div className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-sm font-medium px-3 py-1 rounded-full mb-6">
          For Team Managers & HR
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Track Team Energy &amp;<br />Catch Burnout Early
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Daily 30-second check-ins reveal energy trends, workload satisfaction, and burnout signals before they become problems. Manager dashboards and alerts included.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors"
        >
          Start for $5/mo
        </a>
        <div className="mt-8 grid grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-2xl font-bold text-[#58a6ff]">30s</div>
            <div className="text-sm text-[#8b949e]">Daily check-in</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-[#58a6ff]">Real-time</div>
            <div className="text-sm text-[#8b949e]">Manager alerts</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-[#58a6ff]">Trends</div>
            <div className="text-sm text-[#8b949e]">Energy analytics</div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="border border-[#58a6ff] rounded-xl p-8 max-w-sm mx-auto bg-[#161b22]">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-wide mb-2">Team Plan</div>
          <div className="text-4xl font-bold text-white mb-1">$5<span className="text-lg font-normal text-[#8b949e]">/mo</span></div>
          <div className="text-[#8b949e] text-sm mb-6">Per team, unlimited members</div>
          <ul className="space-y-3 mb-8">
            {[
              'Daily energy check-ins',
              'Manager dashboard & analytics',
              'Burnout risk alerts',
              'Time-series trend reports',
              'Slack & email notifications',
              'Unlimited team members',
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block text-center bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          <div className="border border-[#30363d] rounded-lg p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">How does the daily check-in work?</h3>
            <p className="text-[#8b949e] text-sm">Team members receive a short daily prompt asking about their energy level, workload, and mood. It takes under 30 seconds and responses are anonymous by default.</p>
          </div>
          <div className="border border-[#30363d] rounded-lg p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">When do managers get alerted?</h3>
            <p className="text-[#8b949e] text-sm">Managers receive alerts when a team member's energy score drops below a configurable threshold for two or more consecutive days, enabling early intervention.</p>
          </div>
          <div className="border border-[#30363d] rounded-lg p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">Is the data private and secure?</h3>
            <p className="text-[#8b949e] text-sm">Yes. All data is encrypted at rest and in transit. Individual responses can be anonymized so managers see team trends without identifying specific team members.</p>
          </div>
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-sm border-t border-[#30363d] pt-8">
        <p>&copy; {new Date().getFullYear()} Team Energy Tracker. All rights reserved.</p>
      </footer>
    </main>
  )
}

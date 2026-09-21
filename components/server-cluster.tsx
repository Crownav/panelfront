import { Lock } from "lucide-react"

function Rack({ accent }: { accent: string }) {
  return (
    <div
      className="relative flex-1 rounded-2xl border p-4"
      style={{
        borderColor: accent,
        boxShadow: `0 0 40px -18px ${accent}`,
        background: "rgba(12,12,18,0.7)",
      }}
    >
      <div className="mb-3 flex gap-1.5">
        <span className="h-2 w-2 rounded-full bg-[var(--hx-pink)]" />
        <span className="h-2 w-2 rounded-full bg-[var(--hx-cyan)]" />
        <span className="h-2 w-2 rounded-full bg-yellow-400" />
      </div>
      <div className="space-y-2.5">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className="h-6 rounded-md border"
            style={{ borderColor: `${accent}66` }}
          />
        ))}
      </div>
    </div>
  )
}

export function ServerCluster() {
  return (
    <div className="hx-glow-cyan relative rounded-3xl border border-white/10 bg-gradient-to-b from-[#0c0c14] to-[#0a0a10] p-6 sm:p-10">
      <div className="mb-6 text-center text-xs font-semibold tracking-[0.3em] text-white/40">
        CORE CLUSTER
      </div>
      <div className="flex items-stretch gap-4 sm:gap-6">
        <Rack accent="#ff2e97" />
        <div
          className="relative flex-1 rounded-2xl border p-4"
          style={{
            borderColor: "#a855f7",
            boxShadow: "0 0 50px -14px #a855f7",
            background: "rgba(12,12,18,0.7)",
          }}
        >
          <div className="flex h-full flex-col items-center justify-center py-6">
            <div className="hx-float grid h-24 w-20 place-items-center rounded-xl bg-gradient-to-b from-[#141426] to-[#0d0d18] shadow-[0_0_30px_-8px_#22d3ee]">
              <Lock className="h-9 w-9 text-[var(--hx-cyan)]" />
            </div>
          </div>
        </div>
        <Rack accent="#22d3ee" />
      </div>
    </div>
  )
}

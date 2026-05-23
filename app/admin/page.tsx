import { BarChart3, ShieldCheck, Users2 } from "lucide-react";

export const metadata = {
  title: "Admin Dashboard | AWEnvi Solutions",
  description: "Admin dashboard for AWEnvi Solutions with metrics, project progress, and lead overview.",
};

const metrics = [
  { label: "Active Projects", value: "24", icon: BarChart3 },
  { label: "New Leads", value: "18", icon: Users2 },
  { label: "Compliance Reviews", value: "8", icon: ShieldCheck },
];

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="rounded-[2rem] border border-slate-800 bg-slate-900/90 p-10 shadow-2xl">
          <p className="text-sm uppercase tracking-[0.32em] text-green-400">Admin Dashboard</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">AWEnvi Manager</h1>
          <p className="mt-4 max-w-3xl text-slate-300 leading-8">
            Monitor active environmental projects, leads, compliance status, and team updates from one dashboard.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {metrics.map((metric) => {
            const Icon = metric.icon;
            return (
              <div key={metric.label} className="rounded-[2rem] border border-slate-800 bg-slate-900/95 p-8 shadow-xl">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-green-600/10 text-green-400">
                  <Icon size={24} />
                </div>
                <p className="mt-6 text-3xl font-bold text-white">{metric.value}</p>
                <p className="mt-2 text-slate-400">{metric.label}</p>
              </div>
            );
          })}
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[2rem] border border-slate-800 bg-slate-900/95 p-8 shadow-xl">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold">Project Progress</h2>
                <p className="mt-2 text-slate-400">Track current milestone statuses across the portfolio.</p>
              </div>
            </div>
            <div className="mt-8 space-y-6">
              {[
                { title: "STP Installation", progress: 92 },
                { title: "ETP Commissioning", progress: 76 },
                { title: "EPR Registration", progress: 88 },
              ].map((project) => (
                <div key={project.title} className="rounded-3xl bg-slate-950/80 p-6">
                  <div className="flex items-center justify-between gap-4">
                    <p className="font-semibold text-white">{project.title}</p>
                    <p className="text-sm text-slate-400">{project.progress}%</p>
                  </div>
                  <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-800">
                    <div className="h-full rounded-full bg-green-500" style={{ width: `${project.progress}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-800 bg-slate-900/95 p-8 shadow-xl">
            <h2 className="text-2xl font-bold">Recent Lead Activity</h2>
            <p className="mt-2 text-slate-400">Latest inbound requests and follow-up actions.</p>
            <div className="mt-8 space-y-4">
              {[
                { client: "Solar Plant Ltd.", type: "ETP inquiry", status: "Follow up" },
                { client: "Green Homes", type: "EPR registration", status: "New" },
                { client: "Urban Waste Co.", type: "PCB approval", status: "Scheduled" },
              ].map((lead) => (
                <div key={lead.client} className="rounded-3xl bg-slate-950/80 p-5">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="font-semibold text-white">{lead.client}</p>
                      <p className="mt-1 text-slate-400 text-sm">{lead.type}</p>
                    </div>
                    <span className="rounded-full bg-green-600/10 px-3 py-1 text-xs font-semibold text-green-300">
                      {lead.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

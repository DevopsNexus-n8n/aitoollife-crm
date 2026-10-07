import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { Badge, appointmentStatusTone, followUpStateTone } from "@/components/badge";
import { appointments, clinic, followUps, upcomingAppointments, weeklyLeads } from "@/lib/sample-data";

export const metadata: Metadata = { title: "Dashboard" };

export default function DashboardPage() {
  const activeToday = appointments.filter((a) => a.status !== "Cancelled");
  const waiting = appointments.filter((a) => a.status === "Waiting").length;
  const overdue = followUps.filter((f) => f.state === "Overdue").length;
  const dueToday = followUps.filter((f) => f.state === "Due today").length;
  const newLeadsThisWeek = weeklyLeads.reduce((sum, d) => sum + d.count, 0);
  const tomorrow = upcomingAppointments.filter((a) => a.day.startsWith("Wed")).length;
  const maxLeads = Math.max(...weeklyLeads.map((d) => d.count));

  const queue = [...followUps]
    .filter((f) => f.state !== "Upcoming")
    .sort((a, b) => (a.state === b.state ? 0 : a.state === "Overdue" ? -1 : 1));

  return (
    <>
      <PageHeader title="Today" description={clinic.today} />

      <dl className="mb-8 grid grid-cols-2 gap-y-5 border-y border-line py-5 lg:grid-cols-4">
        <Stat label="Appointments today" value={String(activeToday.length)} note={`${waiting} waiting now`} />
        <Stat label="New leads this week" value={String(newLeadsThisWeek)} note="Most on Saturday" />
        <Stat label="Follow-ups due today" value={String(dueToday)} note={`${overdue} overdue`} warn={overdue > 0} />
        <Stat label="Booked for tomorrow" value={String(tomorrow)} note="All confirmed" />
      </dl>

      <div className="grid gap-8 xl:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
        <section aria-labelledby="schedule-heading">
          <div className="mb-3 flex items-baseline justify-between">
            <h2 id="schedule-heading" className="font-display text-xl font-semibold">
              Schedule
            </h2>
            <Link href="/appointments" className="text-sm font-medium text-sea hover:underline">
              See all appointments
            </Link>
          </div>
          <ol className="overflow-hidden rounded-xl border border-line bg-paper">
            {appointments.map((a) => {
              const dim = a.status === "Completed" || a.status === "Cancelled";
              const now = a.status === "In progress";
              return (
                <li
                  key={a.id}
                  className={
                    "grid grid-cols-[4.5rem_1fr_auto] items-center gap-3 sm:grid-cols-[5.5rem_1fr_auto] border-b border-line px-4 py-3.5 last:border-b-0 " +
                    (now ? "bg-sea-wash/60 " : "") +
                    (dim ? "text-ink-soft" : "")
                  }
                >
                  <p className="text-sm font-semibold tabular-nums">{a.time}</p>
                  <div className="min-w-0">
                    <p className={"truncate font-medium " + (a.status === "Cancelled" ? "line-through" : "")}>
                      {a.client}
                    </p>
                    <p className="text-sm text-ink-soft">
                      {a.service} with {a.practitioner}
                    </p>
                  </div>
                  <Badge tone={appointmentStatusTone[a.status]}>{a.status}</Badge>
                </li>
              );
            })}
          </ol>
        </section>

        <div className="flex flex-col gap-8">
          <section aria-labelledby="queue-heading">
            <div className="mb-3 flex items-baseline justify-between">
              <h2 id="queue-heading" className="font-display text-xl font-semibold">
                Follow-ups to do now
              </h2>
              <Link href="/follow-ups" className="text-sm font-medium text-sea hover:underline">
                See all
              </Link>
            </div>
            <ul className="overflow-hidden rounded-xl border border-line bg-paper">
              {queue.map((f) => (
                <li key={f.id} className="border-b border-line px-4 py-3.5 last:border-b-0">
                  <div className="flex items-start justify-between gap-3">
                    <p className="font-medium">{f.client}</p>
                    <Badge tone={followUpStateTone[f.state]}>{f.state}</Badge>
                  </div>
                  <p className="mt-0.5 text-sm text-ink-soft">{f.reason}</p>
                  <p className="mt-1 text-xs text-ink-soft">
                    {f.kind}, by {f.owner}
                  </p>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="leads-heading">
            <h2 id="leads-heading" className="mb-3 font-display text-xl font-semibold">
              New leads, last 7 days
            </h2>
            <div className="rounded-xl border border-line bg-paper p-4">
              <div className="flex h-28 items-end gap-2" role="img" aria-label={`Bar chart of new leads per day. Total ${newLeadsThisWeek}.`}>
                {weeklyLeads.map((d) => (
                  <div key={d.day} className="flex flex-1 flex-col items-center justify-end gap-1.5">
                    <span className="text-xs font-medium tabular-nums">{d.count}</span>
                    <div
                      className={"w-full rounded-t-md " + (d.count === maxLeads ? "bg-sea" : "bg-sea/35")}
                      style={{ height: `${Math.round((d.count / maxLeads) * 72)}px` }}
                    />
                  </div>
                ))}
              </div>
              <div className="mt-2 flex gap-2">
                {weeklyLeads.map((d) => (
                  <span key={d.day} className="flex-1 text-center text-xs text-ink-soft">
                    {d.day}
                  </span>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

function Stat({ label, value, note, warn = false }: { label: string; value: string; note: string; warn?: boolean }) {
  return (
    <div className="pr-4 lg:border-l lg:border-line lg:px-6 lg:first:border-l-0 lg:first:pl-0">
      <dt className="text-sm text-ink-soft">{label}</dt>
      <dd className="mt-1 font-display text-4xl font-semibold tabular-nums">{value}</dd>
      <dd className={"mt-0.5 text-sm " + (warn ? "font-medium text-rose" : "text-ink-soft")}>{note}</dd>
    </div>
  );
}

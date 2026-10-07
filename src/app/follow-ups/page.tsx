import type { Metadata } from "next";
import { Badge, followUpStateTone } from "@/components/badge";
import { PageHeader, PlaceholderButton } from "@/components/page-header";
import { followUps } from "@/lib/sample-data";
import type { FollowUpState } from "@/lib/sample-data";

export const metadata: Metadata = { title: "Follow-ups" };

const groups: { state: FollowUpState; title: string; empty: string }[] = [
  { state: "Overdue", title: "Overdue", empty: "Nothing overdue." },
  { state: "Due today", title: "Due today", empty: "Nothing due today." },
  { state: "Upcoming", title: "Coming up", empty: "No upcoming follow-ups." },
];

export default function FollowUpsPage() {
  return (
    <>
      <PageHeader
        title="Follow-ups"
        description="Calls and messages your team still needs to send, with the oldest first."
        action={<PlaceholderButton>Add follow-up</PlaceholderButton>}
      />

      <div className="flex flex-col gap-8">
        {groups.map((g) => {
          const items = followUps.filter((f) => f.state === g.state);
          return (
            <section key={g.state} aria-labelledby={`group-${g.state}`}>
              <h2 id={`group-${g.state}`} className="mb-3 flex items-center gap-2 font-display text-xl font-semibold">
                {g.title}
                <Badge tone={followUpStateTone[g.state]}>{items.length}</Badge>
              </h2>
              {items.length === 0 ? (
                <p className="rounded-xl border border-dashed border-line bg-paper px-4 py-6 text-ink-soft">{g.empty}</p>
              ) : (
                <ul className="overflow-hidden rounded-xl border border-line bg-paper">
                  {items.map((f) => (
                    <li
                      key={f.id}
                      className="grid gap-1 border-b border-line px-4 py-3.5 last:border-b-0 sm:grid-cols-[12rem_1fr_9rem_5rem] sm:items-center sm:gap-4"
                    >
                      <p className="font-medium">{f.client}</p>
                      <p className="text-sm text-ink-soft">{f.reason}</p>
                      <p className="text-sm">
                        {f.kind}
                        <span className="block text-xs text-ink-soft">{f.due}</span>
                      </p>
                      <p className="text-sm text-ink-soft sm:text-right">{f.owner}</p>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          );
        })}
      </div>
    </>
  );
}

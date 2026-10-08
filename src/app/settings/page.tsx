import type { Metadata } from "next";
import { Suspense } from "react";
import type { ReactNode } from "react";
import { Badge } from "@/components/badge";
import { PageHeader } from "@/components/page-header";
import { getCompanyUserContext } from "@/lib/company-user-context";
import { clinic, team } from "@/lib/sample-data";

export const metadata: Metadata = { title: "Settings" };

export default function SettingsPage() {
  return (
    <>
      <PageHeader title="Settings" description="Clinic details and who can use this account. Changes are not saved yet." />

      <div className="flex max-w-3xl flex-col gap-8">
        <Suspense fallback={<SampleCompanyAndTeam />}>
          <CompanyAndTeam />
        </Suspense>

        <Section title="Connections" description="Channels and tools this clinic uses.">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="font-medium">WhatsApp</p>
              <p className="text-sm text-ink-soft">Message clients from inside the CRM.</p>
            </div>
            <Badge>Not connected</Badge>
          </div>
        </Section>
      </div>
    </>
  );
}

async function CompanyAndTeam() {
  const context = await getCompanyUserContext();
  if (!context) return <SampleCompanyAndTeam />;

  return (
    <>
      <Section title="Clinic" description="Shown on reminders and booking messages.">
        <Field label="Clinic name" value={context.company.name} />
        <Field label="Address" value={context.company.address ?? "—"} />
        <Field label="Working hours" value="Monday to Saturday, 9:00 am to 6:00 pm" />
      </Section>

      <Section title="Team" description="People who can sign in to this clinic's account.">
        <ul className="-my-3.5">
          <li className="flex items-center justify-between gap-4 border-b border-line py-3.5 last:border-b-0">
            <div>
              <p className="font-medium">{context.user.name}</p>
              <p className="text-sm text-ink-soft">{context.user.email}</p>
            </div>
            <Badge tone={context.user.role.toLowerCase() === "admin" ? "sea" : "neutral"}>{context.user.role}</Badge>
          </li>
        </ul>
      </Section>
    </>
  );
}

function SampleCompanyAndTeam() {
  return (
    <>
      <Section title="Clinic" description="Shown on reminders and booking messages.">
        <Field label="Clinic name" value={clinic.name} />
        <Field label="City" value={clinic.city} />
        <Field label="Working hours" value="Monday to Saturday, 9:00 am to 6:00 pm" />
      </Section>

      <Section title="Team" description="People who can sign in to this clinic's account.">
        <ul className="-my-3.5">
          {team.map((m) => (
            <li key={m.name} className="flex items-center justify-between gap-4 border-b border-line py-3.5 last:border-b-0">
              <div>
                <p className="font-medium">{m.name}</p>
                <p className="text-sm text-ink-soft">{m.role}</p>
              </div>
              <Badge tone={m.access === "Admin" ? "sea" : "neutral"}>{m.access}</Badge>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}

function Section({ title, description, children }: { title: string; description: string; children: ReactNode }) {
  return (
    <section className="rounded-xl border border-line bg-paper">
      <div className="border-b border-line px-5 py-4">
        <h2 className="font-display text-xl font-semibold">{title}</h2>
        <p className="text-sm text-ink-soft">{description}</p>
      </div>
      <div className="flex flex-col gap-4 px-5 py-4">{children}</div>
    </section>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid gap-0.5 sm:grid-cols-[10rem_1fr] sm:gap-4">
      <p className="text-sm text-ink-soft">{label}</p>
      <p>{value}</p>
    </div>
  );
}

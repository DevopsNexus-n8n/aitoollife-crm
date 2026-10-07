import type { Metadata } from "next";
import { LeadsTable } from "@/components/leads-table";
import { PageHeader, PlaceholderButton } from "@/components/page-header";
import { leads } from "@/lib/sample-data";

export const metadata: Metadata = { title: "Leads" };

export default function LeadsPage() {
  return (
    <>
      <PageHeader
        title="Leads"
        description="People who have asked about a treatment but have not booked or paid yet."
        action={<PlaceholderButton>Add lead</PlaceholderButton>}
      />
      <LeadsTable leads={leads} />
    </>
  );
}

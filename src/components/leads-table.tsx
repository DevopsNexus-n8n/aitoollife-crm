"use client";

import { useState } from "react";
import type { Lead, LeadStatus } from "@/lib/sample-data";
import { Badge, leadStatusTone } from "./badge";
import { TableShell, Td, Th } from "./table";

const filters: ("All" | LeadStatus)[] = ["All", "New", "Contacted", "Consultation booked", "Won", "Lost"];

export function LeadsTable({ leads }: { leads: Lead[] }) {
  const [filter, setFilter] = useState<"All" | LeadStatus>("All");
  const visible = filter === "All" ? leads : leads.filter((l) => l.status === filter);

  return (
    <div>
      <div role="group" aria-label="Filter leads by status" className="mb-4 flex flex-wrap gap-2">
        {filters.map((f) => {
          const count = f === "All" ? leads.length : leads.filter((l) => l.status === f).length;
          const active = f === filter;
          return (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              aria-pressed={active}
              className={
                "rounded-full px-3.5 py-1.5 text-sm font-medium ring-1 ring-inset transition-colors " +
                (active
                  ? "bg-pine text-white ring-pine"
                  : "bg-paper text-ink-soft ring-line hover:text-ink")
              }
            >
              {f} <span className="ml-1 opacity-70">{count}</span>
            </button>
          );
        })}
      </div>

      <TableShell label="Leads">
        <thead>
          <tr>
            <Th>Name</Th>
            <Th>Interested in</Th>
            <Th>Source</Th>
            <Th>Status</Th>
            <Th>Owner</Th>
            <Th>Last contact</Th>
          </tr>
        </thead>
        <tbody>
          {visible.map((lead) => (
            <tr key={lead.id} className="hover:bg-mist/40">
              <Td>
                <p className="font-medium">{lead.name}</p>
                <p className="text-xs text-ink-soft">{lead.phone}</p>
              </Td>
              <Td>{lead.interest}</Td>
              <Td muted>{lead.source}</Td>
              <Td>
                <Badge tone={leadStatusTone[lead.status]}>{lead.status}</Badge>
              </Td>
              <Td muted>{lead.owner}</Td>
              <Td muted>{lead.lastContact}</Td>
            </tr>
          ))}
          {visible.length === 0 && (
            <tr>
              <td colSpan={6} className="px-4 py-10 text-center text-ink-soft">
                No leads with this status yet.
              </td>
            </tr>
          )}
        </tbody>
      </TableShell>
    </div>
  );
}

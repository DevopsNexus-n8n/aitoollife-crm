import type { Metadata } from "next";
import { PageHeader, PlaceholderButton } from "@/components/page-header";
import { TableShell, Td, Th } from "@/components/table";
import { customers, formatINR } from "@/lib/sample-data";

export const metadata: Metadata = { title: "Customers" };

export default function CustomersPage() {
  const total = customers.reduce((sum, c) => sum + c.totalSpent, 0);

  return (
    <>
      <PageHeader
        title="Customers"
        description={`${customers.length} people who have visited. Together they have spent ${formatINR(total)}.`}
        action={<PlaceholderButton>Add customer</PlaceholderButton>}
      />
      <TableShell label="Customers">
        <thead>
          <tr>
            <Th>Name</Th>
            <Th>City</Th>
            <Th>Plan</Th>
            <Th>Last visit</Th>
            <Th align="right">Visits</Th>
            <Th align="right">Total spent</Th>
          </tr>
        </thead>
        <tbody>
          {customers.map((c) => (
            <tr key={c.id} className="hover:bg-mist/40">
              <Td>
                <p className="font-medium">{c.name}</p>
                <p className="text-xs text-ink-soft">{c.phone}</p>
              </Td>
              <Td muted>{c.city}</Td>
              <Td>{c.plan}</Td>
              <Td muted>{c.lastVisit}</Td>
              <Td align="right">{c.visits}</Td>
              <Td align="right">{formatINR(c.totalSpent)}</Td>
            </tr>
          ))}
        </tbody>
      </TableShell>
    </>
  );
}

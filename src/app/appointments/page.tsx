import type { Metadata } from "next";
import { Badge, appointmentStatusTone } from "@/components/badge";
import { PageHeader, PlaceholderButton } from "@/components/page-header";
import { TableShell, Td, Th } from "@/components/table";
import { appointments, clinic, upcomingAppointments } from "@/lib/sample-data";

export const metadata: Metadata = { title: "Appointments" };

export default function AppointmentsPage() {
  return (
    <>
      <PageHeader
        title="Appointments"
        description="Today's schedule first, then what is booked for the next few days."
        action={<PlaceholderButton>Book appointment</PlaceholderButton>}
      />

      <h2 className="mb-3 font-display text-xl font-semibold">Today, {clinic.today}</h2>
      <TableShell label="Today's appointments">
        <thead>
          <tr>
            <Th>Time</Th>
            <Th>Client</Th>
            <Th>Service</Th>
            <Th>With</Th>
            <Th>Room</Th>
            <Th>Status</Th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((a) => (
            <tr key={a.id} className="hover:bg-mist/40">
              <Td>
                <span className="font-medium tabular-nums">{a.time}</span>
                <span className="block text-xs text-ink-soft">{a.durationMin} min</span>
              </Td>
              <Td>{a.client}</Td>
              <Td>{a.service}</Td>
              <Td muted>{a.practitioner}</Td>
              <Td muted>{a.room}</Td>
              <Td>
                <Badge tone={appointmentStatusTone[a.status]}>{a.status}</Badge>
              </Td>
            </tr>
          ))}
        </tbody>
      </TableShell>

      <h2 className="mb-3 mt-10 font-display text-xl font-semibold">Coming up</h2>
      <TableShell label="Upcoming appointments">
        <thead>
          <tr>
            <Th>Day</Th>
            <Th>Time</Th>
            <Th>Client</Th>
            <Th>Service</Th>
            <Th>With</Th>
            <Th>Status</Th>
          </tr>
        </thead>
        <tbody>
          {upcomingAppointments.map((a) => (
            <tr key={a.id} className="hover:bg-mist/40">
              <Td>{a.day}</Td>
              <Td>
                <span className="tabular-nums">{a.time}</span>
              </Td>
              <Td>{a.client}</Td>
              <Td>{a.service}</Td>
              <Td muted>{a.practitioner}</Td>
              <Td>
                <Badge tone={appointmentStatusTone[a.status]}>{a.status}</Badge>
              </Td>
            </tr>
          ))}
        </tbody>
      </TableShell>
    </>
  );
}

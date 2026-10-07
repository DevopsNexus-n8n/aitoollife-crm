import type { ReactNode } from "react";

export type Tone = "neutral" | "sea" | "sky" | "marigold" | "rose";

const tones: Record<Tone, string> = {
  neutral: "bg-mist text-ink-soft ring-line",
  sea: "bg-sea-wash text-sea-deep ring-sea/20",
  sky: "bg-sky-wash text-sky ring-sky/20",
  marigold: "bg-marigold-wash text-marigold ring-marigold/25",
  rose: "bg-rose-wash text-rose ring-rose/20",
};

export function Badge({ tone = "neutral", children }: { tone?: Tone; children: ReactNode }) {
  return (
    <span
      className={
        "inline-flex items-center whitespace-nowrap rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset " +
        tones[tone]
      }
    >
      {children}
    </span>
  );
}

export const leadStatusTone: Record<string, Tone> = {
  New: "sky",
  Contacted: "neutral",
  "Consultation booked": "marigold",
  Won: "sea",
  Lost: "rose",
};

export const appointmentStatusTone: Record<string, Tone> = {
  Confirmed: "sky",
  Waiting: "marigold",
  "In progress": "sea",
  Completed: "neutral",
  Cancelled: "rose",
};

export const followUpStateTone: Record<string, Tone> = {
  Overdue: "rose",
  "Due today": "marigold",
  Upcoming: "neutral",
};

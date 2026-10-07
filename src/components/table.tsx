import type { ReactNode } from "react";

export function TableShell({ children, label }: { children: ReactNode; label: string }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-line bg-paper">
      <table className="w-full min-w-[40rem] border-collapse text-left text-sm" aria-label={label}>
        {children}
      </table>
    </div>
  );
}

export function Th({ children, align = "left" }: { children: ReactNode; align?: "left" | "right" }) {
  return (
    <th
      scope="col"
      className={
        "border-b border-line bg-mist/60 px-4 py-3 text-xs font-semibold text-ink-soft " +
        (align === "right" ? "text-right" : "text-left")
      }
    >
      {children}
    </th>
  );
}

export function Td({
  children,
  align = "left",
  muted = false,
}: {
  children: ReactNode;
  align?: "left" | "right";
  muted?: boolean;
}) {
  return (
    <td
      className={
        "border-b border-line px-4 py-3.5 align-middle " +
        (align === "right" ? "text-right tabular-nums " : "") +
        (muted ? "text-ink-soft" : "")
      }
    >
      {children}
    </td>
  );
}

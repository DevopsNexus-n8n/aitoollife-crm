import type { ReactNode } from "react";

export function PageHeader({
  title,
  description,
  action,
}: {
  title: string;
  description?: string;
  action?: ReactNode;
}) {
  return (
    <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
      <div>
        <h1 className="font-display text-3xl font-semibold tracking-tight">{title}</h1>
        {description && <p className="mt-1 max-w-xl text-ink-soft">{description}</p>}
      </div>
      {action}
    </div>
  );
}

export function PlaceholderButton({ children }: { children: ReactNode }) {
  return (
    <button
      type="button"
      disabled
      title="Available once the database is connected"
      className="rounded-lg bg-sea px-4 py-2.5 text-sm font-semibold text-white opacity-50"
    >
      {children}
    </button>
  );
}

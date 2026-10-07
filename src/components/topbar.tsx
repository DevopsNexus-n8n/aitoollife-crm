import { clinic } from "@/lib/sample-data";

export function Topbar() {
  return (
    <header className="flex items-center justify-between border-b border-line bg-paper px-4 py-3 sm:px-8">
      <div>
        <p className="text-sm font-semibold">{clinic.name}</p>
        <p className="text-xs text-ink-soft">{clinic.city}</p>
      </div>
      <div className="flex items-center gap-3">
        <div className="text-right">
          <p className="text-sm font-medium">Divya</p>
          <p className="text-xs text-ink-soft">Front desk</p>
        </div>
        <span
          aria-hidden="true"
          className="grid size-9 place-items-center rounded-full bg-sea-wash text-sm font-semibold text-sea-deep"
        >
          D
        </span>
      </div>
    </header>
  );
}

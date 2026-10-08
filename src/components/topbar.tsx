import { getCompanyUserContext } from "@/lib/company-user-context";
import { clinic } from "@/lib/sample-data";

export async function Topbar() {
  const context = await getCompanyUserContext();
  if (!context) return <TopbarDisplay companyName={clinic.name} location={clinic.city} userName="Divya" userRole="Front desk" />;

  return (
    <TopbarDisplay
      companyName={context.company.name}
      location={context.company.address ?? ""}
      userName={context.user.name}
      userRole={context.user.role}
    />
  );
}

export function TopbarFallback() {
  return <TopbarDisplay companyName={clinic.name} location={clinic.city} userName="Divya" userRole="Front desk" />;
}

function TopbarDisplay({
  companyName,
  location,
  userName,
  userRole,
}: {
  companyName: string;
  location: string;
  userName: string;
  userRole: string;
}) {
  return (
    <header className="flex items-center justify-between border-b border-line bg-paper px-4 py-3 sm:px-8">
      <div>
        <p className="text-sm font-semibold">{companyName}</p>
        <p className="text-xs text-ink-soft">{location}</p>
      </div>
      <div className="flex items-center gap-3">
        <div className="text-right">
          <p className="text-sm font-medium">{userName}</p>
          <p className="text-xs text-ink-soft">{userRole}</p>
        </div>
        <span
          aria-hidden="true"
          className="grid size-9 place-items-center rounded-full bg-sea-wash text-sm font-semibold text-sea-deep"
        >
          {userName.trim().charAt(0).toUpperCase() || "?"}
        </span>
      </div>
    </header>
  );
}

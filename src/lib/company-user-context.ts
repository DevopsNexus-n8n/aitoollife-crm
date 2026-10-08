import "server-only";

import { prisma } from "@/lib/prisma";

export type CompanyUserContext = {
  company: {
    id: string;
    name: string;
    address: string | null;
  };
  user: {
    id: string;
    name: string;
    email: string;
    role: string;
  };
};

export async function getCompanyUserContext(): Promise<CompanyUserContext | null> {
  const companyId = process.env.CRM_COMPANY_ID?.trim();
  const userId = process.env.CRM_USER_ID?.trim();

  if (!companyId || !userId) return null;

  try {
    const [company, user] = await Promise.all([
      prisma.company.findUnique({
        where: { id: companyId },
        select: { id: true, name: true, address: true },
      }),
      prisma.user.findUnique({
        where: { id: userId },
        select: { id: true, companyId: true, name: true, email: true, role: true },
      }),
    ]);

    if (!company || !user || user.companyId !== company.id) return null;

    return {
      company,
      user: { id: user.id, name: user.name, email: user.email, role: user.role },
    };
  } catch {
    // Keep the sample-data experience available when the database is not configured or reachable.
    return null;
  }
}

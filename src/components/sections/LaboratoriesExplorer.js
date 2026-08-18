"use client";

import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import LaboratoryCard from "@/components/cards/LaboratoryCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { StaggerGroup, StaggerItem } from "@/components/animations/StaggerGroup";
import { laboratoryPartners, laboratoryRegionsList, TOTAL_LABORATORY_PARTNERS } from "@/data/laboratoryPartners";

const filters = ["All Regions", ...laboratoryRegionsList];

export default function LaboratoriesExplorer({ showHeading = true }) {
  const [activeRegion, setActiveRegion] = useState("All Regions");

  const filtered = useMemo(() => {
    const list =
      activeRegion === "All Regions"
        ? laboratoryPartners
        : laboratoryPartners.filter((lab) => lab.region === activeRegion);
    return [...list].sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return 0;
    });
  }, [activeRegion]);

  return (
    <div>
      {showHeading && (
        <SectionHeading
          eyebrow="Accredited Partners"
          title="All IWRREC accredited laboratory partners"
          description={`${TOTAL_LABORATORY_PARTNERS}+ authorized laboratories worldwide — each accredited to test machinery, verify compliance, and issue the official IWRREC certificate.`}
        />
      )}

      <div className="mt-8 flex flex-wrap gap-2">
        {filters.map((region) => (
          <button
            key={region}
            type="button"
            onClick={() => setActiveRegion(region)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-semibold transition-colors cursor-pointer",
              activeRegion === region
                ? "border-secondary bg-secondary text-white"
                : "border-line bg-white text-muted hover:border-secondary hover:text-secondary"
            )}
          >
            {region}
            {region !== "All Regions" && (
              <span className="ml-1.5 text-xs opacity-80">
                ({laboratoryPartners.filter((l) => l.region === region).length})
              </span>
            )}
          </button>
        ))}
      </div>

      <p className="mt-4 text-sm text-muted">
        Showing {filtered.length} of {TOTAL_LABORATORY_PARTNERS}+ accredited laboratories
      </p>

      <StaggerGroup
        key={activeRegion}
        className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        amount={0.03}
      >
        {filtered.map((laboratory) => (
          <StaggerItem key={laboratory.slug}>
            <LaboratoryCard laboratory={laboratory} />
          </StaggerItem>
        ))}
      </StaggerGroup>
    </div>
  );
}

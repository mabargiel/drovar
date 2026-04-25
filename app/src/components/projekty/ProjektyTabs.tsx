"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import type { ProjektSketch } from "@/lib/sanity/queries";
import ProjektyGrid from "./ProjektyGrid";

type Category = "modulowe" | "kasowe" | "bary";

const CATEGORIES: Category[] = ["modulowe", "kasowe", "bary"];

type ProjektyTabsProps = {
  sketches: ProjektSketch[];
};

export default function ProjektyTabs({ sketches }: ProjektyTabsProps) {
  const t = useTranslations("projekty");
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const raw = searchParams.get("tab");
  const activeTab: Category =
    raw === "kasowe" || raw === "bary" ? raw : "modulowe";

  function setTab(category: Category) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("tab", category);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  const activeSketches = sketches.filter((s) => s.category === activeTab);

  return (
    <div>
      {/* Tab switcher */}
      <div className="mb-10 flex flex-wrap gap-0 border-b border-border">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setTab(cat)}
            className={`relative px-6 py-3 text-sm font-bold uppercase tracking-wider transition-colors ${
              activeTab === cat
                ? "text-accent"
                : "text-primary/60 hover:text-primary"
            }`}
          >
            {t(`tabs.${cat}`)}
            {activeTab === cat && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent" />
            )}
          </button>
        ))}
      </div>

      {/* Tab header */}
      <div className="mb-10">
        <p className="text-sm text-primary/50">
          {t("count", { count: activeSketches.length })}
        </p>
        <p className="mt-1 text-base text-primary/70">
          {t(`descriptions.${activeTab}`)}
        </p>
      </div>

      {/* Grid */}
      <ProjektyGrid
        sketches={activeSketches}
        categoryLabel={t(`tabs.${activeTab}`)}
      />
    </div>
  );
}

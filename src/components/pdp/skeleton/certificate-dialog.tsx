"use client";

import { Dialog } from "@base-ui/react/dialog";
import { XIcon, BadgeCheck, Download } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Pill } from "@/components/brand";
import { traceability, traceable, product } from "@/lib/content";

const LOT = "AM-2406";
const LAB = "Eurofins";

function Row({ label, value }: { label: string; value: string }) {
  return (
    <li className="flex items-center justify-between gap-3 border-b border-hair py-2.5 last:border-0">
      <span className="text-[14px] text-ink">{label}</span>
      <span className="flex items-center gap-2.5">
        <span className="text-[13px] text-ink-3">{value}</span>
        <Pill tone="yes" className="text-[9.5px]">
          Pass
        </Pill>
      </span>
    </li>
  );
}

function Group({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-6">
      <h3 className="text-[11.5px] font-semibold uppercase tracking-[0.14em] text-ink-3">
        {title}
      </h3>
      <ul className="mt-2">{children}</ul>
    </section>
  );
}

/** Build a self-contained, printable HTML report from the test data. */
function buildReportHtml() {
  const rows = (items: { label: string; value: string }[]) =>
    items
      .map(
        (r) =>
          `<tr><td>${r.label}</td><td class="v">${r.value}</td><td class="p">Pass</td></tr>`
      )
      .join("");

  const section = (title: string, items: { label: string; value: string }[]) =>
    `<h2>${title}</h2><table>${rows(items)}</table>`;

  return `<!doctype html><html lang="en"><head><meta charset="utf-8">
<title>${product.name} Certificate of Analysis ${LOT}</title>
<style>
  body{font-family:Georgia,'Times New Roman',serif;color:#181c19;max-width:680px;margin:40px auto;padding:0 24px;line-height:1.5}
  .eyebrow{font-family:Arial,sans-serif;letter-spacing:.14em;text-transform:uppercase;font-size:11px;color:#5f665c}
  h1{font-size:28px;margin:6px 0 2px}
  .meta{font-family:Arial,sans-serif;color:#5f665c;font-size:13px;margin-bottom:18px}
  .banner{background:#e9efe6;border-radius:8px;padding:10px 14px;font-family:Arial,sans-serif;font-size:13px;margin:14px 0 24px}
  h2{font-family:Arial,sans-serif;font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:#5f665c;margin:24px 0 6px}
  table{width:100%;border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px}
  td{padding:8px 0;border-bottom:1px solid #e1e5db}
  td.v{text-align:right;color:#5f665c}
  td.p{text-align:right;width:56px;color:#33513f;font-weight:700}
  footer{font-family:Arial,sans-serif;font-size:12px;color:#5f665c;margin-top:28px;border-top:1px solid #e1e5db;padding-top:14px}
</style></head><body>
  <p class="eyebrow">Certificate of analysis</p>
  <h1>${product.name}</h1>
  <p class="meta">Lot ${LOT} &middot; Tested by ${LAB} &middot; Sample report</p>
  <div class="banner">All panels conform.</div>
  ${section(
    "Active ingredients, label claim",
    traceable.map((i) => ({ label: i.name, value: i.dose }))
  )}
  ${section(
    "Heavy metals",
    traceability.heavyMetals.items.map((m) => ({ label: m, value: "Below limit" }))
  )}
  ${section(
    "Microbiological",
    traceability.microbiological.items.map((m) => ({ label: m, value: "Not detected" }))
  )}
  ${section(
    "Allergens",
    traceability.allergens.items.map((a) => ({ label: a, value: "Not detected" }))
  )}
  <footer>Authorized by ${LAB} Scientific. A certificate of authentication is issued for every production lot. Sample report shown for demonstration.</footer>
</body></html>`;
}

function downloadReport() {
  const blob = new Blob([buildReportHtml()], { type: "text/html" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${product.name}-certificate-of-analysis-${LOT}.html`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

/**
 * CertificateDialog, a "Tested" button that opens a centered modal with a
 * sample Certificate of Analysis (actives, heavy metals, microbiological,
 * allergens) plus a Download report action.
 */
export function CertificateDialog() {
  return (
    <Dialog.Root>
      <Dialog.Trigger render={<Button variant="ghost" size="sm" />}>
        <BadgeCheck className="size-4" />
        Tested
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-50 bg-black/30 transition-opacity duration-200 supports-backdrop-filter:backdrop-blur-xs data-ending-style:opacity-0 data-starting-style:opacity-0" />
        <Dialog.Popup className="fixed left-1/2 top-1/2 z-50 flex max-h-[88vh] w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-2xl bg-surface shadow-xl transition-all duration-200 data-ending-style:scale-95 data-ending-style:opacity-0 data-starting-style:scale-95 data-starting-style:opacity-0">
          <Dialog.Close
            render={
              <Button variant="ghost" size="icon" className="absolute right-3 top-3 z-10 border-0" />
            }
          >
            <XIcon />
            <span className="sr-only">Close</span>
          </Dialog.Close>

          {/* Scrollable body */}
          <div className="min-h-0 flex-1 overflow-y-auto p-6 sm:p-8">
            <Dialog.Title className="font-serif text-[24px] font-[400] leading-tight text-ink">
              Certificate of analysis
            </Dialog.Title>
            <Dialog.Description className="mt-1 text-[13px] text-ink-3">
              {product.name} · Lot {LOT} · Tested by {LAB}
            </Dialog.Description>

            <div className="mt-4 flex items-center gap-2 rounded-lg bg-green-mist px-3 py-2 text-[12.5px] text-ink">
              <BadgeCheck className="size-4 flex-none text-green" />
              All panels conform. Sample report shown for demonstration.
            </div>

            <Group title="Active ingredients, label claim">
              {traceable.map((ing) => (
                <Row key={ing.name} label={ing.name} value={ing.dose} />
              ))}
            </Group>
            <Group title="Heavy metals">
              {traceability.heavyMetals.items.map((m) => (
                <Row key={m} label={m} value="Below limit" />
              ))}
            </Group>
            <Group title="Microbiological">
              {traceability.microbiological.items.map((m) => (
                <Row key={m} label={m} value="Not detected" />
              ))}
            </Group>
            <Group title="Allergens">
              {traceability.allergens.items.map((a) => (
                <Row key={a} label={a} value="Not detected" />
              ))}
            </Group>
          </div>

          {/* Footer action */}
          <div className="border-t border-hair p-4">
            <Button size="lg" className="w-full" onClick={downloadReport}>
              <Download className="size-4" />
              Download report
            </Button>
          </div>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

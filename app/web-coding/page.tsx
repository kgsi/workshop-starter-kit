import Site from "./Site";
import IntegrationsSection from "./IntegrationsSection";

export const dynamic = "force-static";

export default function WebCodingPage() {
  return (
    <div className="min-h-screen w-full">
      <Site />
      <IntegrationsSection />
    </div>
  );
}

import Site from "./Site";
import FeedbackSection from "./FeedbackSection";

export const dynamic = "force-static";

export default function WebCodingPage() {
  return (
    <div className="min-h-screen w-full">
      <Site />
      <FeedbackSection />
    </div>
  );
}

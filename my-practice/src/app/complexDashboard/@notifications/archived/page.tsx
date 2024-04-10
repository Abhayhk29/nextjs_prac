import Card from "@/components/card";
import Link from "next/link";

export default function ArchiveNotifications() {
  return (
    <Card>
      <div>Notifications</div>
      <div>
        <Link href="/complexDashboard">Default</Link>
      </div>
    </Card>
  );
}
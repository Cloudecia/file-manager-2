import CollapsedStorageStatus from "./CollapsedStorageStatus";
import ExpandedStorageStatus from "./ExpandedStorageStatus";

export default function FooterSideNav({ isCollapsed, storage }: { isCollapsed: boolean; storage: any }) {
  const danger = storage.filled / storage.capcity > 0.9;

  const progressLabel = danger && "danger";

  return isCollapsed ? <CollapsedStorageStatus {...{ storage, danger, progressLabel }} /> : <ExpandedStorageStatus {...{ storage, danger, progressLabel }} />;
}

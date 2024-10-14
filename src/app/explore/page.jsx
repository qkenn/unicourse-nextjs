import { ExploreCard } from '@/ui/explore/Cards';
import { TwoColGrid } from '@/ui/Wrappers';

export default function Page() {
  return (
    <TwoColGrid>
      <ExploreCard type="Subject" />
      <ExploreCard type="Course" />
      <ExploreCard type="Programme" />
      <ExploreCard type="University" />
    </TwoColGrid>
  );
}

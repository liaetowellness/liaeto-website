import {WellnessPage,wellnessMetadata} from '@/components/wellness-page';
export const metadata=wellnessMetadata('/');
export default function Home(){return <WellnessPage path="/"/>}

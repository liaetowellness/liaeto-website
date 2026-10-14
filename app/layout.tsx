import type {Metadata} from 'next';
import './globals.css';
import './wellness.css';
export const metadata:Metadata={icons:{icon:'/favicon.svg'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ko"><body>{children}</body></html>}

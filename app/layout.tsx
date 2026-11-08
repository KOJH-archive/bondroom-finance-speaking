import type {Metadata} from 'next';
import './globals.css';
export const metadata:Metadata={title:'Bondroom · 금융 영어 스피킹',description:'채권 트레이딩·운용 회의에서 바로 말하는 영어. 15초부터 시작하는 개인 스피킹 연습실.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ko"><body>{children}</body></html>}

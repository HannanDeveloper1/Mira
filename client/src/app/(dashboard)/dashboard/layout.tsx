import React from 'react'
import Navbar from "@/components/layout/Navbar";

export default function DashboardLayout({children}:{children: React.ReactNode}) {
    return (
        <div className={'flex w-full min-h-screen'}>
            <aside className={'flex-1 h-screen bg-white max-w-66 z-20 border-r border-gray-300 border-dashed'}>
                HELLo
            </aside>
            <div className={'flex flex-col flex-4/6'}>
                <Navbar />
            <main className={'flex-1 bg-gray-50'}>
            {children}
            </main>
            </div>
        </div>
    )
}

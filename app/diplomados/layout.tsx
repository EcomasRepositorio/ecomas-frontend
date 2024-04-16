import DashboardSkeleton from "@/components/home/skeletons"
import { Suspense } from "react"


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Suspense fallback={<DashboardSkeleton />}>


      {children}


    </Suspense>
  )
}
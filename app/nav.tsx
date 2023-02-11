import Link from "next/link"

export default function Nav(){
    return(
        <div className="w-full fixed top-0 flex gap-4 justify-end items-center py-4 px-8 text-[#C04CFD] text-lg font-semibold">
          <Link
          href={'/'}
          >Home</Link>
        </div>
    )
}
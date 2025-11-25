export default function Footer() {
  return (
    <footer className="w-full bg-white  py-8 mt-20 flex flex-col items-center border-t border-white/10">
      <div className="text-black font-semibold text-sm">
        &copy; {new Date().getFullYear()} Your Name. All rights reserved.
      </div>
    </footer>
  )
}

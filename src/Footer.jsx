function Footer() {
  const footerClass = 'w-screen h-8 flex justify-center items-center bg-[#3A4750] text-[#EEEEEE] font-gsl'
  const linkClass = 'ml-[.2rem] hover:underline hover:text-[#D72323]'

  return (
    <footer className={footerClass}>
      Website developed by
      <a
        className={linkClass}
        href='https://github.com/Veronfc'
        target='_blank'>
        Veronfc
      </a>
    </footer>
  )
}

export { Footer }
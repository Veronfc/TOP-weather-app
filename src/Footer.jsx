/** @format */

function Footer() {
	const footerClass =
		'fixed bottom-0 w-screen h-8 flex justify-center items-center bg-c2 text-c1 font-gsl'
	const linkClass = 'ml-[.2rem] hover:underline hover:text-c3'

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

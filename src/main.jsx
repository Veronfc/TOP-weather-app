function Main() {
  const mainClass = 'no-scrollbar overflow-y-auto w-screen h-[calc(100vh-12.5rem)] p-8 pt-4 bg-c1 flex justify-center items-start xs:h-[calc(100vh-9.5rem)] md:h-[calc(100vh-7rem)]'
  const sectionClass = ''

  return(
    <main className={mainClass}>
      <section className={sectionClass}>
        <div className="w-full h-80 rounded-2xl bg-c2">

        </div>
        <div>
          <button>

          </button>
          <div>

          </div>
          <button>

          </button>
        </div>
      </section>
    </main>
  )
}

export { Main }
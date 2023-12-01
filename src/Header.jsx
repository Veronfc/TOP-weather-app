function Header() {
  const headerClass = 'w-screen h-20 m-auto flex gap-28 justify-center items-center bg-[#DDDDDD] text-[#3A4750] font-als text-6xl tracking-[1rem]'
  const inputClass = 'px-2 rounded-l-md text-[#3A4750] font-gsl text-xl font-semibold placeholder:text-[#3A4750] placeholder:font-normal'
  const buttonClass = 'px-2 bg-white text-[#3A4750] text-xl hover:bg-[#3A4750] hover:text-[#DDDDDD] material-symbols-outlined'

  return (
    <header className={headerClass}>
      <h1>THE WEATHERMAN</h1>
      <div className='flex'>
        <input
          className={inputClass}
          type='text'
          placeholder='Enter city name'>
        </input>
        <button
          className={buttonClass}
          title='Search for weather data'>
          search
        </button>
        <button
          className={buttonClass + ' rounded-r-md'}
          title='Save city as default'>
          save
        </button>
      </div>
    </header>
  )
}

export { Header }
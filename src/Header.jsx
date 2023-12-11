import { getWeather } from "./weather"

function Header({ city, change }) {
  const headerClass = 'w-screen h-[10.5rem] py-4 flex flex-wrap justify-center items-start gap-3 bg-c1 text-c2 font-als text-center overflow-x-hidden xs:h-[7.5rem] md:h-20 md:px-4 md:py-0 md:items-center md:gap-24'
  const h1Class = '-mr-4 text-5xl md:text-6xl tracking-[1rem]'
  const inputClass = 'px-2 rounded-l-md text-c2 font-gsl text-xl font-semibold placeholder:text-c2 placeholder:font-normal'
  const buttonClass = 'px-2 bg-white text-c2 text-xl hover:bg-c2 hover:text-c3 duration-200'

  return (
    <header className={headerClass}>
      <h1 className={h1Class}>THE WEATHERMAN</h1>
      <div className='flex'>
        <input
          className={inputClass}
          type='text'
          placeholder='City name'
          onChange={change}>
        </input>
        <button
          className={buttonClass + ' material-symbols-outlined'}
          title='Search for weather data'
          onClick={() => (getWeather(city, 'metric')).then(res => console.log(res))}>
          search
        </button>
        <button
          className={buttonClass + ' rounded-r-md material-symbols-outlined'}
          title='Save city as default'
          onClick={() => {localStorage.setItem('default_city', city)}}>
          save
        </button>
      </div>
    </header>
  )
}

export { Header }
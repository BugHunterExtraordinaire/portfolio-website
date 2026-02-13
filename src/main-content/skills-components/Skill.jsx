export default function Skill( {name, level, number} ) {

  return (
    <section aria-label={`Skill number ${number}:`} className="w-[45%] flex flex-col">
      <div className='w-full flex justify-between'>
        <p>{name}</p>
        <p>{level}%</p>
      </div>
      <div className='relative bg-[#B1B1B1] w-full h-3.75 rounded-[5px]' aria-hidden='true'>
        <div className='absolute rounded-[5px] h-3.75 left-0 top-0 bg-(--theme-color)' style={{
          width: `${level}%`
        }}></div>
      </div>
    </section>
  );
}
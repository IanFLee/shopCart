	    const clashD = {
    fontFamily: 'ClashDisplay, mono'
  };
  
    // Test font loading immediately
  const switzer = {
    fontFamily: 'Switzer, sans-serif'
  };
  
  const stardom = {
    fontFamily: 'Stardom, mono'
  };
  const gambarino = {
    fontFamily: 'Gambarino, mono'
  }
  

const card = ( { title, font } ) => (
		<div className="rounded-xl p-2.5 bg-gradient-to-br from-green-500 via-gray-400 to-green-500 shadow-2xl">
			<h2 className={`text-5xl pt-1 font-bold h-full w-full bg-white rounded-xl ${font}`}> { title } </h2>
		</div>
	)


export default card;

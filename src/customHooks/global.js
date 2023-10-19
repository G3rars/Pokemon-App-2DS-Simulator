import { useEffect, useState } from "react";
import { usePokemonsData } from "../core/api";

function useGlobal()
{
	/* variables de uso global*/
	 // esto es para poder controlar la lista en el useEffect de abajo
	const [isOn, setIsOn]= useState(false) // saber si esta encendida o apagada la consola
	const [showList, setShowList] = useState(false); // esta nos muestra la lista de pokemons
	const [detailPokemon, setdetailPokemon] = useState(false) // este muestra la ventana de detalles del pokemon
	const [index, setIndex] = useState(0) // este index controla la paginacion de la llamada a la api
	const [selectIndex, setSelectIndex] = useState(0); // este index controla la posicion de la lista
	const [select, setSelect] = useState(showList && // esto nos guarda 5 pokemons de pokemondata y los convierte en un array para iterarlos con selectIndex
		pokemonsData ? Object.values(pokemonsData.results) : {}
	  );
	const [pageIndex, setPageIndex] = useState(0)
	/* Estas variables son para animaciones*/
	const [startSystem, setStartSystem] = useState(false)
	const [icons, setIcons] = useState(false);
	const [statsAnimation, setStatAnimation] = useState(false)

	useEffect(() => {
		if (isOn)
		{
		  setTimeout(() => {
			setStartSystem(true)
		  }, 5000);
		}
		setTimeout(() => {
			setIcons(true);
		  }, 6500);
		setStartSystem(false)
		setIcons(false);
	  }, [isOn])

	  useEffect(() => {
		if (detailPokemon)
		{
		  setTimeout(() => {
			setStatAnimation(true)
		  }, 100);
		}
		setStatAnimation(false)
	  },[detailPokemon])

	return {
		isOn, 
		setIsOn,
		showList,
		setShowList,
		selectIndex,
		setSelectIndex,
		index,
		setIndex,
		startSystem,
		setStartSystem,
		icons,
		setIcons,
		select,
		setSelect,
		detailPokemon,
		setdetailPokemon,
		pageIndex, 
		setPageIndex,
		statsAnimation, 
		setStatAnimation
	}
}

export { useGlobal }
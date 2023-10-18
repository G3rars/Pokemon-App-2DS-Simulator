import { useEffect, useState } from "react";

function useGlobal()
{
	/* variables de uso global*/
	const [isOn, setIsOn]= useState(false)
	const [showList, setShowList] = useState(false);
  	const [selectIndex, setSelectIndex] = useState(0);
  	const [index, setIndex] = useState(0)
	/* Estas variables son para animaciones*/
	const [startSystem, setStartSystem] = useState(false)
	const [icons, setIcons] = useState(false);

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
		setIcons
	}
}

export { useGlobal }
function DetailsPokemon({ activePokemon, statsAnimation }) {
  return (
    <div className="custom-shadow-inset bg-white absolute flex flex-col justify-evenly z-10 w-[150px] sm:w-[270px] h-[113px] sm:h-[201px] translate-y-[69px] sm:translate-y-[122px]">
      {activePokemon &&
        activePokemon.stats &&
        activePokemon.stats.map((stat) => {
          return (
            <div
              className="flex justify-between items-center mx-2 text-[10px] sm:text-sm"
              key={stat.stat.name}
            >
              <p className="capitalize font-semibold">{stat.stat.name}</p>
              <div className="stats-bar overflow-hidden">
                <div
                  className="stats-bar-fill"
                  style={{
                    width: `${statsAnimation ? stat.base_stat : 0}%`,
                    transition: "width 0.5s ease-in-out",
                  }}
                ></div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default DetailsPokemon;

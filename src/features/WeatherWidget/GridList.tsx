import WeatherWidget from "./WeatherWidget";

interface GridListProps {}

const GridList: React.FC<GridListProps> = () => {
  return (
    <>
      <div className="w-100 p-3">
        <h3>Grid container</h3>
      </div>
      <div className="w-100 p-3 grid-container">
        <div className="grid-cell">
          <WeatherWidget
            location="New York"
            temperature={25}
            isDaytime={true}
            bounds=".grid-container"
          />
        </div>
        <div className="grid-cell"></div>
        <div className="grid-cell"></div>
        <div className="grid-cell"></div>
      </div>
    </>
  );
};

export default GridList;

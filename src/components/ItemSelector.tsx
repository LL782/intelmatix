export const ItemSelector = () => (
  <header className="itemSelector">
    <div className="itemSummary">
      <div className="itemIconSlot"></div>
      <h1 className="itemName">Pickle</h1>
      <p className="itemStock">
        <span className="currentStock">60kg</span>/
        <span className="maximumStock">150kg</span>
      </p>
    </div>
    <div className="itemSelect">
      <i className="itemMenuIcon"></i>
      <span className="itemMenuText">
        <span className="itemMenuName">Pickle</span> |{" "}
        <span className="itemMenuId">#1234</span>
      </span>
      <button className="itemMenuDropdown">
        <i className="itemMenuDropdownDecoration"></i>
      </button>
    </div>
  </header>
);

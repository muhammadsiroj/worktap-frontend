const CreateWorkTwo = ({ 
  setPage,
  setPackages,
  setPacDescription,
  setDeadline,
  setPrice }) => {

  const handleSubmit = () => {
    setPage('CreateWorkThree');
  }
  const handleSubmit2= () => {
    setPage('CreateWorkOne');
  }
  const handlePackageChange = (e) => {
    const packages = e.target.value;
    setPackages(packages);
  };
  const handlesetPacDescriptionChange = (e) => {
    const pacDes = e.target.value;
    setPacDescription(pacDes);
  };
  const handlesetDeadlineChange = (e) => {
    const deadline = e.target.value;
    setDeadline(deadline);
  };
  const handlesetPriceChange = (e) => {
    const price = e.target.value;
    setPrice(price);
  };

  return (
    <>
      <div className="container">
        <h1>Пакеты</h1>
        <div className="CreateWorkBox1">

          <select className="CreateWorkBoxSelect" onChange={handlePackageChange}>
            <option value="Economy">Эконом</option>
            <option value="Standard">Стандарт</option>
            <option value="Business">Бизнес</option>
          </select>
          <div className="CreateWorkBoxInpBox">
            <h1 className="CreateWorkBoxH1">Описание пакета</h1>
          <input placeholder="Placeholder" className="CreateWorkBoxInp1" onChange={handlesetPacDescriptionChange} type="text" name="" id="" required />
          </div>
          <div className="CreateWorkBoxInpBox">
            <h1 className="CreateWorkBoxH1">Срок выполнения</h1>
          <input placeholder="Placeholder" className="CreateWorkBoxInp2" onChange={handlesetDeadlineChange} type="number" name="" id="" required />
          </div>
          <div className="CreateWorkBoxInpBox">
            <h1 className="CreateWorkBoxH1">Стоимость в долларах</h1>
          <input placeholder="Placeholder" className="CreateWorkBoxInp2" onChange={handlesetPriceChange} type="number" name="" id="" required />
          </div>
          <button className="CreateWorkBoxBtn" >Добавить опцию</button>
        </div>
        <div className="CreateWorkBtnBox">
          <button className='CreateWorkBtnBoxBtn' onClick={handleSubmit2}>Назад</button>
          <button className='CreateWorkBtnBoxBtn2' onClick={handleSubmit}>Дальше</button>
        </div>
      </div>
    </>
  );
}

export default CreateWorkTwo;

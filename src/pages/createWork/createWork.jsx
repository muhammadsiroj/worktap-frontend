import React, { useState } from 'react';

import Profil from '../../components/navbar/profilNavbar';
import CreateWorkOne from './CreateWorkOne';
import CreateWorkTwo from './CreateWorkTwo';
import CreateWorkThree from './CreateWorkThree';
import CreateWorkFour from './CreateWorkFour';
import CreateWorkFive from './CreateWorkFive';
import CreateWorkSix from './CreateWorkSix';
import one from '../../images/one.png'
import two from '../../images/two.png'
import three from '../../images/three.png'
import four from '../../images/four.png'
import five from '../../images/five.png'
import six from '../../images/six.png'

const CreateWork = () => {
  const [page, setPage] = useState('CreateWorkOne');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState(null);
  const [packages, setPackages] = useState('Economy');
  const [pacDescription, setPacDescription] = useState('');
  const [deadline, setDeadline] = useState(null);
  const [price, setPrice] = useState(null);
  const [description, setDescription] = useState('');
  const [subDescription, setSubDescription] = useState('');


  
  return (
      <>
      <div className="CreateWorkBoox">

          <Profil />
          <div className="oneImageBox">
          {page === 'CreateWorkOne' ? <img className='oneImageBoxImg' src={one} alt="" />
              : page === 'CreateWorkTwo' ? <img className='oneImageBoxImg' src={two} alt="" />
              : page === 'CreateWorkThree' ? <img className='oneImageBoxImg' src={three} alt="" />
              : page === 'CreateWorkFour' ? <img className='oneImageBoxImg' src={four} alt="" />
              : page === 'CreateWorkFive' ? <img className='oneImageBoxImg' src={five} alt="" />
              : page === 'CreateWorkSix' ? <img className='oneImageBoxImg' src={six} alt="" />
              : ('')} 
          </div>
          {page === 'CreateWorkOne' ? (<CreateWorkOne 
          setPage={setPage} 
          setTitle={setTitle}
          setCategory={setCategory}/>)
              : page === 'CreateWorkTwo' ? (<CreateWorkTwo 
                    setPage={setPage}
                    setPackages={setPackages}
                    setPacDescription={setPacDescription}
                    setDeadline={setDeadline} 
                    setPrice={setPrice}/>)
                : page === 'CreateWorkThree' ? (<CreateWorkThree 
                    setPage={setPage}
                    setDescription={setDescription}/>)
                : page === 'CreateWorkFour' ? (<CreateWorkFour 
                    setPage={setPage}
                    setSubDescription={setSubDescription}/>)
                : page === 'CreateWorkFive' ? (<CreateWorkFive 
                    setPage={setPage}
                    title={title}
                    category={category}
                    packages={packages}
                    pacDescription={pacDescription}
                    deadline={deadline}
                    price={price}
                    description={description}
                    subDescription={subDescription}
                    />)
              : page === 'CreateWorkSix' ? (<CreateWorkSix setPage={setPage}/>)
              : ('')}
                </div>
      </>
  );
};

export default CreateWork;

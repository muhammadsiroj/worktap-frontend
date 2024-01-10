import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const Setting = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [address, setAddress] = useState('');
  const [certificate, setCertificate] = useState('');
  const [education, setEducation] = useState('');
  const [image, setImage] = useState(null);
  const [language, setLanguage] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append('address', address);
    form.append('image', image);
    form.append('certificate', certificate);
    form.append('education', education);
    form.append('language', language);

    fetch(`http://localhost:4000/update/${id}`, {
      method: 'PUT',
      body: form,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.data[0] == 1) {
            navigate(`/profil/${id}`);
        }
      })
      .catch((error) => console.error('Update error:', error));
  };

  return (
    <>
    <div className="setting">
      <form className='SettingForm' onSubmit={handleSubmit}>
        <input className='SettingInp' placeholder='address' type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
        <input className='SettingInp' placeholder='certificate' type="text" value={certificate} onChange={(e) => setCertificate(e.target.value)} />
        <input className='SettingInp' placeholder='education' type="text" value={education} onChange={(e) => setEducation(e.target.value)} />
        <input className='SettingInp7' placeholder='image' type="file" onChange={handleFileChange} />
        <input className='SettingInp' placeholder='language' type="text" value={language} onChange={(e) => setLanguage(e.target.value)} />

        <button className='SettingBtn' type="submit">submit</button>
      </form>
    </div>
    </>
  );
};

export default Setting;

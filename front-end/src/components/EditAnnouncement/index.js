import React, {useState, Component} from 'react';
import './style.scss';
import Proptypes from 'prop-types';

import DatePicker from 'react-datepicker';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const EditAnnouncement = ({handleChange, title, location, description, voluntary, picture, onEditAnnouncementSubmit, handleChangeAnnouncement, id}) => {

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (    
    <div className="editAnnouncement__container"> 
             
      <h2 className="editAnnouncement__title">Modifier votre annonce</h2>
      <form onSubmit={onEditAnnouncementSubmit} method="path" >

        <div className="editAnnouncement__input drop desktop input" style={{backgroundImage: `url(${picture})`}}>
          <input type="file" className="input" name="file" value="" />
        </div> 

        <h2 className="editAnnouncement__desktop--Title">Titre de l'annonce</h2>  
        <input onChange={handleChange} value={title} name="title" className="editAnnouncement__input title input" type="text" placeholder={title?title:"Titre de l'annonce"} />
        <p className="editAnnouncement__text editAnnouncement__desktop--Title">Date de début</p>

        <DatePicker className="editAnnouncement__input input"
          showPopperArrow={false}
          selected={startDate}
          dateFormat="d MMMM, yyyy"          
          onChange={date => setStartDate(date)}
        />

        <p className="editAnnouncement__text editAnnouncement__desktop--Title">Date de fin</p>

        <DatePicker className="editAnnouncement__input input"
          showPopperArrow={false}
          selected={endDate}
          dateFormat="d MMMM, yyyy"          
          onChange={date => setEndDate(date)}
        />

        <br/>
        <h2 className="editAnnouncement__desktop--Title">Lieu</h2>
        <input onChange={handleChange} value={location} name="location" className="editAnnouncement__input input" type="text" placeholder={location?location:"Lieu"} />
        
        <div>        
          <input className="editAnnouncement__volunteer" type="radio" id="volonteer" name="drone" value="volonteer" defaultChecked={voluntary} />
          <label className="editAnnouncement__volunteer">Bénévole</label>
        </div>

        <div>
          <input className="editAnnouncement__paid" type="radio" id="paid" name="drone" value="paid" />
          <label className="editAnnouncement__paid" defaultChecked={voluntary?false:true} >Rémunéré</label>
        </div> 

        <div className="editAnnouncement__textarea input">
          <CKEditor
            className="editor"
            editor={ClassicEditor}
            data={description}
            onChange={handleChangeAnnouncement}
          />
        </div>  

        <div className="editAnnouncement__input mobile drop input">
          <input type="file" className="input" name="file" value="" />
        </div> 

        <div className="editAnnouncement__flex">
          <button className="editAnnouncement__button button">Retour</button>
          <button type="submit" className="editAnnouncement__button button">Enregistrer</button>    
        </div>
      </form>
      
  </div>);    
}
;

EditAnnouncement.propTypes = {
  onEditAnnouncementSubmit: PropTypes.func.isRequired,
  handleChangeAnnouncement: PropTypes.func.isRequired,   
  title: Proptypes.string.isRequired,
  location: Proptypes.string.isRequired,
  description: Proptypes.string.isRequired,
  picture: Proptypes.string.isRequired,
  voluntary: Proptypes.bool.isRequired,
  id: Proptypes.number.isRequired,
  dateStart: Proptypes.string.isRequired,
  dateEnd: Proptypes.string.isRequired, 
  active: Proptypes.bool.isRequired,
}

export default EditAnnouncement;
import React from 'react';
import PropTypes from 'prop-types';
import './content.css'

const AppInfo = ({
    info: {
        textFirst,
        detailsInfo: {
            title, 
            description,
         },
        androidImage
    }
}) => (        
    <div className="app_info_section">
        { textFirst ? (
                <TextBlock info= { {title, description} }/>
            ): (
                <div className="screen">
                    <img src={androidImage} alt={ title }/>
                </div>
            )
        }
        { textFirst ? (
            <div className="screen">
                <img src={androidImage} alt={ title }/>
            </div>                    
            ): (
                <TextBlock info= { {title, description} }/>
            )
        }             
    </div>     
)

const TextBlock = ({ 
    info: {
        title,
        description
    }
}) => (
    <div className="text">
        <h1 className="info_text">{title}</h1>
        <p className='description'>
            {description}
        </p>
    </div>
)

AppInfo.propTypes = {
    info: PropTypes.element.isRequired,    
  };

export default AppInfo;
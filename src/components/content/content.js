import React, {Component} from 'react';
import chaptersAndroid from '../../res/screenshots/android/rozdil_framed.png';
import dictAndroid from '../../res/screenshots/android/dict_framed.png';
import favAndroid from '../../res/screenshots/android/favourite_framed.png';
import dialogsAndroid from '../../res/screenshots/android/dialogs_android.png';
import '../content/content.css'
import SectionOne from '../content/section_one/section_one.js';
import SectionTwo from '../content/section_two/section_two.js';


class Content extends Component {
    render() {
        return (
            <div className="content">
                <div className="wrapp_info_section">
                   <SectionOne/>
                   <SectionTwo/>
                </div>
            </div>
            );
    }
}

export default Content;
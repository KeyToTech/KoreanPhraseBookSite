import React, {Component} from 'react';
import chaptersAndroid from '../../res/screenshots/android/rozdil_framed.png';
import dictAndroid from '../../res/screenshots/android/dict_framed.png';
import favAndroid from '../../res/screenshots/android/favourite_framed.png';
import dialogsAndroid from '../../res/screenshots/android/dialogs_android.png';
import AppInfo from "./appInfo";
import '../content/content.css'

const INFO = [
    {
      textFirst: true, 
      detailsInfo: {
        title: 'Розділи',
        description: 'Знайомство, покупка одягу і навіть оренда авто. Тематично поділені слова та вирази допоможуть вам легко висловити свою думку та знайти спільну мову з оточуючими.'
      },
      androidImage: chaptersAndroid
    },
    {
        textFirst: false, 
        detailsInfo: {
            title: 'Cловник',
            description: 'Словник містить понад 900 слів. Ми зробили пошук по алфавіту, щоб ви могли миттєво переходити від А до Я.'
        },
        androidImage: dictAndroid
      },
      {
        textFirst: true, 
        detailsInfo: {
            title: 'Улюблене',
            description: 'Створіть власний набір фраз, зберігаючи їх в улюбленому.'
        },
        androidImage: favAndroid
      },
      {
        textFirst: false, 
        detailsInfo: {
            title: 'Діалоги',
            description: 'Різні життєві ситуації, представлені у вигляді діалогів між двома співрозмовниками. Це чудовий спосіб практикування мови!'
        },
        androidImage: dialogsAndroid
      }
  ];

class Content extends Component {
    render() {
        return (
            <div className="content">
                <div className="wrapp_info_section">
                    {
                        INFO.map((infoItem, i) => {
                            return(<AppInfo info= { infoItem }/>)
                        })
                    }                    
                </div>
            </div>
        );
    }
}

export default Content;
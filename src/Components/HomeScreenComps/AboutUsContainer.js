import React from 'react';
import '../../App.css';
import MaterialUiCardComp from './materialUICardComp';


const AboutUsContainer = () => {

    /*
    * Islambad Contacts
    * */
    const islamabadAddress = 'Office No.9 Al-Kausar Plaza near Regional Passport Office, G-10 Markaz';
    const islamabadEng1Name = 'Engr. Ali Saif Tiwana';
    const islamabadEng1Ph = '+92 333 5337872';
    const islamabadEng2Name = 'Engr. Hamza Zahoor';
    const islamabadEng2Ph = '+92 334 5711673';


    /*
   * Lahore Contacts
   * */
    const lahoreAddress = '126-C Iqabl Avenue-III, Lahore';
    const lahoreEng1Name = 'Engr. Adeel Jaffer';
    const lahoreEng1Ph = '+92 307 0431104';
    const lahoreEng2Name = 'Talha Bin Hamid';
    const lahoreEng2Ph = '+92 331 4762120';


    /*
    * Bahawalpur Office Details
    *
    * */
    const bahwalpurAddress = 'Office # 17, Bahawalpur Pace, Aziz Shaheed Bhatti Road,\n' +
        'Model Town A';
    const bahawalpurEngr1 = 'Engr. Azeem Jutt';
    const bahawalpurEng1ph = '+92 300 9680086';


    return (

        <div className={'briefAboutUsWrapper'}>
            <div className={'titleStyling themeDarkFontColor'}>
                About Us
            </div>
            <div className={'textStyling themeDarkFontColor'}
                 style={{
                     paddingLeft: '3em',
                     paddingRight: '3em'
                 }}
            >
                Shelters Engineering services was formed by a group of vibrant engineers and architects from
                professional institutions of Pakistan with the aim to provide general contracting, construction
                management and pre-engineered metal building services to a broad range of residential, commercial and
                industrial clients throughout the country.
            </div>

            <div className={'flexColumnCenter'}>
                <div className={'subSubHeading themeDarkFontColor'}>
                    Offices Information
                </div>

                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                }}>
                    <div style={{
                        padding:'1em'
                    }}>
                        <MaterialUiCardComp
                            officeName={'Islamabad Office'}
                            officeAddress={islamabadAddress}
                            eng1Name={islamabadEng1Name}
                            eng1Ph={islamabadEng1Ph}
                            eng2Name={islamabadEng2Name}
                            eng2Ph={islamabadEng2Ph}
                        />
                    </div>

                    <div style={{
                        padding:'1em'
                    }}>
                        <MaterialUiCardComp
                            officeName={'Lahore Office'}
                            officeAddress={lahoreAddress}
                            eng1Name={lahoreEng1Name}
                            eng1Ph={lahoreEng1Ph}
                            eng2Name={lahoreEng2Name}
                            eng2Ph={lahoreEng2Ph}
                        />
                    </div>


                    <div style={{
                        padding:'1em'
                    }}>
                        <MaterialUiCardComp
                            officeName={'Bahawalpur Office'}
                            officeAddress={bahwalpurAddress}
                            eng1Name={bahawalpurEngr1}
                            eng1Ph={bahawalpurEng1ph}
                            eng2Name={lahoreEng1Name}
                            eng2Ph={lahoreEng1Ph}
                        />
                    </div>

                </div>
            </div>
        </div>

    );
};

export default AboutUsContainer;
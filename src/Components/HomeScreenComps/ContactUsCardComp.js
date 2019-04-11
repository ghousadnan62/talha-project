import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPhone, faHome} from "@fortawesome/free-solid-svg-icons";



const ContactUsCardComp = () => {

    const transformIconPhone = 'shrink-2 down-1';
    const transformIconHome = 'shrink-2 up-2';
    const iconSize = '1x';
    /*
    * Islamabad Office Details
    * */
    const islamabadAddress = 'Office No.9 Al-Kausar Plaza near Regional Passport Office, G-10 Markaz';
    const islamabadEng1Name = 'Engr. Ali Saif Tiwana';
    const islamabadEng1Ph = '+92 333 5337872';
    const islamabadEng2Name = 'Engr. Hamza Zahoor';
    const islamabadEng2Ph = '+92 334 5711673';


    /*
    * Lahore Office Details
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
        <div className={'contactUSContentWrapper'}>

            <div className={'border'}>

                <div className={'subHeading themeDarkFontColor'}>
                    Contact Us
                </div>


                {/*-----------------------Islamabad Office-------------------------*/}

                <div className={'subSubHeading flexColumnCenter'}>
                    Islamabad Office

                    <div className={'officeInfoWrapper'}>

                        <div className={'flexRowCenter'}>
                            <FontAwesomeIcon icon={faHome} size={iconSize}
                                             transform={transformIconHome}/>
                            {islamabadAddress}
                        </div>

                        <div className={'flexRowCenter spaceEvenlyFlex paddingTop'}>
                            <div>
                                {islamabadEng1Name}
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faPhone} size={iconSize}
                                                 transform={transformIconPhone}/>
                                {islamabadEng1Ph}
                            </div>
                        </div>

                        <div className={'flexRowCenter spaceEvenlyFlex'}>
                            <div>
                                {islamabadEng2Name}
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faPhone} size={iconSize}
                                                 transform={transformIconPhone}/>
                                {islamabadEng2Ph}
                            </div>
                        </div>
                    </div>

                </div>


                {/*-----------------------Lahore Office-------------------------*/}
                <div className={'subSubHeading flexColumnCenter'}>
                    Lahore Office

                    <div className={'officeInfoWrapper'}>

                        <div className={'flexRowCenter'}>
                            <FontAwesomeIcon icon={faHome} size={iconSize}
                                             transform={transformIconHome}/>
                            {lahoreAddress}
                        </div>


                        <div style={{
                            width: '150%',
                            position: 'relative',
                            left: '-30%'
                        }}>
                            <div className={'flexRowCenter spaceEvenlyFlex paddingTop'}>
                                <div className={'lhrAddressSpaceAdjust'}>
                                    {lahoreEng1Name}
                                </div>
                                <div className={'lhrAddressSpaceAdjust'}>
                                    <FontAwesomeIcon icon={faPhone} size={iconSize}
                                                     transform={transformIconPhone}/>
                                    {lahoreEng1Ph}
                                </div>
                            </div>

                            <div className={'flexRowCenter spaceEvenlyFlex'}>
                                <div className={'lhrAddressSpaceAdjust'}>
                                    {lahoreEng2Name}
                                </div>
                                <div className={'lhrAddressSpaceAdjust'}>
                                    <FontAwesomeIcon icon={faPhone} size={iconSize}
                                                     transform={transformIconPhone}/>
                                    {lahoreEng2Ph}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


                {/*-----------------------Bahawalpur Office-------------------------*/}
                <div className={'subSubHeading flexColumnCenter'}>
                    Bahwalpur Office

                    <div className={'officeInfoWrapper'}>

                        <div className={'flexRowCenter'}>
                            <FontAwesomeIcon icon={faHome} size={iconSize}
                                             transform={transformIconHome}/>
                            {bahwalpurAddress}
                        </div>

                        <div className={'flexRowCenter spaceEvenlyFlex paddingTop'}>
                            <div>
                                {bahawalpurEngr1}
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faPhone} size={iconSize}
                                                 transform={transformIconPhone}/>
                                {bahawalpurEng1ph}
                            </div>
                        </div>

                        <div className={'flexRowCenter spaceEvenlyFlex'}>
                            <div>
                                {lahoreEng1Name}
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faPhone} size={iconSize}
                                                 transform={transformIconPhone}/>
                                {lahoreEng1Ph}
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    )
        ;
};

export default ContactUsCardComp;
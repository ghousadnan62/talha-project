import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


/*
* Card component requires following Props
* -------------------------------------
* officeName
* officeAddress
*
* eng1Name
* eng1Ph
* eng2Name
* eng2Ph
* */


const MaterialUiCardComp = (props) => {
    return (
        <div>
            <Card style={{
                display: 'flex',
                flexDirection: "column",
                alignItems: 'center',
                textAlign: 'center',
                justifyContent: 'space-around',
                border: "solid",
                borderWidth:'0.5em',
                borderStyle:'double',
                borderRadius:'1em',
                width: '20em',
                height: '18em',
                backgroundColor: '#FBF5C5',
                color: '#433D1D'
            }}>


                <CardContent>
                    <div>
                        <h2>{props.officeName}</h2>
                        <p>
                            {props.officeAddress}
                        </p>
                    </div>


                    <div style={{
                        paddingTop:'1em',
                        paddingBottom:'1em'
                    }}>
                        <h3>Contact Info</h3>
                    </div>


                    <div className={'flexRowCenter spaceBetween'}
                        style={{
                            marginTop:'-2em'
                        }}
                    >
                        <p style={{paddingRight:'1em', fontSize:'0.8em'}}>{props.eng1Name}</p>
                        <p>{props.eng1Ph}</p>
                    </div>

                    <div className={'flexRowCenter spaceBetween'}
                         style={{
                             marginTop:'-1.5em'
                         }}
                    >
                        <p  style={{paddingRight:'1em', fontSize:'0.8em'}}>{props.eng2Name}</p>
                        <p>{props.eng2Ph}</p>
                    </div>

                </CardContent>
            </Card>
        </div>
    );
};

export default MaterialUiCardComp;
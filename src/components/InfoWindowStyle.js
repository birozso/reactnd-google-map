

var mql = window.matchMedia('(max-width: 600px)');

function screenTest(e) {
    if (e.matches) {
    /* the viewport is 600 pixels wide or less */
        
        infoTitle =  {
            maxWidth: 200,
            fontFamily: 'sans-serif',
            fontSize: '14px',
            fontWeight: 400,
            padding: '10px',
            backgroundColor: 'black',
            color: 'white',
            margin: 0,
            borderRadius: '10px 10px 0px 0px' ,
            zIndex: 1000,
  
        };

        infoContent = {
            maxWidth: 200,
            fontSize: '12px',
            lineHeight: '16px',
            fontWeight: 400,
            padding: '10px 5px 10px 10px',
            maxHeight: '140px',
            overflowY: 'auto',
            overflowX: 'hidden',
            float: 'left',
            margin: 0,
            color: 'black',
            backgroundColor: 'lightgray',
            zIndex: 1000,
            borderRadius: '0px 0px 10px 10px',
            opacity: 0.9,

        };

        infoSubTitle = {
            fontSize: '14px',
            fontWeight: 700,
            padding: '5px 0',
            zIndex: 1000,

        };

    } else {
    /* the viewport is more than than 600 pixels wide */

        infoTitle =  {
            maxWidth: 300,
            fontFamily: 'sans-serif',
            fontSize: '20px',
            fontWeight: 400,
            padding: '10px',
            backgroundColor: 'black',
            color: 'white',
            margin: 0,
            borderRadius: '10px 10px 0px 0px' ,
            zIndex: 1000,
  
        };
  
        infoContent = {
            maxWidth: 300,
            fontSize: '14px',
            lineHeight: '18px',
            fontWeight: 400,
            padding: '10px 5px 10px 10px',
            maxHeight: '140px',
            overflowY: 'auto',
            overflowX: 'hidden',
            float: 'left',
            margin: 0,
            color: 'black',
            backgroundColor: 'lightgray',
            zIndex: 1000,
            borderRadius: '0px 0px 10px 10px',
            opacity: 0.9,
  
        };
  
        infoSubTitle = {
            fontSize: '16px',
            fontWeight: 700,
            padding: '5px 0',
            zIndex: 1000,
  
        };
  
    }
}




var  infoTitle =  {


};

var infoContent = {
 

};

var infoSubTitle = {


};

screenTest(mql);
mql.addListener(screenTest);


export {
    infoTitle,infoContent, infoSubTitle

};

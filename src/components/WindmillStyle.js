const K_CIRCLE_SIZE = 45;
const K_STICK_SIZE = 15;
const K_STICK_WIDTH = 35;


const windmillStyle = {
  // initially any map object has left top corner at lat lng coordinates

  position: 'absolute',
  width: K_CIRCLE_SIZE,
  height: K_CIRCLE_SIZE + K_STICK_SIZE,
  left: -K_CIRCLE_SIZE *2,
  top: -(K_CIRCLE_SIZE + K_STICK_SIZE),
  

};

const windmillCircleStyle = {
  position: 'absolute',
  left: 50,
  top: 10,
  width: K_CIRCLE_SIZE*1.8,
  height: K_CIRCLE_SIZE*1.8,
  textAlign: 'center',
  color: 'white',
  fontSize: 0,
  fontWeight: 'bold',
  padding: 0,
  cursor: 'pointer',
  opacity: 0.75,
  border: 'none',
  
};


const windmillStickStyle = {
  position: 'absolute',
  left: K_CIRCLE_SIZE ,
  top: K_CIRCLE_SIZE,
  width: K_STICK_WIDTH,
  height: K_STICK_SIZE,

};

const windmillStickStyleHover = {
  ...windmillStickStyle

};


export {
  windmillStyle,
  windmillCircleStyle,
  windmillStickStyle, windmillStickStyleHover,
  K_CIRCLE_SIZE, K_STICK_SIZE};

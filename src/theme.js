const colors = {
  aptaGreen3: '#00ae4d',
  aptaGrey4: '#444444',
  aptaGrey7: '#777777',
  aptaOrange: '#f96302',
  aptaRed1: '#ed1c24',
  aptaWhite: '#ffffff',
  aptaYellow2: '#ffc20e',
  interventionGrey: '#303030',
  darkText: '#000'
};

const textDefault = {
  margin: '0',
  padding: '0',
  fontFamily: 'Open Sans',
  fontWeight: '400',
  fontSize: '2.1vw',
  color: colors.aptaWhite
};

const base = {
  row: {
    display: 'flex',
    flexDirection: 'row'
  },
  column: {
    display: 'flex',
    flexDirection: 'column'
  },
  fillParent: {
    width: '100%',
    height: '100%'
  },
  flexCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  flexStart: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  flexEnd: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  content: {
    flex: '1'
  },
  contentHidden: {
    flex: '1',
    display: 'none'
  },
  a: {
    textDecoration: 'none'
  },
  button: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    border: '0 none',
    fontSize: '2.1vw',
    fontWeight: '400',
    color: colors.aptaOrange,
    fontFamily: 'Open Sans',
    height: '13vmin',
    lineHeight: '4vmin',
    margin: '0.5vw'
  },
  messageBar: {
    ...textDefault,
    position: 'absolute',
    top: '2%',
    left: '0',
    right: '0',
    textAlign: 'center',
    padding: '5px 0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white'
  }
};

const style = {
  messageBarInfo: {
    ...base.messageBar,
    backgroundColor: colors.aptaGreen3
  },
  messageBarError: {
    ...base.messageBar,
    backgroundColor: colors.aptaRed1
  },
  messageBarWarning: {
    ...base.messageBar,
    backgroundColor: colors.aptaYellow2,
    color: colors.darkText
  },
  buttonPrimary: {
    backgroundColor: colors.aptaGreen3,
    color: '#FFF'
  },
  buttonProXtra: {
    backgroundColor: '#000',
    color: colors.aptaOrange,
    border: `1px solid ${colors.aptaOrange}`
  },
  buttonBig: {
    height: '5vw',
    minWidth: '20vw'
  },
  bold: {
    fontWeight: '900'
  },
  semiBold: {
    fontWeight: '600'
  },
  a: {
    color: colors.aptaOrange
  },
  span: {
    ...textDefault
  },
  h1: {
    ...textDefault,
    fontSize: '8.8vw',
    fontWeight: '600',
    textAlign: 'center'
  },
  h2: {
    ...textDefault,
    fontSize: '5.2vw',
    fontWeight: '600',
    textAlign: 'center'
  },
  h2Img: {
    ...textDefault,
    fontSize: '5.2vw',
    fontWeight: '600',
    textAlign: 'center',
    marginLeft: '30px',
    height: '15vh'
  },
  h3: {
    ...textDefault,
    fontSize: '3.5vw',
    fontWeight: '600',
    textAlign: 'center'
  },
  defaultText: {
    ...textDefault
  },
  smallText: { /* AKA helper text */
    ...textDefault,
    fontSize: '1.3vw'
  },
  savings: {
    ...textDefault,
    color: colors.aptaGreen3
  },
  icon: {
    fontSize: '6vmin',
    color: colors.aptaOrange
  },
  icon_header: {
    fontSize: '4vmin',
    color: colors.aptaOrange,
    borderStyle: 'solid',
    borderWidth: '2px',
    borderColor: '#FFF'
  }
};

export default Object.assign({}, colors, base, style);

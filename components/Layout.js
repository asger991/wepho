import Header from './Header'

const Layout = props => (
    <div style={layoutStyle}>
      <Header />
      {/* <div style={pageStyle}> */}
        {props.children}
      {/* </div> */}
    </div>
);

const layoutStyle = {
    margin: '-8px',
    border: '1px solid #DDD'
};

// const pageStyle = {
//     padding: '0 10rem'
// }

export default Layout;
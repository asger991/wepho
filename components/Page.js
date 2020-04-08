const Page = props => (
    <div style={pageStyle}>
        {props.children}
    </div>
);

const pageStyle = {
    backgroundColor: '#FCF7EF',
    padding: '3rem 10rem',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',

}

export default Page
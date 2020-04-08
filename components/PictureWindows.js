
const PictureWindows = () => (
    <>
    <div style={infoTextStyle}>
      <p>Søg og sammenlign nemt priser på bryllupsfotografer</p>
    </div>
    <div style={gridStyle}>
      <div style={pictureStyle}>
          <p>PICTURE</p>
      </div>
      <div style={pictureStyle}>
          <p>PICTURE</p>
      </div>
      <div style={pictureStyle}>
          <p>PICTURE</p>
      </div>
    </div>
    </>
)

const infoTextStyle = {
    display: 'flex',
    justifyContent: 'flex-end',
    marginRight: '3rem',
}

const gridStyle = {
    display: 'flex',
    justifyContent: 'space-between',
}

const pictureStyle = {
    border: '1px solid #000',
    height: '650px',
    width: '350px',
    marginRight: 2
}

export default PictureWindows;
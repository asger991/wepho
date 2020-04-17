const AboutText = () => {
  return (
    <div style={boxStyle}>
      <h1 style={headlineStyle}>Ideen bag We∙pho</h1>
      <p style={textStyle}>
        Hos We•pho har vi gjort det nemt at få et overblik, når man er på udkig
        efter sin bryllupsfotograf. Op til jeres dag skal der være så få
        bekymringer som muligt, så man kan slappe af og nyde, at den vigtigste
        dag i ens liv forløber perfekt.
        <br /> <br /> Hos We•pho kan du søge ud fra kriterier, som passer netop
        Jeres situation, og swipe gennem Danmarks største kartotek af de mest
        benyttede og dygtigste fotografer på markedet.
        <br /> <br /> Klik ind på fotografens profil, og se mere til deres
        arbejde, og læs lidt om hvem de er. Når I har fundet nogle matchende
        kandidater, kan I booke formødet gennem We•pho, og dermed sikre jer
        We•pho’s særlige tilbudspriser – det er gratis og uforpligtende. Vi
        glæder os til at booke Jeres formøde.
      </p>
    </div>
  );
};

const boxStyle = {
  boxSizing: "border-box",
  display: "flex",
  alignContent: "center",
  flexDirection: "column",
  alignItems: "center",
  width: "65%",
  margin: "20rem 0 0 0",
};

const headlineStyle = {
  fontFamily: "Kaiti TC",
  fontWeight: "100",
  fontSize: "70px",
};

const textStyle = {
  textAlign: "justify",
  fontFamily: "Kaiti TC",
  fontSize: "30px",
  lineHeight: "1.3",
};

const signedStyle = {
  fontSize: "45px",
  lineHeight: "2",
  letterSpacing: "3px",
};

export default AboutText;
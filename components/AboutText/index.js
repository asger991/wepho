const AboutText = () => {
  return (
    <div style={containerStyle}>
      <h1 style={headlineStyle}>Ideen bag</h1>
      <p style={textStyle}>
      Et billede siger mere end tusinde ord, og med de perfekte bryllupsbilleder, 
      kan I forevigt mindes Jeres store dag.
        <br /> <br /> Hos We•pho har vi gjort det nemt at få et overblik, når I 
        skal finde og booke Jeres bryllupsfotograf. 
        <br /> <br /> Planlægningen af et bryllup indebærer mange detaljer 
        og elementer, og op til jeres store dag skal der være så få bekymringer 
        som mulig, så I kan slappe af og nyde dagen fuldt ud.
        <br /> <br />For at forenkle processen med at finde den perfekte fotograf 
        til Jeres bryllup, har vi hos We•pho skabt en landsdækkende database af bryllupsfotografer.
        <br /> <br />We•pho er sat I verden med to primære formål; 
        <br /> <br />
        1. At skabe den bedste oplevelse for forbrugere, der søger efter bryllupsfotografer 

        2. At generere en øget aktivitet for de danske bryllupsfotografer, for dermed at gavne deres virksomhed 
        <br /> <br />
        Gennem vores platform kan I nemt søge ud fra kriterier, der passer til Jeres bryllup, 
        og swipe Jer igennem Danmarks største kartotek af de dygtigste og mest benyttede bryllupsfotografer 
        på markedet. Når I foretager Jeres søgning kan I klikke ind på fotografernes profiler, se visuelle 
        eksempler på deres arbejder, og læse lidt om hvem de er. Når I har fundet nogle kandidater, der passer 
        til jeres krav og forventninger, kan I booke et gratis og uforpligtende møde gennem We•pho, og dermed 
        sikre jer We•pho’s særlige tilbudspriser. 
        <br /> <br />
        Vi glæder os til at hjælpe Jer med at finde den perfekte fotograf til Jeres bryllup. 
        <br /> <br />
        - We•pho
        <br /> <br />
        Læs mere om We•pho her [link til FAQ] 
      </p>
      <span style={signedStyle}>- We•pho</span>
    </div>
  );
};

const containerStyle = {
  boxSizing: "border-box",
  display: "flex",
  alignContent: "center",
  flexDirection: "column",
  alignItems: "center",
  width: "65%",
  height: "100vh",
  margin: "10rem 0 10rem 0",
};

const headlineStyle = {
  fontWeight: "100",
  fontSize: "70px",
  color: "#373F51",
};

const textStyle = {
  textAlign: "justify",
  fontSize: "30px",
  lineHeight: "1.3",
};

const signedStyle = {
  fontSize: "45px",
  lineHeight: "2",
  letterSpacing: "3px",
};

export default AboutText;

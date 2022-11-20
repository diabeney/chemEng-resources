import NavBar from "../components/NavBar";

export type themeProps = {
  foreground: string;
  background: string;
  accent: string;
  mode: string;
};

function Home() {
  return (
    <>
      <NavBar />
    </>
  );
}

export default Home;

import Footer from "./components/footer";
import MainContent from "./components/main-content";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="relative flex min-h-screen flex-col bg-[#fafafa]">
      <Navbar />
      <main className="flex-1">
        <MainContent />
      </main>
      <Footer />
    </div>
  );
}

export default App;

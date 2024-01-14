import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header/Header";
import MyCard from "./MyCard/MyCard";
import Footer from "./Footer/Footer";

function App() {
  const dogs = [
    {
      image: "./assets/husky.png",
      name: "Bartolo",
      description:
        "Lleno de energía y listo para jugar. ¡Dale a Bartolo el hogar amoroso que se merece!",
      tagText: "Husky",
      tagBg: "success",
    },
    {
      image: "./assets/bobtail.png",
      name: "Messi",
      description:
        "Es jugueton, amigable y se lleva bien con niños y otros animales. ¡Haz de Messi parte de tu familia hoy mismo!",
      tagText: "Bobtail",
      tagBg: "primary",
    },
    {
      image: "./assets/shar-pei.png",
      name: "Gohan",
      description:
        "Un perro de tamaño mediano con un corazon gigante. Hazte amigo de Gohan y experimenta un amor incondicional!",
      tagText: "Shar Pei",
      tagBg: "danger",
    },
    {
      image: "./assets/beagle.png",
      name: "Princesa",
      description:
        "Es una compañera leal y cariñosa que adora lo mimos y los abrazos. ¡Ayuda a Princesa a encontrar su final feliz!",
      tagText: "Beagle",
      tagBg: "warning",
    },
  ];

  return (
    <div className="App">
      <Header title="Adopta un perrito" />
      <div className="card-container">
        {dogs.map((dog, index) => (
          <MyCard key={index} {...dog} />
        ))}
      </div>
      <Footer description="Explora nuestra galería de adopción de perros para encontrar a tu compañero perfecto. Tenemos una variedad de perros con diferentes personalidades y tamaños, todos en busca de un hogar amoroso. Cada imagen captura su esencia única. Adopta un perro y bríndale una segunda oportunidad. Encuentra a tu compañero peludo para siempre." />
    </div>
  );
}

export default App;

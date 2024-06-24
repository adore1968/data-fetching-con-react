import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [imageUrl, setImageUrl] = useState("");

  const fetchData = async () => {
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      if (response.ok) {
        const data = await response.json();
        setImageUrl(data.message);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div>
        <h1>Cargando...</h1>
      </div>
    );
  }

  return (
    <main className="bg-pink-100 min-h-screen">
      <section className="flex justify-center items-center py-5 container mx-auto">
        <div className="flex flex-col gap-3">
          <img
            src={imageUrl}
            alt="Imagen de perrito aleatorio"
            className="rounded"
          />
          <button
            onClick={fetchData}
            className="bg-black text-white text-xl rounded px-4 py-2.5"
          >
            ¡Otro!
            <span role="img" aria-label="corazón">
              ❤️
            </span>
          </button>
        </div>
      </section>
    </main>
  );
}

export default App;

import { useEffect, useState } from "react";

// function useGeolocation() {
//   const [isLoading, setIsLoading] = useState(false);
//   const [position, setPosition] = useState({});
//   const [error, setError] = useState(null);

//   function getPosition() {
//     if (!navigator.geolocation)
//       return setError("Your browser does not support geolocation");

//     setIsLoading(true);
//     navigator.geolocation.getCurrentPosition(
//       (pos) => {
//         setPosition({
//           lat: pos.coords.latitude,
//           lng: pos.coords.longitude,
//         });
//         setIsLoading(false);
//       },
//       (error) => {
//         setError(error.message);
//         setIsLoading(false);
//       }
//     );
//   }

//   return { isLoading, position, error, getPosition };
// }

// export default function App() {
//   const {
//     isLoading,
//     position: { lat, lng },
//     error,
//     getPosition,
//   } = useGeolocation();
//   const [countClicks, setCountClicks] = useState(0);

//   function handleClick() {
//     setCountClicks((count) => count + 1);
//     getPosition();
//   }
//   return (
//     <div>
//       <button onClick={handleClick} disabled={isLoading}>
//         Get my position
//       </button>

//       {isLoading && <p>Loading position...</p>}
//       {error && <p>{error}</p>}
//       {!isLoading && !error && lat && lng && (
//         <p>
//           Your GPS position:{" "}
//           <a
//             target="_blank"
//             rel="noreferrer"
//             href={`https://www.openstreetmap.org/#map=16/${lat}/${lng}`}
//           >
//             {lat}, {lng}
//           </a>
//         </p>
//       )}

//       <p>You requested position {countClicks} times</p>
//     </div>
//   );
// }

export default function App() {
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    async function fetchHeroes() {
      try {
        const res = await fetch("https://api.opendota.com/api/heroes");
        const data = await res.json();
        setHeroes(data);
      } catch (err) {
        console.error("Failed to fetch heroes:", err);
      }
    }

    fetchHeroes();
  }, []);

  return (
    <div style={{ padding: "1rem" }}>
      <h1>Dota Heroes</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {heroes.map((hero) => {
          const heroName = hero.name.replace("npc_dota_hero_", "");
          const imageUrl = `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${heroName}.png`;

          return (
            <div key={hero.id} style={{ width: "150px", textAlign: "center" }}>
              <img
                src={imageUrl}
                alt={hero.localized_name}
                style={{ width: "100%", borderRadius: "8px" }}
              />
              <p>{hero.localized_name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

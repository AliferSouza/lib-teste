async function getLocation() {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            resolve({ latitude, longitude });
          },
          (error) => {
            reject(error);
          }
        );
      } else {
        const error = new Error("Geolocation is not supported by this browser.");
        reject(error);
      }
    });
  }
  
  export default async function getLatLong() {
    try {
      const { latitude, longitude } = await getLocation();
      return [latitude, longitude];
    } catch (error) {
      console.log("Erro ao obter localização:", error.message);
      return [null, null];
    }
  }
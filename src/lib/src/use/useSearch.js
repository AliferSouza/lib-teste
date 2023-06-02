export default function useSearch(props) {
  try {
    const location = window.location;
     const prop = location[props];
     return decodeURIComponent(prop) || location

  } catch (error) {
    throw error;
  }
}

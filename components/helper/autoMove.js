const autoMove = (x, y, z) => {
  const now = x;
  const next = y;
  const places = z;

  now.addEventListener("change", (e) => {
    // console.log(e.target.value);
    const value = e.target.value;
    for (let index = 0; index < places.length; index++) {
      const element = places[index];
      console.log(element);
    }
  });
};

export default autoMove;

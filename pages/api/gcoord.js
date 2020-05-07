const gcoord = require("gcoord");

export default (req, res) => {
  const result = transformCoord(req.query || {});
  res.statusCode = 200;
  res.json(result);
};

function transformCoord(params) {
  const { lng, lat, current, target } = params;
  var result = gcoord.transform(
    [lng, lat], // lng lng coordination
    gcoord[current], // current coordinate
    gcoord[target] // target coordinate
  );
  return {
    lng: result[0],
    lat: result[1],
    current,
    target,
  };
}

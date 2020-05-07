const gcoord = require("gcoord");

export default (req, res) => {
  const result = transformCoord(req.query || {});
  res.statusCode = 200;
  res.json(result);
};

function transformCoord(params) {
  const { lng, lat, current, target } = params;
  var result = gcoord.transform(
    [lng, lat], // 经纬度坐标
    gcoord[current], // 当前坐标系
    gcoord[target] // 目标坐标系
  );
  return {
    lng: result[0],
    lat: result[1],
    current,
    target,
  };
}

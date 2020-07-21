const express = require("express");
const router = express.Router();
const Crops = require("../../models/crops");

var client = require("../../elasticsearch/es_helper.js");
const cropIndex = "crop";

router.get("/name/:crop", async (req, res, next) => {
  const crop = req.params.crop;
  try {
    const data = await Crops.find(
      { name: { $regex: crop, $options: "i" } },
      null,
      { sort: "-date" },
      function (err, docs) {}
    );
    return res.status(200).json(data);
  } catch (e) {
    return res.json(e);
  }
});

router.get("/city/:city", async (req, res, next) => {
  const city = req.params.city;
  try {
    const data = await Crops.find(
      { city: { $regex: city, $options: "i" } },
      null,
      { sort: "-date" },
      function (err, docs) {}
    );
    return res.status(200).json(data);
  } catch (e) {
    return res.json(e);
  }
});

router.get("/anydata/:data", async (req, res, next) => {
  const reqData = req.params.data;
  try {
    const data = await Crops.find(
      {
        $or: [
          { city: { $regex: reqData, $options: "i" } },
          { name: { $regex: reqData, $options: "i" } },
          { farmer_name: { $regex: reqData, $options: "i" } },
        ],
      },
      null,
      { sort: "-date" },
      function (err, docs) {}
    );
    return res.status(200).json(data);
  } catch (e) {
    return res.json(e);
  }
});

router.get("/all", async (req, res, next) => {
  try {
    const data = await Crops.find({}, null, { sort: "-date" }, function (
      err,
      docs
    ) {});
    return res.status(200).json(data);
  } catch (e) {
    return res.json(e);
  }
});

router.get("/get-crop/:id", async (req, res, next) => {
  const id = req.params.id;
  try {
    const crop = await Crops.findById(id);
    return res.json({ crop: crop, success: true });
  } catch (e) {
    return res.json({ success: false });
  }
});

router.post("/create-es-index", async (req, res, next) => {
  try {
    const crops = await Crops.find({}, null, { sort: "-date" });

    client.ping(
      {
        requestTimeout: 30000,
      },
      function (error) {
        if (error) {
          res.json({ success: true, message: "not able to connect" });
          console.error(error);
        } else {
          client.indices.delete({ index: cropIndex }, function (
            err,
            resp,
            status
          ) {
            console.log("delete", resp);
            for (let crop of crops) {
              client.index(
                {
                  index: cropIndex,
                  body:{crop},
                },
                function (err, resp, status) {
                  console.log(resp);
                }
              );
            }
          });
          res.json({ success: true, message: "succesful create" });
        }
      }
    );
  } catch (e) {
    res.json({ success: false, message: "error occured", error: e });
  }
});

// router.get("/es-search/:id", async (req, res, next) => {
//   const id = req.params.id;
//   try {
//     const crop = await Crops.findById(id);
//     return res.json({ crop: crop, success: true });
//   } catch (e) {
//     return res.json({ success: false });
//   }
// });
router.get("/es-search/city/:crop", async (req, res, next) => {
  const crop = req.params.crop;
  
  try {
    //  const lal = "city"
    //  const valll = "d"
    //  const srch  = `${cropIndex}.${field}`
     const val = `*${crop}*`
     console.log("here")

    client.search({  
      index: cropIndex,
      body: {
        "query": {
          "wildcard": {
           "crop.city": val
          }
        }
      }
    },function (error, response,status) {
        if (error){
          console.log("search error: "+error)
        }
        else {
          console.log("--- Response ---");
          console.log(response);
          console.log("--- Hits ---");
          const data = []
          response.hits.hits.forEach(function(hit){
            data.push(hit['_source']['crop']);
          })
          res.status(200).json(data);        }
    });

  } catch (e) {
    res.json({ success: false, message: "error occured", error: e });
  }
});
router.get("/es-search/name/:crop", async (req, res, next) => {
  const crop = req.params.crop;
  
  try {
    //  const lal = "city"
    //  const valll = "d"
    //  const srch  = `${cropIndex}.${field}`
     const val = `*${crop}*`
     console.log("here")

    client.search({  
      index: cropIndex,
      body: {
        "query": {
          "wildcard": {
           "crop.name": val
          }
        }
      }
    },function (error, response,status) {
        if (error){
          console.log("search error: "+error)
        }
        else {
          console.log("--- Response ---");
          console.log(response);
          console.log("--- Hits ---");
          const data = []
          response.hits.hits.forEach(function(hit){
            data.push(hit['_source']['crop']);
          })
          res.status(200).json(data);        }
    });

  } catch (e) {
    res.json({ success: false, message: "error occured", error: e });
  }
});

module.exports = router;

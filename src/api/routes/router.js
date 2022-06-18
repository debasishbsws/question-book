// API call routers "api/v1/"
const router = require("express").Router();
const controller = require("../controllers/controller")
const upload = require("../middleware/multerUpload");


router.route('/')
    .get((req, res) => {
        res.send("API Home");
    })
    .post((req, res) => {
        res.send("Dosen't Expect any Data.");
    });


router.route("/institute")
    .get((req, res) => {
        controller.getAllInstitute().then(data => {
            res.json(data);
        });
    })
    .post((req, res) => {
        controller.addNewInstitute(req.body).then(res => {
            res.send("OKK");
        })
    });

router.route("/institute/:id")
    .get((req, res) => {
        controller.getOneInstitute(req.params.id).then(data => {
            res.json(data);
        });
    });


router.route("/paper").post(upload.single("pdf"), (req, res) => {
    controller.addNewExam(req.file, req.body).then(data => {
        if (data) {
            res.send(data);
        } else {
            res.send("Success");
        }

    })
    console.log(req.file);
});
router.route("/ad")
    .post((req, res) => {
        console.log(req.query);
    })


module.exports = router;
/*
 * IMT-project
 */

const Router = require("koa-router");
// const pagexray = require("pagexray");
const router = new Router();
const videoserver = require("./../../app/controllers/videoserver"); 
const moredrivers = require("./../../app/controllers/moredrivers");


// video
router.post("/searchvideocase", videoserver.searchvideocase);
router.post("/videocasenewinsert", videoserver.videocasenewinsert);
router.post("/getcaseinfo", videoserver.getcaseinfo);
router.post("/editconform", videoserver.editconform);
router.post("/performcase", videoserver.performcase);
router.post("/getLoginfo", videoserver.getLoginfo);
router.post("/deleteconform", videoserver.deleteconform);


// 兼容性
router.post("/drivercaserun", moredrivers.drivercaserun);
router.post("/getallcases", moredrivers.getallcases);
router.post("/getlogdatainfo", moredrivers.getlogdatainfo);
router.post("/getcodeinfo", moredrivers.getcodeinfo);
router.post("/resetmainvideo", moredrivers.resetmainvideo);


module.exports = router;


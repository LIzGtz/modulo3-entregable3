const Course = require("../models/courses.model");
const Video = require("../models/videos.model");

const createVideo = async (req, res) => {
    const { courseId } = req.params;
    
    const course = await Course.findByPk(courseId, {
        include: Video
    });
    
    if (course == null) {
        res.status(404).end();
        return;
    }
    
    const { title, url } = req.body;
    const newVideo = await Video.create({ title, url, courseId: courseId, createdOn: Date.now()});

    // course.addVideo(newVideo);
    //await course.save();

    res.status(200).json(newVideo);
}

const deleteVideo = async (req, res) => {
    const { courseId, videoId } = req.params;

    const course = await Course.findByPk(courseId, {
        include: Video
    });

    if (course == null) {
        res.status(404).end();
        return;
    }

    const video = course.videos.find(v => v.id === parseInt(videoId));

    if (video == null) {
        res.status(404).end();
        return;       
    }

    await video.destroy();
}

module.exports = {
    createVideo,
    deleteVideo
}
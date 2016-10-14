function framesToTime(numFrames, fps) {
    var totalSeconds = floor(numFrames / fps);
    var mins = floor(totalSeconds / 60);
    var secs = totalSeconds % 60;

    if(mins < 10) {
        mins = "0" + mins;
    }

    if(secs < 10) {
        secs = "0" + secs;
    }
    return mins + ":" + secs;
}

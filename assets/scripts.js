var popup = getElementById("popup")

Object.defineProperty(HTMLMediaElement.prototype, 'playing', {
    get: function(){
        return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
    }
})

if(document.getElementById('bgvid').playing){ // checks if element is playing right now
    // Do anything you want to
    popup.style.display = "none";
}

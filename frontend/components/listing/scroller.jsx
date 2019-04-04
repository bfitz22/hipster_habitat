// document.addEventListener('scroll', (e) => {
        //   return this.dragger();
        // }

constructor(props) {
    super(props);
    this.getDistance = this.getDistance.bind(this);
    this.getPosition = this.getPosition.bind(this);
}

getPosition(ele) {
    var xPos = 0, yPos = 0;

    while (ele) {
        xPos += (ele.offsetLeft - ele.scrollLeft + ele.clientLeft);
        yPos += (ele.offsetTop - ele.scrollTop + ele.clientTop);
        ele = ele.offsetParent;
    }

    return { x: xPos, y: yPos };
}

getDistance(a, b) {
    const aPosition = this.getPosition(a);
    const bPosition = this.getPosition(b);

    return Math.hypot(aPosition.x - bPosition.x, aPosition.y - bPosition.y);
}

dragger() {
    // const $anchor = document.getElementById("anchor");
    // let $scroller = document.getElementById("scroller");
    let sticky = {
        zIndex: "1",
        border: "2px solid rgb(235, 235, 235)",
        height: "320px",
        width: "319px",
        position: "fixed",
        top: "0px",
        right: "400px",
        backgroundColor: "white",
    };
    let normal = {
        zIndex: "1",
        border: "2px solid rgb(235, 235, 235)",
        height: "320px",
        width: "319px",
        position: "absolute",
        top: "525px",
        right: "400px",
        backgroundColor: "white",
    };


    const move = () => {
        let st = $(window).scrollTop();
        // let ot = $anchor.offset().top;
        let ot = this.getDistance(st, document.getElementById("anchor"));
        if (st > ot) {
            return <div id="scroller" style={sticky}></div>
        } else {
            return <div id="scroller" style={normal}></div>
        }
    };
    // $(window).scroll(move);
}
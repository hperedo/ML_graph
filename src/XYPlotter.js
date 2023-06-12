class XYPlotter {
  constructor(canvas) {
    this.canvas = canvas;
    this.context = canvas.getContext("2d");
    this.xMin = 0;
    this.xMax = canvas.width;
    this.yMin = 0;
    this.yMax = canvas.height;
  }

  transformXY() {
    this.context.translate(0, this.canvas.height);
    this.context.scale(1, -1);
  }

  plotLine(x1, y1, x2, y2, color) {
    this.context.beginPath();
    this.context.moveTo(x1, y1);
    this.context.lineTo(x2, y2);
    this.context.strokeStyle = color;
    this.context.stroke();
  }

  plotPoint(x, y, color) {
    this.context.fillStyle = color;
    this.context.fillRect(x, y, 1, 1);
  }
}

export default XYPlotter;
